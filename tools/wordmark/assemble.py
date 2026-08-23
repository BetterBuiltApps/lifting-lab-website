"""Assemble logo.svg and mark.svg from the flask drawing plus live wordmark text.

    python3 assemble.py          write a candidate beside this script, to check
    python3 assemble.py ship     overwrite site/public/assets/{logo,mark}.svg

No font-shaping dependencies. See tools/wordmark/README.md.
"""
import os, sys

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

MARK_ID = "path1-4"

def mark_d():
    """The flask outline, found by parsing rather than by scanning text.

    This used to do `src.index('id="path1-4"')` and take the next d= after it.
    That reads the file as a string, so it matched the *comment* at the top of
    mark-source.svg, which mentions the id by name, and then returned the first
    path in the document: the old outlined wordmark. The result was a mark.svg
    containing the words LIFTING LAB and no flask, which renders as nothing at
    favicon size and shows up nowhere until someone looks at the favicon.

    It survived because mark.svg was generated before that comment was written
    and was not regenerated afterwards. A find that can match its own
    documentation is not a find.
    """
    from xml.etree import ElementTree
    root = ElementTree.parse(SRC).getroot()
    for el in root.iter():
        if el.get("id") == MARK_ID:
            d = el.get("d")
            if d:
                return d
    raise SystemExit(f"no element with id={MARK_ID!r} carrying a d= in {SRC}")

HEADER = """<?xml version="1.0" encoding="UTF-8"?>
<!-- Lifting Lab wordmark.

     The flask and barbell mark is the original drawing, outlined to a path so
     it is always a shape. The wordmark is live text, font-family
     'Verdana, sans-serif' at font-weight {weight}.

     The original artwork asked for Inkscape's generic 'Sans' at weight 800.
     'Sans' is fontconfig's alias, not a font, and it resolves to Verdana Bold,
     confirmed with `fc-match "Sans:weight=800"` on the machine that drew the
     original artwork and every machine this has been checked on since. Two
     earlier versions of this file tried to outline a substitute for that alias
     instead of using it directly (first Arimo, standing in for a mistaken
     guess of Arial; then Noto Sans Black, chosen only because Arial/Arimo
     cannot reach weight 800 at all), because outlining Verdana's letterforms
     into shipped artwork is what its licence restricts.

     This version does not outline anything: it is live text asking for
     Verdana by name, the same way any webpage's body text asks for a font,
     which is not embedding or redistributing the font file and carries none of
     that restriction. 'sans-serif' is the fallback for the rare viewer without
     Verdana installed.

     Regenerate with the scripts recorded in this repo's CLAUDE.md. Do not hand
     edit the path data or the text content.

     Fill is {amber}, the app's BPColor.amber, not the source drawing's #fdb402,
     which is a different amber and would put two of them on one page. It is a
     hex literal rather than a CSS token because this file loads through an img
     tag and as the favicon, an isolated document that cannot see the page's
     tokens. If the amber token changes, change it here too. -->
"""

FONT_STACK = "Verdana, sans-serif"
WEIGHT = 800          # the artwork's own request, honoured exactly now
FONT_SIZE = 25.65     # tuned so the caps sit close to CAP against the mark
LETTER_SPACING = 0.25 # a touch open so the caps do not close up at small sizes
WIDTH = 176           # measured right edge of "LIFTING" (173.4) plus headroom,
                       # Verdana is deliberately wide (it was drawn for on-screen
                       # legibility) and the sans-serif fallback for viewers
                       # without it installed is not guaranteed to match its
                       # metrics exactly

def _write(path, svg):
    """Write only if it parses.

    These files are consumed by an img tag and as a favicon, both of which fail
    silently: an invalid SVG renders as nothing at all, with no console error
    on the page that embeds it. The specific trap is a double hyphen inside an
    XML comment, which is illegal and is exactly what writing a CSS custom
    property name into the header above produces.
    """
    from xml.etree import ElementTree
    try:
        ElementTree.fromstring(svg)
    except ElementTree.ParseError as e:
        raise SystemExit(f"refusing to write {os.path.basename(path)}: "
                         f"generated SVG is not valid XML ({e}). "
                         f"A '--' inside the header comment is the usual cause.")
    open(path, "w").write(svg)

def build(out_path):
    svg = HEADER.format(weight=WEIGHT, amber=AMBER)
    text_style = (f'font-family="{FONT_STACK}" font-weight="{WEIGHT}" '
                  f'font-size="{FONT_SIZE}" letter-spacing="{LETTER_SPACING}"')
    svg += (
        f'<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lifting Lab"\n'
        f'     width="{WIDTH}mm" height="{HEIGHT}mm" viewBox="0 0 {WIDTH} {HEIGHT}">\n'
        f'  <g fill="{AMBER}">\n'
        f'    <path transform="{MARK_TF}" d="{mark_d()}"/>\n'
        f'    <text x="{TEXT_X}" y="{BASE_1}" {text_style}>LIFTING</text>\n'
        f'    <text x="{TEXT_X}" y="{BASE_2}" {text_style}>LAB</text>\n'
        f'  </g>\n</svg>\n'
    )
    _write(out_path, svg)

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
    _write(out_path, svg)

if __name__ == "__main__":
    if sys.argv[1:2] == ["ship"]:
        build(os.path.join(ASSETS, "logo.svg"))
        build_mark(os.path.join(ASSETS, "mark.svg"))
        print(f"logo.svg width={WIDTH}mm aspect={WIDTH/HEIGHT:.3f}; mark.svg 45x45mm")
    else:
        out = os.path.join(HERE, f"logo-candidate.svg")
        build(out)
        print(f"wrote {out}")
