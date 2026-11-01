import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// `covers` and `verified_for` are what make drift detectable: the app repo's
// Scripts/help-drift-check.sh reads them. Both are required so an article
// cannot be added without saying what it describes.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        covers: z.array(z.string()).min(1),
        verified_for: z.string(),
      }),
    }),
  }),
};
