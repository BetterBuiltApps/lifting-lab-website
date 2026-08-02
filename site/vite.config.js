import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served at the custom domain liftinglab.app (see public/CNAME), so assets
// resolve from the root. Switch back to '/lifting-lab-website/' if the
// custom domain is ever removed and this falls back to the github.io URL.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
