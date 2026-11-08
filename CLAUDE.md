# Lifting Lab, marketing site

A single-page React 18 site on Vite 6, deployed to GitHub Pages at **liftinglab.app**.
It markets the Lifting Lab iOS app, which lives in a sibling repo (`../LiftingLab`).

## What actually ships

**Only `site/` and `help/` are built.** `npm run build` in `site/` produces `site/dist`, and
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
| `help/` | The how-to guides (Starlight). **Also ships**, at `liftinglab.app/help/`. See below. |
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
comment, not the variable name, is the mapping.

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
.site-nav-links  .site-nav-toggle
```

Drop, rename, or restructure one of these and **mobile breaks with no test
failing and no visual error on desktop.** After any layout edit, verify at
1280 / 980 / 640, the breakpoints are 980px and 640px.

## Hard design constraints

- **Dark only.** `#1A1A1A` background, single amber `#F5A623` accent. This is
  the brand and it matches the app exactly. There is no light theme and adding
  one is a product decision, not a polish pass.
- **Amber is an accent, not a fill.** Black label on amber; never amber text on
  amber (`--accent-fg` is `#000`).
- **Honest UI.** The app's rule applies to marketing copy too: don't claim a
  capability the app doesn't ship. `site/src/config.js` has `released: false`,
  which gates every App Store CTA, respect it.
- **No Olympic marks** or IWF branding beyond descriptive body copy.
- Tap targets: 44px minimum, 56px (`--tap-target-chalky`) for anything a lifter
  hits with chalked hands.

## `ui_kits/ios_app/` is read-only

It is a downstream HTML recreation of 6 of the app's ~37 screens, generated
from the Swift. Its own README names the SwiftUI code as the source of truth.
It's useful for previewing a token change in a browser and nothing else. Do not
treat it as a design surface, changes made there have no path back to Swift and
no test to catch a bad port.

## Releases: nothing unreleased goes live early

What the site and the guides say is controlled by one flag, `APP_RELEASE` (`tools/release.mjs`): `1.2` is what the App Store ships
today, `1.5` is the next release. Copy, guide text, videos and stills for a feature that is not in the live app must be tagged
"since <version>" so they stay out of the build until the flag is flipped on release day. Read `RELEASING.md` for how to tag content,
how to preview a release, and how to flip it. `tools/release-guard.mjs` fails the deploy if unreleased content is in the output.

## Page rules that are easy to break

- **One media size.** Every video and still is `--media-w` (240px, 9:16; `site/src/lib/media.js`). Components take no width of their own,
  and groups align to the top, so any two that sit together share a size and a top edge. Do not give one its own width.
- **Apple badges.** The App Store badge is Apple's artwork, unmodified, at least 40px with 1/4 clear space, and linked to the live listing.
  It appears once per layout: the hero and Pricing only (repeated asks use `DownloadButton`). Use the black badge whenever another
  platform's badge sits beside it (`/get`); the white one only alone on a dark background. The Works with Apple Health badge is
  hero-only, smaller than the App Store badge, never below 30px, with Health text beside it and never the bare Apple logo. The footer
  credits every Apple mark shown. Check Apple's current guidelines before changing any of this.

## Writing conventions

**No em dashes or en dashes.** Not in copy, not in comments, not in commit
messages, not in docs. Use a comma, a colon, a full stop, or parentheses; use a
plain hyphen for ranges (`2021-2024`, `400-900`). This is a standing preference,
and a sweep has already removed every one from the repo, so a new one stands out
as an import rather than a style choice.

Note for anyone editing an SVG: a doubled hyphen is illegal inside an XML
comment, so avoid writing flag names like `--export-type` there.

## The logo is generated, not drawn

`site/public/assets/logo.svg` (the lockup) and `site/public/assets/mark.svg`
(the flask alone, used as the favicon) are **build outputs**. Do not hand edit
the path data. Regenerate with `tools/wordmark/` and read its README first.

The wordmark is Nunito, outlined to paths. That is deliberate: Nunito is the
same face `tokens/fonts.css` loads for display type, so the logo and the
headings are one type system. It is also the only face in the stack whose
licence (SIL OFL) permits outlining glyphs into a logo; SF Pro Rounded, which
the CSS stack prefers ahead of it on Apple devices, does not.

The favicon points at `mark.svg`, not `logo.svg`. The lockup is 3.5:1, so a
browser fitting it into a 16px box drew the flask about 4px wide.

## The how-to guides (`help/`)

A separate Astro/Starlight build. `deploy.yml` builds it after the site and copies
`help/dist` into `site/dist/help`, so `base: '/help'` in `help/astro.config.mjs`
must match. Articles are Markdown with schema-checked frontmatter (`covers`,
`verified_for`); the app repo's `Scripts/help-drift-check.sh` and `/update-help`
read them to keep the guides current, so keep those keys honest. Never rename an
article slug: the apps link to them. Same writing rules as everywhere (no dashes,
only what a Release build ships, Pro marked). Its dark theme in
`help/src/styles/custom.css` mirrors `tokens/`; change `tokens/` first.
`impeccable detect` does not scan `help/`. See `help/README.md`.

## Regenerating the page images

The home page no longer uses app screenshots. Every image of the app is a **still from a walkthrough video** (a headline above a
phone), made by the video project (`Lifting Lab - Videos`, `scripts/v2/web-export.mjs`) and read through `site/src/lib/stills.js`
and `StillShot` in `Chrome.jsx`. To change one: re-render the video in the video project, run `node scripts/v2/web-export.mjs`
there, review the new `site/src/data/stills.<release>.json` and `site/public/assets/stills/`, and commit. The old PNGs in
`site/public/assets/screens/` are unreferenced; delete them when you are sure nothing needs them. Alt text lives in the data
file and describes what is in the still, so re-read it after a redesign.

## Commands

```bash
npm run dev --prefix site      # localhost:5173
npm run build --prefix site    # -> site/dist
```

## What gates a deploy

`.github/workflows/deploy.yml` runs `impeccable detect site/src` as a `quality`
job that `build` depends on, so a design regression stops the deploy rather than
shipping. It is scoped to `site/src` deliberately: `components/`, `guidelines/`,
`ui_kits/` and `_ds_bundle.js` are not in the Vite build. The version is pinned,
because an unpinned detector means a new rule in a future release can fail a
deploy of a commit that changed nothing.

**`_adherence.oxlintrc.json` does not run, and cannot.** It was never wired to
anything, and three things stop it now:

1. It does not parse. oxlint rejects its `x-omelette` key.
2. Its substance is one `no-restricted-syntax` rule, which oxlint does not
   implement at all.
3. Most of its rules validate props of `<Badge>`, `<StatCard>`, `<ToolTile>`
   and friends, components that live in `components/` and `ui_kits/` and are
   not in the shipped build. They could never fire against `site/src`.

What it was really guarding, raw hex and raw px in `site/src`, is now down to
seven hex literals, and every one is deliberate: two scrollbar thumbs, two
`#000` inside `-webkit-mask` gradients where the colour is meaningless, a
literal black phone bezel, and white text on the make and miss buttons. No
brand colour is drifting from `tokens/`. Do not treat the file as a gate, and
do not "fix" `site/src` to satisfy it.
