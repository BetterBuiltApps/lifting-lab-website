# Wordmark generation

Generates `site/public/assets/logo.svg` (the lockup) and `site/public/assets/mark.svg`
(the flask alone, used as the favicon).

**The outputs are generated. Do not hand edit the path data in them.** If you
need a different weight, tracking, or cap height, change it here and re-ship.

## Why this exists

The wordmark used to be set in whatever Inkscape's generic `Sans` family
resolved to. On the machine that drew it that alias resolved to **Verdana
Bold**, which is where the slab serifs on the capital I came from. That was a
default rather than a choice, and Verdana's licence permits neither embedding
in an app nor self-hosting, so it could never have shipped as-is.

It is now set in **Barlow ExtraBold (800)**, the weight the original artwork
asked for. Barlow is the same face `tokens/fonts.css` loads for headings and the
app bundles in `Theme/Fonts`, so the logo, every heading on this site, and every
title in the app are one set of letterforms. It is licensed SIL OFL, which
permits outlining glyphs into a logo. Apple's SF Pro Rounded does not, which is
why the outlines cannot simply come from whatever the CSS stack prefers.

Barlow is also not an outside pick: the original logo file already set its other
text in it.

Text is outlined rather than left live so the logo never depends on a font
being present, including when it loads through an `img` tag or as the favicon.

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
python3 -m venv /tmp/fontenv && /tmp/fontenv/bin/pip install fonttools brotli uharfbuzz
```

```bash
/tmp/fontenv/bin/python tools/wordmark/assemble.py ship
```

Without `ship` it writes `logo-<weight>-<tracking>.svg` candidates beside the
script instead of overwriting the shipped assets, which is how the current
settings (weight 900, tracking +0.01em) were chosen.

## The files

| File | What it is |
|---|---|
| `wordmark.py` | Instances the variable font at a weight, shapes through HarfBuzz so GPOS kerning applies (LA needs it), returns SVG path data and an advance width per line. |
| `assemble.py` | Places the mark and the two outlined lines in the lockup's original geometry, writes the SVGs. |
| `mark-source.svg` | The previous lockup, kept only because `path1-4` inside it is the sole usable copy of the flask drawing. Not loaded by the site. |

The lockup geometry in `assemble.py` (`TEXT_X`, `BASE_1`, `BASE_2`, `CAP`,
`MARK_TF`) was measured off the original file and is deliberately unchanged, so
this is a type substitution and not a redrawn logo. Only the width moved,
because Nunito sets `LIFTING` narrower than the old face did: the lockup went
from 3.69:1 to 3.46:1. Both `img` tags set a height and let width follow, so
nothing needed adjusting for that.

Amber is a hex literal in both outputs rather than a token, because each file is
an isolated document that cannot see the page's custom properties. If the amber
token changes, change `AMBER` in `assemble.py` and re-ship.
