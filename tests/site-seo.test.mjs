import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { buildWhatsAppUrl } from '../src/utils/whatsapp.ts';

const root = path.resolve(import.meta.dirname, '..');

test('homepage has Livora Hyderabad/Telangana SEO metadata and organization data', () => {
  const html = readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(html, /<title>Livora Interiors \| Interior Design in Hyderabad, Telangana &amp; AP<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]+"\s*\/>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/thelivorainteriors\.com\/"\s*\/>/);
  assert.match(html, /"areaServed"/);
  assert.match(html, /"Hyderabad"/);
  assert.match(html, /"Telangana"/);
  assert.match(html, /"Andhra Pradesh"/);
  assert.match(html, /Kukatpally/);
  assert.match(html, /og:image/);
});

test('robots and sitemap identify the canonical Livora domain', () => {
  const robots = readFileSync(path.join(root, 'public', 'robots.txt'), 'utf8');
  const sitemap = readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
  assert.match(robots, /Sitemap: https:\/\/thelivorainteriors\.com\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/thelivorainteriors\.com\/<\/loc>/);
});

test('production HTML contains visible crawlable Livora page content', () => {
  const html = readFileSync(path.join(root, 'dist', 'index.html'), 'utf8');
  assert.match(html, /<div id="root">[\s\S]*<h1/);
  assert.match(html, /Interior Design in/);
  assert.match(html, /Hyderabad/);
  assert.doesNotMatch(html, /<div id="root"><\/div>/);
  assert.doesNotMatch(html, /<section[^>]*style="[^"]*opacity:0/);
  assert.match(html, /Turnkey/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(html, /hello@livorainteriors\.com/);
  assert.ok(existsSync(path.join(root, 'dist', 'images', 'founder.webp')));
});
test('client hydrates the prerendered page', () => {
  const main = readFileSync(path.join(root, 'src', 'main.tsx'), 'utf8');
  assert.match(main, /hydrateRoot/);
});

test('unused starter files are absent', () => {
  assert.equal(existsSync(path.join(root, '.env.example')), false);
  assert.equal(existsSync(path.join(root, 'metadata.json')), false);
  assert.equal(existsSync(path.join(root, 'assets')), false);
});

test('WhatsApp enquiry URL safely carries submitted contact details', () => {
  const url = new URL(buildWhatsAppUrl({
    firstName: 'Meera',
    lastName: 'Rao',
    email: 'meera@example.com',
    phone: '+91 90000 11111',
    projectType: 'Residential',
    locality: 'Gachibowli',
    message: 'Need living room design & storage.',
  }));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/918886767991');
  const message = url.searchParams.get('text');
  assert.match(message, /Meera Rao/);
  assert.match(message, /Gachibowli/);
  assert.match(message, /living room design & storage/);
});
