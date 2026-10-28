// Edge entry point: sends every visitor to https://thelivorainteriors.com, handles the
// contact form API, then serves the static build.
// Security and cache headers for the assets live in public/_headers.

import { handleEnquiry } from './enquiry.js';

const CANONICAL_HOST = 'thelivorainteriors.com';

export default {
  /**
   * @param {Request} request
   * @param {import('./enquiry.js').Env & { ASSETS: { fetch: (request: Request) => Promise<Response> } }} env
   * @param {{ waitUntil: (promise: Promise<unknown>) => void }} ctx
   */
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const isOurDomain = url.hostname === CANONICAL_HOST || url.hostname.endsWith(`.${CANONICAL_HOST}`);

    // Only rewrite our own hostnames, so `wrangler dev` on localhost keeps working.
    if (isOurDomain && (url.protocol !== 'https:' || url.hostname !== CANONICAL_HOST)) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/enquiry') {
      return handleEnquiry(request, env, ctx);
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    }

    return env.ASSETS.fetch(request);
  },
};
