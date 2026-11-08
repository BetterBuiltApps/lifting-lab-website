/* The release flag, as the page sees it. The value is baked in at build time from tools/release.mjs (APP_RELEASE:
   1.2 = what is live in the App Store, 1.5 = the next release). Content tagged "since 1.5" is only rendered once the
   flag reaches 1.5, and its files are only copied into the build then (site/release/1.5, tools/release-assets.mjs).
   Flip it with the repository variable APP_RELEASE and a deploy, see RELEASING.md at the repo root. */
export const APP_RELEASE = __APP_RELEASE__;

const parse = (v) => String(v).trim().split('.').map((n) => parseInt(n, 10) || 0);
const compare = (a, b) => {
  const [x, y] = [parse(a), parse(b)];
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const d = (x[i] ?? 0) - (y[i] ?? 0);
    if (d) return d;
  }
  return 0;
};

/** True when content tagged `since` belongs to the release being built. No tag means always. */
export const released = (since) => !since || compare(APP_RELEASE, since) >= 0;
