# Wordmark generation

Generates `site/public/assets/logo.svg` (the lockup) and `site/public/assets/mark.svg`
(the flask alone, used as the favicon).

**The mark's path data is generated. Do not hand edit it.** The wordmark text
is a live `<text>` element; edit its font, weight, size, or spacing directly in
`assemble.py` and re-ship.

## Why this exists

The original artwork asked for Inkscape's generic `Sans` family at weight 800.
`Sans` is not a font, it is fontconfig's alias, and `fc-match "Sans:weight=800"`
resolves it to **Verdana Bold** on every machine this has been checked on,
including the one that drew the original artwork.

Two earlier versions of this file tried to outline a substitute typeface
instead of using Verdana directly (first Arimo, standing in for a mistaken
guess that `Sans` meant Arial; then Noto Sans Black, chosen only because
Arial/Arimo cannot reach weight 800 at all). The substitution was there because
converting Verdana's letterforms into shipped, redistributable vector artwork
is what its licence restricts.

This version does not outline anything. The wordmark is **live text** asking
for `Verdana, sans-serif` by name, the same way any webpage's body copy asks
for a font. That is not embedding or redistributing the font file, it is a
request the viewer's own already-licensed OS fulfils, so the licence
restriction that ruled out Verdana before does not apply here. `sans-serif` is
the fallback for the rare viewer without Verdana installed.

The flask and barbell mark is still outlined to a path, since it is original
artwork rather than type and always needs to render as the same shape
regardless of what fonts a viewer has.

## Two traps, both of which have already bitten

**A double hyphen cannot appear inside an XML comment.** Writing a CSS custom
property name into the header comment makes the whole SVG fail to parse, and it
fails *silently*: an `img` tag renders nothing and logs nothing. `assemble.py`
now parses its own output before writing and refuses to ship an invalid file.

**Do not find the mark by scanning the source as text.** `mark_d()` used to do
`src.index('id="path1-4"')`, which matched the *comment at the top of
mark-source.svg* that mentions the id by name, and then returned the first path
in the document: the old outlined wordmark. The favicon became the word LIFTING
LAB with no flask, which is invisible at 16px. It parses the XML now.

## Running it

```bash
python3 tools/wordmark/assemble.py ship
```

No dependencies beyond the standard library, there is no font to shape or
outline any more. Without `ship` it writes `logo-candidate.svg` beside the
script instead of overwriting the shipped assets, for a quick look before
committing to a change.

## The files

| File | What it is |
|---|---|
| `assemble.py` | Places the mark's outlined path and the wordmark's live `<text>` in the lockup's original geometry, writes the SVGs. |
| `mark-source.svg` | The artist's lockup file, kept only because `path1-4` inside it is the sole usable copy of the flask drawing. Not loaded by the site. |
| `social.py` | Composes the Open Graph card from the generated `logo.svg`. Needs `rsvg-convert` (`brew install librsvg`). |

The lockup geometry in `assemble.py` (`TEXT_X`, `BASE_1`, `BASE_2`, `MARK_TF`)
was measured off the original file and is deliberately unchanged. `WIDTH` is
measured against Verdana's actual rendered advance for "LIFTING" plus headroom,
since Verdana is a wide face by design; re-measure it (see the comment beside
`WIDTH`) if the font stack changes again. Both `img` tags set a height and let
width follow, so the page layout does not need adjusting when it does.

Amber is a hex literal in both outputs rather than a token, because each file is
an isolated document that cannot see the page's custom properties. If the amber
token changes, change `AMBER` in `assemble.py` and re-ship.
