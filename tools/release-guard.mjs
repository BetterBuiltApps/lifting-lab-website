// Fails the deploy if anything for a release that has not been reached is in the built output. Run from the repo root after both
// builds and after help/dist was copied into site/dist/help (the workflow does this). Checks, for every release above APP_RELEASE:
//   1. no staged file (site/release/<v>/**, help/release/<v>/**) exists in the output
//   2. no Help page whose frontmatter says `since: "<v>"` was built
//   3. no since marker was left in any built HTML
//   4. none of the gallery videos or page stills that only exist from <v> are named in the shipped HTML or JavaScript
// With the flag at the newest release it only checks 3. Exit code 1 on any finding.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { APP_RELEASE, RELEASES, released } from './release.mjs';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'site/dist');
const problems = [];

const walk = (dir) => (existsSync(dir)
  ? readdirSync(dir).flatMap((n) => { const p = join(dir, n); return statSync(p).isDirectory() ? walk(p) : [p]; })
  : []);
const textFiles = walk(out).filter((p) => /\.(html|js|json|vtt|xml|txt)$/.test(p));
const read = (p) => readFileSync(p, 'utf8');

const later = RELEASES.filter((v) => !released(v));
for (const v of later) {
  // 1. staged files
  for (const [project, prefix] of [['site', ''], ['help', 'help/']]) {
    const base = join(root, project, 'release', v);
    for (const f of walk(base)) {
      const rel = relative(base, f);
      if (existsSync(join(out, prefix + rel))) problems.push(`staged ${v} file is in the output: ${prefix}${rel}`);
    }
  }
  // 2. gated Help pages
  const docs = join(root, 'help/src/content/docs');
  for (const f of walk(docs).filter((p) => /\.mdx?$/.test(p))) {
    const m = read(f).match(/^---\n([\s\S]*?)\n---/);
    const since = m && m[1].match(/^since:\s*["']?([\d.]+)["']?\s*$/m)?.[1];
    if (since === v) {
      const slug = relative(docs, f).replace(/\.mdx?$/, '');
      if (existsSync(join(out, 'help', slug, 'index.html'))) problems.push(`Help page for ${v} was built: help/${slug}/`);
    }
  }
  // 4. gallery files that only exist from v
  const idsAt = (ver) => {
    const f = join(root, 'site/src/data', `videos.${ver}.json`);
    return existsSync(f) ? new Set(Object.keys(JSON.parse(read(f)).videos)) : new Set();
  };
  const stillIdsAt = (ver) => {
    const f = join(root, 'site/src/data', `stills.${ver}.json`);
    return existsSync(f) ? new Set(Object.keys(JSON.parse(read(f)))) : new Set();
  };
  const lowerStills = new Set(RELEASES.filter((r) => r < v).flatMap((r) => [...stillIdsAt(r)]));
  for (const id of stillIdsAt(v)) {
    if (lowerStills.has(id)) continue;
    const needle = `assets/stills/${id}-`;
    for (const p of textFiles) if (read(p).includes(needle)) { problems.push(`${v} still ${id} is named in ${relative(out, p)}`); break; }
  }
  const lower = new Set(RELEASES.filter((r) => r < v).flatMap((r) => [...idsAt(r)]));
  for (const id of idsAt(v)) {
    if (lower.has(id)) continue;
    const needle = `assets/video/v2/${id}.`;
    for (const p of textFiles) if (read(p).includes(needle)) { problems.push(`${v} video ${id} is named in ${relative(out, p)}`); break; }
  }
}
// 3. leftover markers
for (const p of textFiles.filter((f) => f.endsWith('.html'))) {
  if (/<!--\s*\/?since\b/.test(read(p))) problems.push(`a since marker is left in ${relative(out, p)}`);
}

if (problems.length) {
  console.error(`release guard FAILED (APP_RELEASE=${APP_RELEASE}):\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log(`release guard: clean (APP_RELEASE=${APP_RELEASE}${later.length ? `, ${later.join(' and ')} content kept out` : ''})`);
