import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { APP_RELEASE, released } from '../tools/release.mjs';

// Data files for the release being built: the newest src/data/<name>.<release>.json that is not above APP_RELEASE.
// videos.* feeds the gallery (@videos), stills.* feeds the page sections (@stills). Both are written by the video project's
// scripts/v2/web-export.mjs, so a release that is not reached is not imported and its paths are not in the shipped JavaScript.
const dataFile = (name) => {
  const v = readdirSync(resolve(__dirname, 'src/data'))
    .map((f) => f.match(new RegExp(`^${name}\\.(\\d+(?:\\.\\d+)*)\\.json$`)))
    .filter((m) => m && released(m[1]))
    .map((m) => m[1])
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .pop();
  if (!v) throw new Error(`no src/data/${name}.<release>.json for APP_RELEASE ${APP_RELEASE}`);
  return resolve(__dirname, `src/data/${name}.${v}.json`);
};

// Served at the custom domain liftinglab.app (see public/CNAME), so assets
// resolve from the root. Switch back to '/lifting-lab-website/' if the
// custom domain is ever removed and this falls back to the github.io URL.
export default defineConfig({
  base: '/',
  plugins: [react()],
  // Release flag (tools/release.mjs), read by src/lib/release.js.
  define: { __APP_RELEASE__: JSON.stringify(APP_RELEASE) },
  resolve: { alias: { '@videos': dataFile('videos'), '@stills': dataFile('stills') } },
  build: {
    rollupOptions: {
      // Multi-page, not client-side routing. GitHub Pages serves static files
      // and has no rewrite rule, so an SPA route only survives a deep link via
      // the 404.html redirect hack, which costs a visible reload and breaks
      // the link a lawyer or an App Store reviewer follows. These build to
      // /privacy/ and /terms/ as real files that resolve on first request.
      //
      // privacy and terms are generated: tools/legal/build.py, from legal/*.md.
      // get is the device-detecting smart link (get.js): one URL for every
      // video description and QR code that never needs editing when a store
      // listing changes or the Android app ships.
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        get: resolve(__dirname, 'get/index.html'),
      },
    },
  },
});
