// Edge entry point: sends every visitor to https://thelivorainteriors.com, then serves the static build.
// Security and cache headers for the assets live in public/_headers.

const CANONICAL_HOST = 'thelivorainteriors.com';

export default {
  /**
   * @param {Request} request
   * @param {{ ASSETS: { fetch: (request: Request) => Promise<Response> } }} env
   */
  async fetch(request, env) {
    const url = new URL(request.url);
    const isOurDomain = url.hostname === CANONICAL_HOST || url.hostname.endsWith(`.${CANONICAL_HOST}`);

    // Only rewrite our own hostnames, so `wrangler dev` on localhost keeps working.
    if (isOurDomain && (url.protocol !== 'https:' || url.hostname !== CANONICAL_HOST)) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    }

    return env.ASSETS.fetch(request);
  },
};
