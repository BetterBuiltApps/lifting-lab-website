// Renders the App Store Connect submission screenshots: real app UI inside
// the site's own device-frame styling (site/src/sections/Chrome.jsx's `Shot`
// component bezel/shadow values, copied literally below since that's a React
// component and this isn't rendering React), over a full-bleed lifter photo
// with a dark gradient scrim (the site's own "photographic exception" per
// DESIGN.md, normally Hero/Pricing/footer only), using the real design
// tokens (../../../tokens/*.css) rather than hand-copied hex values.
//
// This is static HTML, one <img> per shot, no client-side JS, no routing,
// so unlike scripts/prerender.mjs it doesn't need a Vite preview server.
// It does need page.goto() rather than page.setContent() though: a page
// whose content was set directly has an about:blank origin, and Chromium
// refuses file:// fetches (both the <link> tokens and the <img> source)
// from a non-file:// origin. Writing the substituted HTML to a real file
// next to template.html and navigating to it keeps every relative and
// file:// path same-origin, so they load normally.
//
// Output goes to the private, non-web-published asset folder named in
// content.mjs (OUTPUT_ROOT), not site/public/, these aren't website assets.

import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { DEVICES, SHOTS, OUTPUT_ROOT } from './content.mjs';

const scriptDir = resolve(import.meta.dirname);
const templatePath = resolve(scriptDir, 'template.html');
const templateSource = readFileSync(templatePath, 'utf8');

const deviceKey = process.argv[2] ?? 'iphone-6.9';
const device = DEVICES[deviceKey];
if (!device) {
  console.error(`Unknown device "${deviceKey}". Known: ${Object.keys(DEVICES).join(', ')}`);
  process.exit(1);
}

// Reads native pixel dimensions via macOS's `sips`, so a source image
// smaller than the target canvas fails loudly and names the offending shot,
// rather than silently getting stretched by object-fit: cover.
function nativeSize(imagePath) {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', imagePath], { encoding: 'utf8' });
  const width = Number(out.match(/pixelWidth:\s*(\d+)/)?.[1]);
  const height = Number(out.match(/pixelHeight:\s*(\d+)/)?.[1]);
  return { width, height };
}

// file:// URLs need their path percent-encoded (the background photos'
// filenames have spaces and parentheses), but the leading "file://" itself
// must stay literal.
function fileUrl(path) {
  return `file://${encodeURI(path)}`;
}

for (const shot of SHOTS) {
  if (!existsSync(shot.sourceImage)) {
    console.error(`Shot ${shot.order} (${shot.outFile}): source image missing at ${shot.sourceImage}`);
    process.exit(1);
  }
  const { width, height } = nativeSize(shot.sourceImage);
  if (width < device.width || height < device.height) {
    console.error(
      `Shot ${shot.order} (${shot.outFile}): source is ${width}x${height}, ` +
      `smaller than the ${device.width}x${device.height} target canvas. ` +
      `Recapture at the right resolution rather than letting this upscale.`
    );
    process.exit(1);
  }
  if (!existsSync(shot.background.file)) {
    console.error(`Shot ${shot.order} (${shot.outFile}): background image missing at ${shot.background.file}`);
    process.exit(1);
  }
}

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  for (const shot of SHOTS) {
    const html = templateSource
      .replaceAll('{{CANVAS_WIDTH}}', device.width)
      .replaceAll('{{CANVAS_HEIGHT}}', device.height)
      .replaceAll('{{TOP_PADDING}}', device.topPadding)
      .replaceAll('{{HEADER_HEIGHT}}', device.headerHeight)
      .replaceAll('{{HEADLINE_SIZE}}', device.headlineSize)
      .replaceAll('{{SUBHEAD_SIZE}}', device.subheadSize)
      .replaceAll('{{FRAME_GAP}}', device.frameGap)
      .replaceAll('{{FRAME_WIDTH}}', device.frameWidth)
      .replaceAll('{{HEADLINE}}', shot.headline)
      .replaceAll('{{SUBHEAD}}', shot.subhead)
      .replaceAll('{{SHOT_SRC}}', fileUrl(shot.sourceImage))
      .replaceAll('{{BG_SRC}}', fileUrl(shot.background.file))
      .replaceAll('{{BG_POSITION_X}}', shot.background.x);

    const renderPath = resolve(scriptDir, `_render-${shot.order}.html`);
    writeFileSync(renderPath, html);

    // A fresh page per shot, `load` rather than `networkidle0`: this is
    // static local content with one <img>, no client JS settling to wait
    // out, and reusing one page across navigations left a stale lifecycle
    // watcher that hung past the 30s timeout on the second shot.
    const page = await browser.newPage();
    await page.setViewport({ width: device.width, height: device.height, deviceScaleFactor: 1 });
    await page.goto(`file://${renderPath}`, { waitUntil: 'load' });

    const outFile = resolve(OUTPUT_ROOT, shot.outFile);
    await page.screenshot({ path: outFile, type: 'png' });
    await page.close();
    unlinkSync(renderPath);
    console.log(`Shot ${shot.order}: wrote ${outFile}`);
  }
} finally {
  await browser.close();
}
