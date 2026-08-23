// Bakes the rendered homepage back into dist/index.html.
//
// The site is a plain client-rendered SPA (ReactDOM.createRoot, no SSR
// framework), so the file vite writes is `<div id="root"></div>` plus a
// script tag: zero words for any crawler that does not execute JavaScript,
// which today is Bing, most social unfurlers, and the AI crawlers now
// driving real referral traffic. Google runs the JS eventually, but on a
// deferred second pass.
//
// This is the standard workaround for a client-rendered app with no SSR
// framework in place: render the page once at build time with a real
// browser, and splice the resulting markup back into the shipped HTML. The
// original script tag stays, so a real visitor's browser still boots React
// and re-renders on top, the same content, same interactivity, just with a
// crawlable snapshot underneath it.
//
// privacy/index.html and terms/index.html are untouched: those already come
// out of tools/legal/build.py as real static HTML, not React shells.

import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const outFile = resolve(root, 'dist/index.html');
const sitemapFile = resolve(root, 'dist/sitemap.xml');

// The homepage is the one sitemap entry that actually changes on every
// deploy. Stamping it here, on the built copy, means the source file never
// carries a hand-written date that goes stale the moment someone forgets it.
{
  const today = new Date().toISOString().slice(0, 10);
  const sitemap = readFileSync(sitemapFile, 'utf8');
  const stamped = sitemap.replace(
    /(<loc>https:\/\/liftinglab\.app\/<\/loc>\s*)(?:<lastmod>[^<]*<\/lastmod>\s*)?/,
    `$1<lastmod>${today}</lastmod>\n    `
  );
  writeFileSync(sitemapFile, stamped);
}

const server = await preview({ root, preview: { port: 0, strictPort: false } });
const url = server.resolvedUrls.local[0];

const browser = await puppeteer.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });

  // The page reveals sections on scroll via IntersectionObserver
  // (`Reveal`/`whileInView`). Walking down once settles every section into
  // its final, visible state before the snapshot is taken, rather than
  // freezing some of them mid-animation at opacity 0.
  await page.evaluate(async () => {
    const step = 600;
    const height = document.body.scrollHeight;
    for (let y = 0; y < height; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 200));

  const html = await page.evaluate(() => document.documentElement.outerHTML);
  writeFileSync(outFile, `<!doctype html>\n${html}\n`);

  const words = await page.evaluate(() => document.body.innerText.trim().split(/\s+/).length);
  console.log(`prerender: wrote ${words} words of rendered text into dist/index.html`);
} finally {
  await browser.close();
  await server.close();
}
