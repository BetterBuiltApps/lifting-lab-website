---
name: Lifting Lab
description: The dark instrument palette of a competitive weightlifting app, carried onto the web.
colors:
  bg: "#1a1a1a"
  surface: "#232323"
  surface-elevated: "#2c2c2e"
  amber: "#f5a623"
  amber-light: "#ffc74d"
  amber-16: "rgba(245, 166, 35, 0.16)"
  amber-40: "rgba(245, 166, 35, 0.4)"
  accent-fg: "#000000"
  make: "#34c759"
  miss: "#ff3b30"
  cool: "#5ac8fa"
  phase-transition: "#af52de"
  phase-catch: "#e5e5ea"
  text-primary: "#ffffff"
  text-secondary: "rgba(255, 255, 255, 0.6)"
  text-tertiary: "rgba(255, 255, 255, 0.5)"
  glyph-decorative: "rgba(255, 255, 255, 0.35)"
  hairline: "rgba(255, 255, 255, 0.08)"
typography:
  display:
    fontFamily: "ui-rounded, 'SF Pro Rounded', 'Nunito', -apple-system, system-ui, sans-serif"
    fontSize: "clamp(44px, 5.4vw, 64px)"
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: "-2px"
  headline:
    fontFamily: "ui-rounded, 'SF Pro Rounded', 'Nunito', -apple-system, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 48px)"
    fontWeight: 900
    lineHeight: 1.06
    letterSpacing: "-1px"
  title:
    fontFamily: "ui-rounded, 'SF Pro Rounded', 'Nunito', -apple-system, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 44px)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "-1px"
  numeric:
    fontFamily: "ui-rounded, 'SF Pro Rounded', 'Nunito', -apple-system, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 900
    lineHeight: 1
    fontFeature: "tabular-nums lining-nums"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "normal"
  subheadline:
    fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "ui-rounded, 'SF Pro Rounded', 'Nunito', -apple-system, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.8px"
rounded:
  card: "16px"
  button: "14px"
  row: "12px"
  bezel: "34px"
  focus: "4px"
  pill: "999px"
spacing:
  space-1: "2px"
  space-2: "4px"
  space-3: "6px"
  tight: "8px"
  space-4: "10px"
  normal: "12px"
  space-5: "14px"
  space-6: "16px"
  loose: "20px"
  space-7: "24px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.accent-fg}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "52px"
  button-gradient:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.accent-fg}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "52px"
  button-outline:
    textColor: "{colors.amber}"
    rounded: "{rounded.button}"
    padding: "0 14px"
    height: "36px"
  button-plain:
    textColor: "{colors.amber}"
    rounded: "{rounded.button}"
    padding: "0 18px"
    height: "48px"
  button-make:
    backgroundColor: "{colors.make}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "52px"
  button-miss:
    backgroundColor: "{colors.miss}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "52px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: "16px"
  section-label:
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
  chip-accent:
    backgroundColor: "{colors.amber-16}"
    textColor: "{colors.amber}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-neutral:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  nav-link:
    textColor: "{colors.text-secondary}"
    typography: "{typography.subheadline}"
---

# Design System: Lifting Lab

## Overview

**Creative North Star: "The Calibrated Instrument"**

This is not a marketing skin invented for a website. It is the app's own instrument
face, lifted onto the web with its measurements intact. The ground is near-black,
the surfaces are one step up from it, and a single amber marks where you are —
never where the designer wanted your eye to wander. Everything reads like a
readout: numbers are tabular so a changing value never nudges its neighbour, the
rounded face carries every title and every figure, and the body copy steps back
into the system's own text face so the numbers stay the loudest thing on screen.

Depth is tonal, not theatrical. Three greys do the work that shadows do elsewhere:
`--bg` for the page, `--surface` for a card, `--surface-elevated` for a track or a
capsule. Cards have no border and no shadow — they are simply a lighter fill on a
darker one. The one place a real shadow appears is under a device bezel, and it is
ambient, not offset: a screenshot floats above the page because a phone in a
studio shot casts a diffuse pool, not because the layout wanted a lift.

The page's own structure is density, not repetition. The spine is a calibrated
week axis running twelve weeks out to meet day, and each station on it is
deliberately shaped differently: wide and calm early, a paired before/after next,
a darker tighter room at four weeks out, a dense numeric block at one, and the
highest-contrast close at zero. The refusal is explicit and it is the whole point:
a hero followed by alternating text/screenshot rows of equal weight is what this
world is not.

