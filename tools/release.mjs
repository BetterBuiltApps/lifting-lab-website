// The release flag. One value, APP_RELEASE, says which app version the website and the how-to guides describe.
// Both builds (site/ and help/) read it, so one switch changes both.
//
//   APP_RELEASE=1.2   what is live in the App Store today (the default when the variable is not set)
//   APP_RELEASE=1.5   the next release: everything tagged "since 1.5" appears
//
// In CI it comes from the repository variable APP_RELEASE (Settings > Secrets and variables > Actions > Variables).
// To release: set the variable to 1.5, then run the "Deploy site to GitHub Pages" workflow. See RELEASING.md.
// Locally: `APP_RELEASE=1.5 npm run build`. Unreleased content is removed from the build output, not just hidden,
// and tools/release-guard.mjs fails the deploy if any of it is still in dist while the flag is off.
//
// Versions that were never submitted (1.3, 1.4) are not in the list on purpose: tag content with the release that
// actually ships it. To add a release (say 1.6), append it here, then tag content "since 1.6".

export const RELEASES = ['1.2', '1.5'];
export const DEFAULT_RELEASE = '1.2';

const parse = (v) => String(v).trim().split('.').map((n) => parseInt(n, 10) || 0);
export const compareVersions = (a, b) => {
  const [x, y] = [parse(a), parse(b)];
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const d = (x[i] ?? 0) - (y[i] ?? 0);
    if (d) return d;
  }
  return 0;
};

const raw = (process.env.APP_RELEASE ?? '').trim();
if (raw && !RELEASES.includes(raw)) {
  throw new Error(`APP_RELEASE="${raw}" is not a known release. Known: ${RELEASES.join(', ')}. (Typo? Add new releases to tools/release.mjs.)`);
}
export const APP_RELEASE = raw || DEFAULT_RELEASE;

/** True when content tagged `since` is part of the release being built. No tag means always. */
export const released = (since) => !since || compareVersions(APP_RELEASE, since) >= 0;
