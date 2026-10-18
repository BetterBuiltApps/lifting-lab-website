import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served at the custom domain liftinglab.app (see public/CNAME), so assets
// resolve from the root. Switch back to '/lifting-lab-website/' if the
// custom domain is ever removed and this falls back to the github.io URL.
export default defineConfig({
  base: '/',
  plugins: [react()],
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
