# Livora Interiors website

The Livora Interiors marketing site is a React + Vite static website for the Hyderabad and Telangana service area.

## Local development

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

## Checks and production build

```sh
npm test
npm run lint
npm run build
npm run preview
```

The production build statically renders the homepage into `dist/index.html` so its primary content is present in the HTML response for crawlers and visitors before client-side JavaScript runs.

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages using Git integration. Use `main` as the production branch, `npm run build` as the build command, and `dist` as the build output directory. Git integration provides preview deployments for branches and pull requests.

The canonical site URL is `https://thelivorainteriors.com/`. Keep `public/sitemap.xml` and `public/robots.txt` in sync when indexable routes are added.
