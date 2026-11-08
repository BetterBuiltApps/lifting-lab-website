// Copies staged files into the build output once the release flag (tools/release.mjs) reaches their version.
// Usage (from site/ or help/, after the main build): node ../tools/release-assets.mjs .
//
// <project>/release/<version>/ mirrors the root of <project>/dist. For every version at or below APP_RELEASE its files
// are copied into dist. While the flag is lower, they are not in the build at all, so nothing is reachable by URL.
import { cpSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { released } from './release.mjs';

const project = resolve(process.argv[2] ?? '.');
const releaseDir = join(project, 'release');
const dist = join(project, 'dist');
if (!existsSync(releaseDir)) process.exit(0);
if (!existsSync(dist)) throw new Error(`${dist} does not exist: run the build first`);
for (const v of readdirSync(releaseDir).filter((n) => statSync(join(releaseDir, n)).isDirectory())) {
  if (!released(v)) { console.log(`release-assets: ${v} not released, staged files left out`); continue; }
  cpSync(join(releaseDir, v), dist, { recursive: true });
  console.log(`release-assets: copied ${v} files into ${dist}`);
}
