/* The stills for the release being built: frames from the walkthrough videos (a headline above a phone), written by the video
   project's scripts/v2/web-export.mjs into src/data/stills.<release>.json. Use `still('F3', 1)` for beat 1 of item F3. A missing
   id or beat is a build-time mistake and throws, so a slot can never silently render nothing, and a still that belongs to a
   release that has not been reached is not in this data at all (see tools/release-guard.mjs). */
import data from '@stills';

export function still(id, n = 1) {
  const item = data[id];
  const s = item?.stills?.[n - 1];
  if (!s) throw new Error(`no still ${id} #${n} for this release (src/data/stills.<release>.json)`);
  return { ...s, id, n, plan: item.plan };
}
