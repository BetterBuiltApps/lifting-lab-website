"""Outline the Lifting Lab wordmark from the self-hosted Nunito variable font.

Nunito is SIL OFL, which explicitly permits converting glyphs to outlines and
embedding the result in a logo. The font binary already ships in the site, so
the wordmark and the page headings come from one source.

Shaping goes through HarfBuzz so the GPOS kerning pairs apply (LA in particular
needs it). Outlines come from fontTools after instancing the variable font at
the requested weight, so the paths carry no variation axes.
"""
import io, os, sys, json
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.misc.transform import Transform
import uharfbuzz as hb

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(REPO, "site/public/assets/fonts/nunito-latin-var.woff2")

def build(weight, cap_target, tracking_em, lines):
    vf = TTFont(SRC)
    inst = instantiateVariableFont(vf, {"wght": weight}, inplace=False, updateFontNames=False)
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
