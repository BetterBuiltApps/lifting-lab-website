import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkSince from './src/plugins/remark-since.mjs';

// Served at liftinglab.app/help/. The deploy workflow copies dist/ into
// site/dist/help, so the base has to match that path exactly.
export default defineConfig({
  site: 'https://liftinglab.app',
  base: '/help',
  trailingSlash: 'always',
  // Release gating: text between since markers is dropped until APP_RELEASE reaches that version (tools/release.mjs).
  markdown: { remarkPlugins: [remarkSince] },
  integrations: [
    starlight({
      title: 'Lifting Lab Help',
      description: 'Step-by-step guides for logging sessions, building workouts, Bar Trace and the rest of Lifting Lab.',
      // Dark only is the brand. The theme picker is replaced with nothing and
      // the light palette is overridden in custom.css, so no visitor can land
      // in a light theme.
      components: { ThemeSelect: './src/components/NoThemeSelect.astro' },
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'script', content: "document.documentElement.dataset.theme='dark';try{localStorage.setItem('starlight-theme','dark')}catch(e){}" },
      ],
      social: [{ icon: 'external', label: 'liftinglab.app', href: 'https://liftinglab.app/' }],
      sidebar: [
        { label: 'Start here', items: [{ autogenerate: { directory: 'start' } }] },
        { label: 'Training', items: [{ autogenerate: { directory: 'train' } }] },
        { label: 'Bar Trace', items: [{ autogenerate: { directory: 'bar-trace' } }] },
        { label: 'Tools and Locker', items: [{ autogenerate: { directory: 'more' } }] },
        { label: 'Release notes', items: [{ autogenerate: { directory: 'releases' } }] },
      ],
    }),
  ],
});
