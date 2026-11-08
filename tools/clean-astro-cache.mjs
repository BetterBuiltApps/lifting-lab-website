// Astro caches rendered Markdown by file content, not by the release flag (tools/release.mjs), so a build for 1.2 followed by
// a build for 1.5 could reuse the 1.2 render of an unchanged page. Clear the caches before every Help build.
import { rmSync } from 'node:fs';
import { resolve } from 'node:path';
const help = resolve(import.meta.dirname, '../help');
for (const p of ['node_modules/.astro', '.astro']) rmSync(resolve(help, p), { recursive: true, force: true });
