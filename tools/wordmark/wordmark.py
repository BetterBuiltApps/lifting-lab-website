"""Outline the Lifting Lab wordmark from the self-hosted heading face.

The face is whatever `FACE` points at below, and it is deliberately the same
binary the site serves for headings, so the logo and the page titles are one
set of letterforms rather than two that merely resemble each other.

The original artwork asked for Inkscape's generic 'Sans' at weight 800, which
is not a font: it is fontconfig's alias, and it resolved to Arial Bold. Arial
may not be redistributed or outlined into a logo, so the glyphs here come from
**Arimo**, which is metrically compatible with Arial, drawn to match it, and
SIL OFL. The shipped wordmark is therefore the mark that was always there, in
outlines that can actually ship.

This font is used only to cut the logo. Nothing bundles it, and the headings it
sits above are the platform's own sans, which is what 'Sans' means.

Handles both variable and static fonts: the weight selects a file here, but a
variable font given under any single weight is instanced instead. Keeping both
paths means swapping the face again does not mean rewriting this.

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
FACE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "face")

# The heading face, as static weight files. Mirrors --font-heading in
# tokens/fonts.css: change both together, or the logo stops matching the
# headings it sits above. A variable font can be given as a single entry under
# any weight and it will be instanced instead.
FACE = {700: os.path.join(FACE_DIR, "Arimo-Bold.ttf")}

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
