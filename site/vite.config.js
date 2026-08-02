import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this project from https://<owner>.github.io/owl-website/,
// so every built asset URL needs that repo-name prefix. Update this if the
// repo is ever renamed, or set it to '/' when deploying under a custom domain.
export default defineConfig({
  base: '/owl-website/',
  plugins: [react()],
});
