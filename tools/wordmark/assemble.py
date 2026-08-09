"""Assemble logo.svg and mark.svg from the flask drawing plus outlined Nunito.

    python3 assemble.py          write candidates beside this script, to compare
    python3 assemble.py ship     overwrite site/public/assets/{logo,mark}.svg

Needs fonttools, brotli and uharfbuzz. See tools/wordmark/README.md.
"""
import os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import wordmark

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
ASSETS = os.path.join(REPO, "site/public/assets")
# The flask and barbell drawing, still only in the artist's original file.
SRC = os.path.join(HERE, "mark-source.svg")
AMBER = "#f5a623"

# User units in this document are millimetres: the viewBox is 0 0 166.24 45 and
# the width is 166.24mm. Every number below is in that space.
MARK_TF = "matrix(0.30429782,0,0,0.30429782,37.009193,-42.354283)"  # puts the mark at 0,0,45,45
TEXT_X = 50.653      # left edge of the wordmark, unchanged from the original lockup
BASE_1 = 21.849      # baseline of LIFTING
BASE_2 = 41.988      # baseline of LAB
HEIGHT = 45.0

def mark_d():
    src = open(SRC).read()
    block = src[src.index('id="path1-4"'):]
    return re.search(r'\sd="([^"]+)"', block).group(1)

HEADER = """<?xml version="1.0" encoding="UTF-8"?>
<!-- Lifting Lab wordmark.

     The flask and barbell mark is the original drawing. The wordmark is set in
     Nunito at weight {weight}, outlined to paths here so it is always a shape and
     never depends on a font being loaded.

     Nunito is the same face the site loads for display type (tokens/fonts.css),
     so the logo and the headings are one type system rather than two. It is
     licensed SIL OFL, which permits outlining glyphs into a logo. Apple's SF
     Pro Rounded, which the CSS stack prefers ahead of it on Apple devices, does
     not permit that, which is why the outlines come from Nunito.

     The previous version was set in whatever Inkscape's generic 'Sans' resolved
     to, a grotesque with slab serifs on the capital I. That was a default, not
     a choice, and it shared no letterforms with anything else on the page.

     Regenerate with the scripts recorded in this repo's CLAUDE.md. Do not hand
     edit the path data.

     Fill is {amber}, the app's BPColor.amber, not the source drawing's #fdb402,
     which is a different amber and would put two of them on one page. It is a
     hex literal rather than a CSS token because this file loads through an img
     tag and as the favicon, an isolated document that cannot see the page's
     tokens. If the amber token changes, change it here too. -->
"""

CAP = 18.4672        # cap height, matching the original lockup

def build(weight, track, out_path):
    drawn, _ = wordmark.build(weight, CAP, track, ["LIFTING", "LAB"])
    lines = {l["text"]: l for l in drawn}
    width = round(TEXT_X + lines["LIFTING"]["advance"], 3)
    svg = HEADER.format(weight=weight, amber=AMBER)
    svg += (
        f'<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lifting Lab"\n'
        f'     width="{width}mm" height="{HEIGHT}mm" viewBox="0 0 {width} {HEIGHT}">\n'
        f'  <g fill="{AMBER}">\n'
        f'    <path transform="{MARK_TF}" d="{mark_d()}"/>\n'
        f'    <path transform="translate({TEXT_X},{BASE_1})" d="{lines["LIFTING"]["d"]}"/>\n'
        f'    <path transform="translate({TEXT_X},{BASE_2})" d="{lines["LAB"]["d"]}"/>\n'
        f'  </g>\n</svg>\n'
    )
    open(out_path, "w").write(svg)
    return width

MARK_HEADER = """<?xml version="1.0" encoding="UTF-8"?>
<!-- Lifting Lab mark, the flask and barbell without the wordmark.

     This is the favicon. The full lockup is roughly 3.5:1, so a browser fitting
     it into a 16px box drew the mark about 4px wide and the wordmark as amber
     mush. Square art is the only shape that survives that box.

     Fill is {amber}, the app's BPColor.amber. Same note as logo.svg: the file is
     an isolated document with no access to the page's tokens, so the value is a
     literal and has to be changed here by hand. -->
"""

def build_mark(out_path):
    svg = MARK_HEADER.format(amber=AMBER)
    svg += (
        f'<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lifting Lab"\n'
        f'     width="45mm" height="45mm" viewBox="0 0 45 45">\n'
        f'  <path fill="{AMBER}" transform="{MARK_TF}" d="{mark_d()}"/>\n'
        f'</svg>\n'
    )
    open(out_path, "w").write(svg)

if __name__ == "__main__":
    if sys.argv[1:2] == ["ship"]:
        w = build(900, 0.01, os.path.join(ASSETS, "logo.svg"))
        build_mark(os.path.join(ASSETS, "mark.svg"))
        print(f"logo.svg width={w}mm aspect={w/HEIGHT:.3f}; mark.svg 45x45mm")
    else:
        for weight, track in ((800, 0), (900, 0), (900, 0.01)):
            w = build(weight, track, os.path.join(HERE, f"logo-{weight}-{track}.svg"))
            print(f"logo-{weight}-{track}.svg  width={w}mm  aspect={w/HEIGHT:.3f}")