**Key Characteristics:**
- Dark-locked. One theme, deliberately, because the use scene is a dim gym mid-session.
- One accent. Amber marks position, state, and interactivity — nothing decorative.
- Tonal depth. Three surface steps replace an elevation ramp.
- Rounded numerals. Every figure is tabular, lining, and set in the rounded face.
- Density as structure. Sections vary in shape on purpose; convergence is the failure mode.
- Fill-only cards. No borders, no shadows, no outlines at rest.

## Colors

A near-black instrument ground with white text held at fixed alphas, one amber
accent, and a small set of literal signal colors borrowed from the app's own data
visuals.

**The token source of truth is the iOS app, not this repo.** Every value here
mirrors `../LiftingLab/LiftingLab/Theme/Theme.swift`; each declaration in
`tokens/colors.css` carries a `/* BPColor.x */` comment naming its Swift origin.
Names deliberately differ between the two (`BPColor.background` is `--bg`;
`phasePurple` is `--phase-transition`) — that is intentional, not drift. The
change order is fixed: Theme.swift first, then `tokens/*.css`, never the reverse.
`../LiftingLab/Scripts/check-design-tokens.sh --report` verifies the mirror.

### Primary
- **Signal Amber** (`{colors.amber}`): The one accent. It marks the lit station on
  the week axis, the active week number, the primary button fill, focus rings,
  text selection, caret, links on hover, the Pro tier's price and border, and the
  meet-day station's title. It is never a background wash and never a decorative
  flourish.
- **Amber Rise** (`{colors.amber-light}`): The top stop of the amber gradient and
  the link-hover state. Only ever seen as the lighter end of amber, never alone.
- **Amber Wash** (`{colors.amber-16}`) and **Amber Hairline** (`{colors.amber-40}`):
  The two transparent amber tints — a chip fill and a 1px border respectively.

### Secondary
- **Make Green** (`{colors.make}`) and **Miss Red** (`{colors.miss}`): Literal
  outcome colors from the sport. A lift was made or it was missed. They appear on
  the make/miss buttons and on checklist marks; Miss Red also tints the radial
  glow behind the four-weeks-out station. Never used as generic success/error
  decoration.
- **Comparison Cool** (`{colors.cool}`): The second series in any two-series
  comparison, chosen to stay distinguishable from amber under color-vision
  deficiency.

### Tertiary
- **The phase palette** (`{colors.cool}`, `{colors.phase-transition}`,
  `{colors.amber}`, `{colors.make}`, `{colors.phase-catch}`): Five colors that
  split a lift into first pull, transition, second pull, turnover, and catch.
  These are data encodings owned by the app's analysis feature. They appear on the
  bar-path trace and its key, and nowhere else.

### Neutral
- **Instrument Ground** (`{colors.bg}`): The page. Also the fill of cards that sit
  on a `--surface` section, which inverts the usual relationship deliberately.
- **Card Surface** (`{colors.surface}`): Every card, and the ground of any section
  that needs to read as a different room (Pricing, the dark station).
- **Track Grey** (`{colors.surface-elevated}`): Ring tracks, capsules, and the
  secondary button fill. The third and last surface step.
- **Text tiers** (`{colors.text-primary}`, `{colors.text-secondary}`,
  `{colors.text-tertiary}`): White at fixed alphas — primary for headings and
  values, secondary for body and nav, tertiary for captions and axis labels.
- **Decorative Glyph** (`{colors.glyph-decorative}`): Non-text marks only, such as
  an unlit axis tick.
- **Hairline** (`{colors.hairline}`): Every divider, station rule, and card border
  on the page. It is the only line weight the system has.

### Named Rules

**The Grey-Free Text Rule.** Secondary and tertiary text is white at a fixed alpha,
never a grey hex. A grey hex bakes in the surface it was sampled against and
breaks the moment the text moves from `--bg` to `--surface`.

**The Black-On-Amber Rule.** Text on an amber fill is always black
(`{colors.accent-fg}`). Amber text on a dark ground is permitted; amber text on an
amber fill is not.

**The One Position Rule.** Amber marks position and state. If a use of amber
cannot be described as "this is where you are" or "this is what you press", it is
decoration and does not ship.

**The Dark-Lock Rule.** There is no light theme. The use scene is a dim gym,
mid-session, chalked hands. Adding one is a product decision, not a styling task.

## Typography

**Display Font:** SF Pro Rounded, resolved via `ui-rounded` on Apple platforms,
with self-hosted Nunito behind it everywhere else.
**Body Font:** The platform's own UI face (`-apple-system` / `system-ui` /
Segoe UI / Roboto).
**Mono Font:** The platform's own mono face (`ui-monospace` / SF Mono / Menlo /
Consolas).

