#!/usr/bin/env bash
#
# build-screens.sh
#
# Regenerates the responsive WebP variants of the app screenshots in
# public/assets/screens/ from the full-resolution PNGs beside them.
#
# The PNGs are straight iPhone captures, 1179x2556 and 1320x2868, and the site
# never renders one wider than 300 CSS px. Serving the originals shipped ~20x
# more pixels than any display could use, 12 MB across 29 files.
#
# Two variants per shot, both WebP:
#   -600.webp   for 2x displays at the 300px maximum
#   -900.webp   for 3x displays at the 300px maximum
#
# The PNGs stay in the repo and stay referenced as the <picture> fallback. They
# are the archival source these are generated from, and a browser without WebP
# support (pre-2020) is the only thing that will ever fetch one.
#
# Requires cwebp (brew install webp).
#
#   ./scripts/build-screens.sh          # only missing/stale variants
#   ./scripts/build-screens.sh --force  # rebuild everything

set -euo pipefail

cd "$(dirname "$0")/../public/assets/screens"

command -v cwebp >/dev/null || { echo "cwebp not found, brew install webp" >&2; exit 1; }

FORCE=""
[ "${1:-}" = "--force" ] && FORCE=1

# q=82 is the point where UI text stops visibly softening on these captures;
# below ~78 the small caption type in the app chrome starts to smear.
QUALITY=82

built=0
for png in *.png; do
  base="${png%.png}"
  for w in 600 900; do
    out="${base}-${w}.webp"
    if [ -z "$FORCE" ] && [ -f "$out" ] && [ "$out" -nt "$png" ]; then
      continue
    fi
    cwebp -quiet -q "$QUALITY" -resize "$w" 0 "$png" -o "$out"
    built=$((built + 1))
  done
done

echo "built $built variant(s)"
echo "png total:  $(du -ch ./*.png  | tail -1 | cut -f1)"
echo "webp total: $(du -ch ./*.webp | tail -1 | cut -f1)"
