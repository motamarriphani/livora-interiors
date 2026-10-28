// POST /api/enquiry: validates a contact form submission, stores it in D1 and emails an alert.

/**
 * @typedef {object} Env
 * @property {D1Database} DB
 * @property {{ send: (message: object) => Promise<{ messageId?: string }> }} EMAIL
 * @property {string} ENQUIRY_FROM
 * @property {string} ENQUIRY_TO
 * @property {string} ENQUIRY_CC Comma-separated.
 */
/** @typedef {{ prepare: (sql: string) => { bind: (...values: unknown[]) => { run: () => Promise<{ meta: { last_row_id: number } }>, first: <T>() => Promise<T | null> } } }} D1Database */

export const PROJECT_TYPES = ['Residential', 'Commercial', 'Turnkey', 'Hospitality', 'Renovation', 'Other'];

const ALLOWED_ORIGINS = ['https://thelivorainteriors.com', 'http://localhost:3000', 'http://localhost:8787'];
const MAX_BODY_BYTES = 10_000;
const RATE_LIMIT_PER_HOUR = 5;
const LIMITS = { name: 100, phone: 20, email: 254, locality: 100, message: 2000 };

/**
 * Validate and normalise a submission. Returns the clean enquiry or a map of field errors.
 * Mirrors the checks in src/components/ContactSection.tsx.
 * @param {Record<string, unknown>} body
 */
export function validateEnquiry(body) {
  const str = (key) => (typeof body[key] === 'string' ? body[key].trim() : '');
  const enquiry = {
    name: str('name'),
    phone: str('phone'),
    projectType: str('projectType'),
    email: str('email'),
    locality: str('locality'),
    message: str('message'),
  };

  /** @type {Record<string, string>} */
  const errors = {};
  if (!enquiry.name) errors.name = 'required';
  if (enquiry.phone.replace(/\D/g, '').replace(/^91/, '').length !== 10) errors.phone = 'invalid';
  if (!PROJECT_TYPES.includes(enquiry.projectType)) errors.type = 'invalid';
  if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) errors.email = 'invalid';
  for (const [field, max] of Object.entries(LIMITS)) {
    if (enquiry[field].length > max) errors[field] = 'too_long';
  }

  return Object.keys(errors).length ? { errors } : { enquiry };
}

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** Build the alert email body. Exported for tests. */
export function buildAlert(enquiry, id) {
  const rows = [
    ['Name', enquiry.name],
    ['Phone', enquiry.phone],
    ['Project type', enquiry.projectType],
    ['Email', enquiry.email || '—'],
    ['Locality', enquiry.locality || '—'],
    ['About their home', enquiry.message || '—'],
  ];
  const digits = enquiry.phone.replace(/\D/g, '').replace(/^91/, '');

  const text = [
    `New enquiry #${id} from thelivorainteriors.com`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    `Call: tel:+91${digits}`,
    `WhatsApp: https://wa.me/91${digits}`,
  ].join('\n');

  const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#2c3426">
<h2 style="font-weight:normal">New enquiry #${id}</h2>
<table cellpadding="6" style="border-collapse:collapse">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="color:#5b6152;vertical-align:top">${label}</td><td style="white-space:pre-line">${escapeHtml(value)}</td></tr>`,
  )
  .join('\n')}
</table>
<p><a href="tel:+91${digits}">Call +91 ${digits}</a> · <a href="https://wa.me/91${digits}">WhatsApp</a></p>
<p style="color:#5b6152;font-size:12px">Sent from the contact form on thelivorainteriors.com</p>
</body></html>`;

  return {
    subject: `New enquiry: ${enquiry.projectType} — ${enquiry.name}`.slice(0, 150),
    text,
    html,
  };
}

const json = (status, data) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

async function hashIp(ip) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`livora-enquiry:${ip}`));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * @param {Request} request
 * @param {Env} env
 * @param {{ waitUntil: (promise: Promise<unknown>) => void }} ctx
 */
export async function handleEnquiry(request, env, ctx) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
  }

  // Only accept submissions made from our own pages.
  const origin = request.headers.get('Origin');
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
    return json(403, { ok: false, error: 'forbidden' });
  }
  if (!(request.headers.get('Content-Type') || '').startsWith('application/json')) {
    return json(415, { ok: false, error: 'unsupported_media_type' });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json(413, { ok: false, error: 'too_large' });

  /** @type {Record<string, unknown>} */
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: 'invalid_json' });
  }
  if (!body || typeof body !== 'object') return json(400, { ok: false, error: 'invalid_json' });

  // Honeypot: the "website" field is hidden from people, so only bots fill it in.
  // Pretend it worked so they don't adapt.
  if (typeof body.website === 'string' && body.website.trim()) {
    return json(200, { ok: true });
  }

  const result = validateEnquiry(body);
  if (result.errors) return json(400, { ok: false, error: 'validation', fields: result.errors });
  const { enquiry } = result;

  const ipHash = await hashIp(request.headers.get('CF-Connecting-IP') || 'unknown');
  const recent = await env.DB.prepare(
    "SELECT COUNT(*) AS count FROM enquiries WHERE ip_hash = ? AND created_at > datetime('now', '-1 hour')",
  )
    .bind(ipHash)
    .first();
  if (recent && recent.count >= RATE_LIMIT_PER_HOUR) {
    return json(429, { ok: false, error: 'rate_limited' });
  }

  const inserted = await env.DB.prepare(
    'INSERT INTO enquiries (name, phone, project_type, email, locality, message, ip_hash) VALUES (?, ?, ?, ?, ?, ?, ?)',
  )
    .bind(
      enquiry.name,
      enquiry.phone,
      enquiry.projectType,
      enquiry.email || null,
      enquiry.locality || null,
      enquiry.message || null,
      ipHash,
    )
    .run();
  const id = inserted.meta.last_row_id;

  // The enquiry is already saved, so a failed alert doesn't fail the visitor's request.
  ctx.waitUntil(sendAlert(env, enquiry, id));

  return json(200, { ok: true, id });
}

/** @param {Env} env */
async function sendAlert(env, enquiry, id) {
  const { subject, text, html } = buildAlert(enquiry, id);
  const cc = (env.ENQUIRY_CC || '')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);
  const message = {
    from: { email: env.ENQUIRY_FROM, name: 'Livora Website' },
    ...(enquiry.email ? { replyTo: enquiry.email } : {}),
    subject,
    text,
    html,
  };

  let sent = false;
  try {
    await env.EMAIL.send({ ...message, to: env.ENQUIRY_TO, ...(cc.length ? { cc } : {}) });
    sent = true;
  } catch (error) {
    // One unverified or rejected address fails the whole send, so retry each recipient
    // on its own and let the others still get the alert.
    console.error('Enquiry alert failed, retrying per recipient', id, error && error.code, error && error.message);
    for (const to of [env.ENQUIRY_TO, ...cc]) {
      try {
        await env.EMAIL.send({ ...message, to });
        sent = true;
      } catch (retryError) {
        console.error('Enquiry alert failed for', to, id, retryError && retryError.code);
      }
    }
  }

  if (sent) {
    await env.DB.prepare('UPDATE enquiries SET email_sent = 1 WHERE id = ?').bind(id).run();
  }
}