**Character:** Rounded and heavy for anything you read as a number or a claim;
neutral and quiet for anything you read as a sentence. The rounded face is the
brand voice — it is what makes a weight, a week, or a score feel like an
instrument readout rather than a paragraph. Nunito is the only webfont that ships
(two variable subsets, 73 KB, self-hosted at `site/public/assets/fonts/`), and it
earns its bytes only on platforms with no rounded system face; Inter and JetBrains
Mono were deliberately removed because both sat behind system faces that were
already the right answer.

### Hierarchy
- **Display** (900, `clamp(44px, 5.4vw, 64px)`, 1.0, -2px): The page's single H1.
  One per page, first viewport, left column.
- **Headline** (900, `clamp(30px, 3.4vw, 48px)`, 1.06, -1px): Every section
  heading, via the shared section-head component. Capped at 640px (720px when
  centered).
- **Title** (900, `clamp(28px, 3.2vw, 44px)`, 1.08, -1px): Station titles on the
  arc. Capped at 20ch so a title never runs to the width of its lede.
- **Numeric** (900, 20px, 1.0, tabular + lining): Week marks on the axis and in
  each station's marker. Set in the rounded face with tabular figures.
- **Body** (400, 17px, 1.35): Default copy. The arc's lede runs at 17px/1.55
  capped at 68ch; the hero's at 19px/1.55 capped at 52ch; a section head's at
  18px/1.5.
- **Label** (600, 12px, 0.8px tracking, uppercase): The one small uppercase form
  in the system. It states a fact the heading cannot — a week unit, a pair caption,
  a pricing tier name — and never restates the heading beneath it.

### Named Rules

**The No-Eyebrow Rule.** The section-head component has no eyebrow prop, and it
was removed on purpose. A small amber uppercase label above a heading that says
what the heading already says is the most reliable tell that a layout was
assembled from a template. Do not reintroduce it. The uppercase label survives
only where it carries information the heading does not — the calibrated week
markers, a before/after caption, a tier name.

**The Tabular Numeral Rule.** Any number a reader might compare vertically —
prices, weeks, scores — is `tabular-nums lining-nums`. Columns line up and a
changing value never shifts its neighbours.

**The Rounded-Numbers Rule.** Numbers and titles take the rounded display face.
Sentences take the system text face. A number set in the body face has lost the
brand voice.

## Layout

The page is a single centered column: max-width 1240px with
`clamp(20px, 5vw, 60px)` of side padding, applied by one shared wrapper. Vertical
section rhythm is `clamp(60px, 7vw, 110px)`; the arc breathes wider at
`clamp(56px, 7vw, 96px)` outside and `clamp(48px, 6vw, 88px)` per station.

