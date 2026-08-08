# Lifting Lab — marketing site

A single-page React 18 site on Vite 6, deployed to GitHub Pages at **liftinglab.app**.
It markets the Lifting Lab iOS app, which lives in a sibling repo (`../LiftingLab`).

## What actually ships

**Only `site/` is built.** `npm run build` in `site/` produces `site/dist`, and
`.github/workflows/deploy.yml` publishes that on push to `main`.

Everything else at the repo root is design-system source material that the build
never touches:

| Path | What it is |
|---|---|
| `tokens/` | **The** CSS token layer. `site/src/styles.css` `@import`s it. Live. |
| `components/` | 25 JSX specimens + `.d.ts` + `.prompt.md`. Not imported by the site. |
| `guidelines/` | 21 `*.card.html` spec cards. Documentation. |
| `ui_kits/marketing_site/` | The prototype ancestor of `site/src/sections/`. Superseded. |
| `ui_kits/ios_app/` | An HTML recreation of the iPhone app. **Read-only.** See below. |
| `_ds_bundle.js`, `_ds_manifest.json` | Generated dumps. Derived, not authored. |

Editing anything outside `site/` and `tokens/` expecting the site to change is
the most likely wasted hour in this repo.

## Design tokens: one copy, and it is not the source of truth

`tokens/*.css` is the only token copy in this repo. There used to be a
byte-identical duplicate at `site/src/tokens/` that nothing kept in sync; it was
deleted.

The real source of truth is the **iOS app**: `../LiftingLab/LiftingLab/Theme/Theme.swift`.
`tokens/colors.css` mirrors it, and each value carries a `/* BPColor.x */`
comment naming its Swift origin. Names deliberately differ in places
(`BPColor.background` is `--bg`, `phasePurple` is `--phase-transition`), so that
comment — not the variable name — is the mapping.

**Change order is fixed:** `Theme.swift` → `tokens/*.css`. Never the reverse.
`../LiftingLab/Scripts/check-design-tokens.sh --report` verifies the two agree;
it runs as a `Stop` hook in the app repo and exits 0 here (this repo can't see
the Swift).

`.impeccable/design.json`, if present, is **derived** from `tokens/`. Do not
hand-edit it and expect it to win.

Because tokens live outside `site/`, `deploy.yml`'s `paths:` filter lists
`tokens/**` explicitly. Removing that line makes colour changes silently never
deploy.

## Load-bearing class names

`site/src/styles.css` is the only stylesheet. Base layout for most sections
lives in **inline `style={{…}}` objects** in the JSX, and the responsive
behaviour is media-query overrides keyed to these class names:

```
.split  .shot-row  .pricing-grid  .hero-pair
.explore-shot-col  .site-nav-links  .site-nav-toggle
```

Drop, rename, or restructure one of these and **mobile breaks with no test
failing and no visual error on desktop.** After any layout edit, verify at
1280 / 980 / 640 — the breakpoints are 980px and 640px.

## Hard design constraints

- **Dark only.** `#1A1A1A` background, single amber `#F5A623` accent. This is
  the brand and it matches the app exactly. There is no light theme and adding
  one is a product decision, not a polish pass.
- **Amber is an accent, not a fill.** Black label on amber; never amber text on
  amber (`--accent-fg` is `#000`).
- **Honest UI.** The app's rule applies to marketing copy too: don't claim a
  capability the app doesn't ship. `site/src/config.js` has `released: false`,
  which gates every App Store CTA — respect it.
- **No Olympic marks** or IWF branding beyond descriptive body copy.
- Tap targets: 44px minimum, 56px (`--tap-target-chalky`) for anything a lifter
  hits with chalked hands.

## `ui_kits/ios_app/` is read-only

It is a downstream HTML recreation of 6 of the app's ~37 screens, generated
from the Swift. Its own README names the SwiftUI code as the source of truth.
It's useful for previewing a token change in a browser and nothing else. Do not
treat it as a design surface — changes made there have no path back to Swift and
no test to catch a bad port.

## Commands

```bash
npm run dev --prefix site      # localhost:5173
npm run build --prefix site    # -> site/dist
```

`_adherence.oxlintrc.json` encodes the design-system rules (no raw hex, no raw
px, imports through `design-system/index.js`). It is not yet wired to a script;
`site/src` currently violates it in ~160 places.
