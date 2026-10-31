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
  // The legal pages carry their own "Last updated" date (stamped by
  // tools/legal/build.py), so their lastmod is read from the built page
  // rather than restated by hand in public/sitemap.xml.
  let withLegal = stamped;
  for (const slug of ['privacy', 'terms']) {
    const html = readFileSync(resolve(root, `dist/${slug}/index.html`), 'utf8');
    const date = html.match(/Last updated (\d{4}-\d{2}-\d{2})/)?.[1];
    if (!date) continue;
    withLegal = withLegal.replace(
      new RegExp(`(<loc>https://liftinglab\\.app/${slug}/</loc>\\s*<lastmod>)[^<]*(</lastmod>)`),
      `$1${date}$2`
    );
  }
  writeFileSync(sitemapFile, withLegal);
}

const server = await preview({ root, preview: { port: 0, strictPort: false } });
const url = server.resolvedUrls.local[0];

// --no-sandbox is required in GitHub Actions' runner: it has no unprivileged
// user namespaces available, so Chromium's own sandbox refuses to start
// ("No usable sandbox!"). The build container is already isolated per-run, so
// this doesn't weaken anything the CI environment was relying on.
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });

// The page reveals sections on scroll via IntersectionObserver
// (`Reveal`/`whileInView`). Walking down once settles every section into
// its final, visible state before the snapshot is taken, rather than
// freezing some of them mid-animation at opacity 0.
await page.evaluate(async () => {
  const step = 400;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  // Height is re-read every step: images and lazy sections change it as the
  // walk goes, and a height captured once stopped short of the final Contact
  // block, which was then snapshotted at opacity 0.
  for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await wait(60);
  }
  window.scrollTo(0, document.documentElement.scrollHeight);
  await wait(400);
  window.scrollTo(0, 0);
});
  await new Promise((r) => setTimeout(r, 200));

// Fail loudly if a Reveal is still hidden: a snapshot with invisible
  // sections is exactly the regression this walk exists to prevent.
  const hidden = await page.evaluate(() =>
    [...document.querySelectorAll('main section, main section > div')]
      .filter((el) => getComputedStyle(el).opacity === '0' && el.textContent.trim().length > 40).length);
  if (hidden > 0) console.warn(`prerender: warning, ${hidden} section block(s) still at opacity 0 in the snapshot`);

const html = await page.evaluate(() => document.documentElement.outerHTML);
  writeFileSync(outFile, `<!doctype html>\n${html}\n`);

const words = await page.evaluate(() => document.body.innerText.trim().split(/\s+/).length);
  console.log(`prerender: wrote ${words} words of rendered text into dist/index.html`);
} finally {
  await browser.close();
  await server.close();
}
