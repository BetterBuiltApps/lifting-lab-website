"""Outline the Lifting Lab wordmark from the self-hosted heading face.

The face is whatever `FACE` points at below, and it is deliberately the same
binary the site serves for headings, so the logo and the page titles are one
set of letterforms rather than two that merely resemble each other.

Barlow is SIL OFL, which explicitly permits converting glyphs to outlines and
embedding the result in a logo. Not every candidate does: the original artwork
asked for Inkscape's generic 'Sans' at weight 800, which resolved to Verdana
Bold on the machine that drew it, and Verdana's licence permits neither
embedding in an app nor self-hosting.

Handles both variable and static fonts. Barlow has no variable build, so the
weight selects a file; Nunito was one file with a wght axis to instance. Keeping
both paths means swapping the face later does not mean rewriting this.

Shaping goes through HarfBuzz so the GPOS kerning pairs apply (LA in particular
needs it).
"""
import io, os, sys, json
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.misc.transform import Transform
import uharfbuzz as hb

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FONTS = os.path.join(REPO, "site/public/assets/fonts")

# The heading face, as static weight files. Mirrors --font-heading in
# tokens/fonts.css: change both together, or the logo stops matching the
# headings it sits above. A variable font can be given as a single entry under
# any weight and it will be instanced instead.
FACE = {
    600: os.path.join(FONTS, "barlow-latin-600.woff2"),
    700: os.path.join(FONTS, "barlow-latin-700.woff2"),
    800: os.path.join(FONTS, "barlow-latin-800.woff2"),
}

def build(weight, cap_target, tracking_em, lines):
    path = FACE.get(weight) or FACE[min(FACE, key=lambda w: abs(w - weight))]
    inst = TTFont(path)
    # A static weight has no fvar to instance. Asking for one is not an error
    # here, it just means the file already is the weight.
    if "fvar" in inst:
        inst = instantiateVariableFont(inst, {"wght": weight}, inplace=False,
                                       updateFontNames=False)
    buf = io.BytesIO()
    inst.flavor = None
    inst.save(buf)
    data = buf.getvalue()

    upem = inst["head"].unitsPerEm
    cap = inst["OS/2"].sCapHeight
    scale = cap_target / cap
    track = tracking_em * upem

    face = hb.Face(data)
    font = hb.Font(face)
    font.scale = (upem, upem)
    glyphset = inst.getGlyphSet()
    order = inst.getGlyphOrder()

    out = []
    for text in lines:
        b = hb.Buffer()
        b.add_str(text)
        b.guess_segment_properties()
        hb.shape(font, b)
        pen_out = SVGPathPen(glyphset, ntos=lambda v: f"{v:.3f}".rstrip("0").rstrip("."))
        x = 0.0
        for info, pos in zip(b.glyph_infos, b.glyph_positions):
            name = order[info.codepoint]
            t = Transform(scale, 0, 0, -scale, (x + pos.x_offset) * scale, pos.y_offset * -scale)
            glyphset[name].draw(TransformPen(pen_out, t))
            x += pos.x_advance + track
        # trailing track is not part of the drawn width
        out.append({"text": text, "d": pen_out.getCommands(),
                    "advance": (x - track) * scale})
    return out, {"upem": upem, "cap": cap, "scale": scale}

if __name__ == "__main__":
    weight = float(sys.argv[1]) if len(sys.argv) > 1 else 900
    cap = float(sys.argv[2]) if len(sys.argv) > 2 else 69.797
    track = float(sys.argv[3]) if len(sys.argv) > 3 else 0.0
    lines, meta = build(weight, cap, track, ["LIFTING", "LAB"])
    print(json.dumps({"meta": meta,
                      "lines": [{"text": l["text"], "advance": round(l["advance"], 3),
                                 "d": l["d"]} for l in lines]}))
