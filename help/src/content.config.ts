import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { released } from '../../tools/release.mjs';

// `covers` and `verified_for` are what make drift detectable: the app repo's
// Scripts/help-drift-check.sh reads them. Both are required so an article
// cannot be added without saying what it describes.
// A page can carry `since: "1.5"` in its frontmatter. Until the release flag (tools/release.mjs) reaches that version the
// page is dropped from the collection, so it is not built, not in the sidebar and not in search.
const base = docsLoader();
const releaseGatedLoader = {
  ...base,
  async load(context: Parameters<typeof base.load>[0]) {
    await base.load(context);
    for (const id of [...context.store.keys()]) {
      const since = (context.store.get(id)?.data as { since?: string } | undefined)?.since;
      if (since && !released(since)) context.store.delete(id);
    }
  },
};

export const collections = {
  docs: defineCollection({
    loader: releaseGatedLoader,
    schema: docsSchema({
      extend: z.object({
        covers: z.array(z.string()).min(1),
        verified_for: z.string(),
        // Release the page ships with (tools/release.mjs). Absent means it is live now.
        since: z.string().optional(),
      }),
    }),
  }),
};
