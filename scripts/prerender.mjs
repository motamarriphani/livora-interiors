import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(projectRoot, 'dist');
const ssrDir = path.join(projectRoot, '.ssr-build');
const htmlPath = path.join(distDir, 'index.html');
const rootPlaceholder = '<div id="root"></div>';

try {
  const html = await readFile(htmlPath, 'utf8');
  if (!html.includes(rootPlaceholder)) {
    throw new Error('Expected the Vite root placeholder in dist/index.html.');
  }

  const { renderApp } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
  const rendered = html.replace(rootPlaceholder, `<div id="root">${renderApp()}</div>`);
  if (rendered === html) {
    throw new Error('Prerendering did not replace the application root.');
  }

  await writeFile(htmlPath, rendered, 'utf8');
  console.log('Prerendered Livora homepage into dist/index.html.');
} finally {
  await rm(ssrDir, { recursive: true, force: true });
}