**Breakpoints are exactly two: 980px and 640px.** 980px is where every two-column
grid collapses to one, the sticky screenshot column unsticks, the arc's rail is
hidden (each station's own marker carries the week instead), and the desktop nav
becomes a toggle. 640px only stacks the hero's screenshot pair and rotates the
before/after arrow ninety degrees so it points down rather than at nothing.

**Base layout lives in CSS classes, never in inline styles.** A set of class names
is load-bearing, and losing any of them breaks mobile silently: `.split`,
`.shot-row`, `.pricing-grid`, `.hero-pair`, `.explore-shot-col`, `.site-nav-links`,
`.site-nav-toggle`. Per-section variance rides on the `--split-cols` custom
property set inline, deliberately: a custom property is data, not a competing
declaration, so the media query still wins without `!important`.

The primitives themselves: a two-column text/media row with a
`clamp(28px, 4vw, 60px)` gutter; an auto-fitting screenshot row at a 160px
minimum; a pricing grid at a 280px minimum capped at 1080px; a hero pair at a
240px minimum; and a screenshot column that sticks 100px from the top while the
list beside it scrolls.

The spacing scale is not a strict 4px grid, and that is inherited from the app
rather than an oversight: card padding is 16, compact padding and row padding are
14, the default stack gap is 12. Sticky offsets are their own small set — 68px nav
height, 88px scroll padding, 100px for the sticky shot, 132px for the axis.

### Named Rules

**The Cascade-Not-Override Rule.** Layout belongs in a class. A section that needs
a different ratio sets `--split-cols`; it does not restate `grid-template-columns`
inline. No `!important` appears anywhere in this system.

**The Two-Breakpoint Rule.** 980px and 640px. A third breakpoint means the layout
is wrong, not that the system is short one.

## Elevation & Depth

This system is essentially shadowless. Depth is tonal: `--bg` → `--surface` →
`--surface-elevated`, three steps, and a card is simply the next step up from
whatever it sits on. Cards ship with no border and no shadow at rest. Separation
between blocks comes from a single hairline rule, not from a lift.

Two exceptions, both physical rather than decorative. A device bezel casts a wide
ambient pool beneath it, because a phone photographed on a dark surface does. And
a sticky nav sits on a translucent ground with a real backdrop blur, because
content genuinely passes behind it.

### Shadow Vocabulary
- **Device Bezel** (`box-shadow: 0 30px 70px rgba(0,0,0,0.55)`): Under every
  screenshot, applied once by the shared screenshot component. Wide, soft, and
  centered — never offset toward a light source the page doesn't have.
- **Axis Marker Halo** (`box-shadow: 0 0 0 4px rgba(245,166,35,0.14)`): The soft
  amber ring around the lit station dot. A glow, not a drop shadow.
- **Toast** (`0 4px 10px rgba(0,0,0,0.4)`) and **Sheet** (`0 -2px 24px rgba(0,0,0,0.5)`):
  Inherited from the app for content that floats over the page. Not used on this
  site's current surfaces.
- **Nav Ground** (`background: rgba(26,26,26,0.82); backdrop-filter: blur(20px)`):
  The sticky nav's material.

### Named Rules

**The Tonal-Depth Rule.** Depth comes from a surface step, not a shadow. If a
block needs to feel raised, move it to the next surface token; if it needs to feel
separate, give it a hairline.

**The Physical-Shadow-Only Rule.** A shadow ships only when it describes something
physical — a device casting a pool, an element genuinely floating. There are no
offset shadows, no hard-edged shadows, and no shadow used to create hierarchy.

## Shapes

Corners are generous and consistent: 16px for a card, 14px for a button, 12px for
a list row, 34px for a device bezel (the phone's own radius), and a full pill for
chips and marks. Focus rings round to 4px so they hug tightly whatever they wrap.

Borders are almost absent. Where one exists it is a 1px hairline at 8% white — the
station rules, the nav's bottom edge, the fact-grid cells — or a 1px amber
hairline at 40% marking the one highlighted card on the page. Cards are fill-only
by default.

The recurring silhouette is the vertical rule with a mark on it: the arc's axis
draws its own connecting hairline from the tick's pseudo-element, so the rail can
never fall out of step with the list it labels. The lit mark is a 12px amber disc
with a soft halo; the unlit marks are 5px decorative-grey dots.

One signature ornament exists: a rotating amber conic-gradient ring masked to an
element's own border, used on exactly two elements (the highlighted pricing card
and the nav's primary CTA). It is a 3.5s linear loop and it stops entirely under
`prefers-reduced-motion`.

## Components

The character across the set is instrument-like: firm fills, no outlines at rest,
tap feedback that answers immediately, and no ornament that isn't stating
something.

### Buttons
- **Shape:** Softly rounded rectangle (14px), never a pill.
- **Sizes:** Large 52px tall (the app's primary session CTA height), medium 48px,
  small 36px. Label sits in the rounded display face at weight 600.
- **Primary:** Amber fill, black label, 0 20px padding. The only filled amber
  element on a given view.
- **Gradient:** The amber gradient (light-to-base, top-to-bottom) with a black
  label — the same button with more presence.
- **Secondary:** The elevated surface grey with primary white text. Also the
  pre-launch inert CTA state, rendered disabled at full opacity.
- **Outline:** Transparent with a 1.5px amber border and an amber label. Used at
  small size for the nav CTA.
- **Plain:** Transparent, amber label, no border.
- **Make / Miss:** The sport's outcome colors with white labels. Reserved for
  outcome actions only.
- **Hover:** Scale to 1.02 with brightness 1.08 over 350ms on the house curve.
- **Active:** Scale to 0.93 over 250ms on the sharper press curve. Two distinct,
  already-idiomatic feels — settle for hover, pop for press.
- **Focus:** A 2px amber ring at 3px offset, keyboard-only.
- **Disabled:** 35% opacity, default cursor.

### Chips
- **Style:** Full pill, 6px/14px padding, caption type.
- **Accent variant:** Amber wash fill, amber hairline border, amber label at
  weight 700. Reserved for status ("Coming soon").
- **Neutral variant:** Card surface fill, white hairline border, secondary text.

### Cards / Containers
- **Corner Style:** 16px, or 12px for the row variant.
- **Background:** Card surface by default. On a section whose ground is already
  the card surface, cards invert to the page ground — the contrast step is
  preserved by flipping, not by adding a border.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** None by default. The one highlighted card carries a 1px amber
  hairline plus the rotating border ornament.
- **Internal Padding:** 16px.

### Navigation
- Sticky at the top of a translucent ground with a 20px backdrop blur and a
  hairline bottom edge, 68px tall. Links sit in the body face at subheadline size
  in secondary text, going amber on hover, with a 26px gap.
- Below 980px the link row is replaced by a toggle rendering a menu/close icon;
  the open panel animates its height and opacity over 400ms on the in-out curve
  and collapses instantly under reduced motion.
- A skip link sits above the nav, hidden off-canvas until focused, then slides
  down as an amber pill with a black label.

### The Week Axis (signature component)
The page's spine and its only persistent chrome. A sticky vertical list of five
calibrated stations, offset 132px from the top on desktop, hidden below 980px
where each station's own marker carries the week instead. Each entry pairs a
tabular week number in the rounded face with a tertiary caption label, joined by a
hairline rail the ticks draw themselves. The active station is tracked by
IntersectionObserver, marked with `aria-current="step"`, and lit by a single amber
disc that animates between positions as one shared element rather than fading in
and out per tick — one orchestrated marker, not five independent ones.

### Screenshots (signature component)
Every screenshot on the site goes through one component; that is the choke point
by design. A minimal dark bezel at 34px radius with a 1px white hairline at 14%, a
fixed 9:19.5 aspect ratio reserving layout space so nothing shifts, and the device
bezel shadow beneath. Sources ship as WebP at 600w and 900w through a `<picture>`
element with the PNG as archival fallback; `site/scripts/build-screens.sh`
regenerates them. Hover lifts the scale to 1.015 and brightens the hairline to
22%. Captions sit beneath in tertiary caption type.

### Icons
Three icons exist — menu, close, and check — vendored inline from lucide-static
v0.544.0. They render at 24×24 viewBox with 2px stroke, round caps and joins, and
inherit `currentColor`. Adding a fourth means pasting its path data into the icon
component; there is no icon package on the render path and no runtime fetch.

## Do's and Don'ts

### Do:
- **Do** change `Theme.swift` first and mirror into `tokens/*.css` second. The iOS
  app is the source of truth; the CSS is the mirror. Verify with
  `check-design-tokens.sh --report`.
- **Do** express depth as a surface step (`--bg` → `--surface` →
  `--surface-elevated`), not as a shadow.
- **Do** keep white text at fixed alphas. Never introduce a grey hex for text.
- **Do** put base layout in a class and per-section variance in `--split-cols`.
- **Do** set every comparable number in `tabular-nums lining-nums`.
- **Do** route every screenshot through the shared screenshot component so the
  bezel, aspect ratio, and responsive sources stay in one place.
- **Do** keep `lib/motion.js` numerically identical to `tokens/motion.css`. Motion
  cannot read a CSS custom property, so the values are duplicated by hand.
- **Do** vary section density on purpose. The arc's stations are wide, paired,
  dark, dense, and high-contrast in that order, and the variation is the structure.
- **Do** give keyboard users a visible 2px amber focus ring at 3px offset on every
  interactive element.
- **Do** stop the rotating border ornament and collapse motion durations under
  `prefers-reduced-motion`.

### Don't:
- **Don't** add an eyebrow or kicker above a heading. The section-head component
  has no such prop and the omission is deliberate.
- **Don't** use amber for anything that isn't position, state, or interactivity.
- **Don't** set an amber label on an amber fill; text on amber is always black.
- **Don't** introduce a light theme. Dark-lock is a product decision tied to the
  use scene.
- **Don't** use bounce, overshoot, or elastic easing. Both house curves
  (`cubic-bezier(0.22, 1, 0.36, 1)` and `cubic-bezier(0.16, 1, 0.3, 1)`) are
  exponential ease-outs, chosen because real mass decelerates and does not rebound
  off a layout.
- **Don't** add a third breakpoint. 980px and 640px are the whole responsive story.
- **Don't** rename or drop the load-bearing layout classes (`.split`, `.shot-row`,
  `.pricing-grid`, `.hero-pair`, `.explore-shot-col`, `.site-nav-links`,
  `.site-nav-toggle`). Losing one breaks mobile silently.
- **Don't** use `!important`. If a media query is losing, the base rule is in the
  wrong place.
- **Don't** fetch icons from a CDN or add an icon font. Three icons are vendored
  inline; a fourth is pasted in beside them.
- **Don't** add a webfont. Nunito is the one substitution that earns its bytes;
  every other face in the stacks is the platform's own and is already correct.
- **Don't** put a border or a shadow on a card at rest.
- **Don't** let the arc's stations converge on one shape. If every station looks
  the same, the section has lost the thing it exists to do.
