# OWL — Olympic Weightlifting Lab · Design System

A design system for **Olympic Weightlifting Lab (OWL)**, a native iPhone/iPad app
for Olympic weightlifters. Dark-first, kilograms-native, offline, no account.

Its flagship is **Bar Trace**: film a lift, drag one circle over a plate, and the
app traces the bar path, measures real bar speed in m/s, segments the lift into
its five phases, overlays a body-pose skeleton, grades the pull, and names the
technique errors the data actually supports — all on-device, no upload, no sensor,
no subscription. The pitch is "a velocity-based training system for the price of
an app": GymAware and Vitruve sell hardware for hundreds to thousands.

Around Bar Trace sit **Training** (five periodized programs, guided sessions, a
readiness-aware custom workout builder, a 71-movement exercise library), a guided
**RAMP warm-up**, a **Meet Day** assistant that paces the warm-up room by counted
attempts rather than the clock, and a set of instant offline **Tools** (barbell
loader, training percentages, 1RM, strength ratios, Sinclair, Robi, IWF records).

---

## Sources

| Source | What was used |
| --- | --- |
| `OWL/` — mounted local codebase (SwiftUI + SwiftData, iOS 18) | **Primary ground truth.** `OWL/OWL/Theme/Theme.swift` (all colors, type, spacing, motion), `OWL/OWL/Theme/Components/` (component inventory), `OWL/OWL/Features/**` (screens), `OWL/OWL/App/Brand.swift` (brand rules), `OWL/OWL/Assets.xcassets/` (logo, app icon, 71 exercise illustrations), `OWL/README.md` and `OWL/Docs/` (product context) |
| `https://github.com/hickad/OWL` | **Not accessible** from this session (404 on `main` and `master` — private, or the import App isn't installed on `hickad`). Everything here came from the local mount instead. Explore the repo yourself for more detail than a design system can hold — the Swift source is the definitive reference for any OWL design work. |
| `uploads/owl-transparent.png`, `uploads/owl-black-bkg.png` | User-supplied brand lockups, copied to `assets/` |

The repo association is recorded in `github.md`.

---

## CONTENT FUNDAMENTALS

OWL writes like a good coach who respects your time: short, concrete, second
person, and never louder than the data.

**Person and voice.** Second person for the athlete's things ("your energy",
"your soreness", "Today's lift against your best"), first-person plural only when
the app itself is acting on the athlete's behalf ("We trace the bar and measure
speed"). Never "I". Never a mascot.

**Length.** Body copy is one sentence, occasionally two. Captions are 2–6 words.
Nothing on a card explains what the card is; the card shows it.

**Casing.** Sentence case for everything the athlete reads as prose. Buttons are
Title Case ("Start Session", "Resume Workout", "Log a PR"). Section labels are
written in sentence case in code and uppercased by the label style
(`Your analyses` → `YOUR ANALYSES`). Screen titles are one or two words: `Train`,
`Tools`, `Me`, `Bar Trace`.

**Numbers are the copy.** Units are always explicit and always real:
`1.78 m/s`, `102.5 kg`, `0.62 s`, `7 cm`, `86/100`. kg is the default because the
sport is kg; lb exists only because the athlete opted in. Never a unitless
"score" without saying out of what.

**The honesty rule.** This is the strongest voice trait in the codebase. When the
app can't support a conclusion, it names the reason rather than hiding the
feature or guessing:

> "Not enough tracking data to grade this lift."
> "Tracking quality: Good — plate visible in 98% of frames."
> "Official 2021–2024 IWF coefficients. Verify against iwf.sport."
> "Phase structure follows classic block periodization; week-by-week percentages are sensible defaults, tune after real use."

Uncertainty is stated, dated, and attributed. Never write confident copy over
data the app hasn't got.

**Coaching copy always ends in an action.** A finding is a diagnosis plus a cue:

> "Bar speed drops 31% through the transition — a smoother scoop keeps the pull building."
> "Bar swings out at the knee. Push the floor away and keep the shoulders over the bar longer."

**Empty and rest states are encouraging, not apologetic.**

> "No session scheduled today. Recovery is part of the plan."
> "Film side-on with the whole barbell in frame for the best tracking."
> "Want structure? Browse five periodized programs for longer-term planning."

**Emoji.** Essentially none. Exactly one exists in the whole app: 🔥 next to the
week-streak count in the Train toolbar. Do not add others. No emoji in cards, no
emoji in buttons, no emoji in marketing copy.

**Words the brand uses:** lift, pull, trace, bar path, bar speed, attempt, make,
miss, opener, tonnage, phase, cue, PR, session, block, RPE.
**Words the brand avoids:** workout gains, crush it, beast mode, unlock your
potential, AI-powered, revolutionary, seamless, effortless.

---

## VISUAL FOUNDATIONS

Everything below is taken from `Theme.swift` and the feature views, not invented.

**Palette.** Dark-first and single-accent. Three greys carry all structure —
`#1A1A1A` screen, `#232323` card, `#2C2C2E` elevated (ring tracks, capsules,
toasts). One accent: **amber `#F5A623`**. Two semantics: **make `#34C759`**,
**miss `#FF3B30`** — which double as good/caution/bad status. One second-series
color, sky `#5AC8FA`, chosen to stay distinct from amber under common
color-vision deficiencies. Maximum two background values on any screen.

**Amber discipline.** Amber is the accent, not a surface. Amber fills always take
a **black** label (`--accent-fg: #000`). Amber-on-dark is for glyphs, numbers and
plain-button text. Amber tints are always 16% alpha over the card, never a
lighter solid.

**Text is white at four alphas**, never grey hexes: 100% primary, 60% secondary,
50% tertiary (the dimmest *readable* tier — it composites to ~5:1 and clears
WCAG AA), and 35% strictly decorative (chevrons, inactive dots, baselines). The
codebase has a test enforcing this contrast split; respect the split.

**Phase palette** (fixed, shared by the trace, the velocity graph, the phase
timeline and the share burn-in): first pull sky, transition purple `#AF52DE`,
second pull amber, turnover green, catch near-white `#E5E5EA`. Never recolor.

**IWF plate colors** are standards, not brand colors: 25 red, 20 blue, 15 yellow,
10 green, 5 white, then the sequence repeats smaller for change plates. Never
restyle them.

**Type.** SF Pro Rounded does the branding — `design: .rounded` on every number,
title and label. Prose uses the system text face. Numbers are heavy (900) and
monospaced-digit so live readouts don't jitter as they count: 76px grade letter,
60px target weight, 34px timer and exercise name, 28px stat. There is exactly one
sub-title style: uppercase 12px rounded semibold with 0.8px kerning. No serif, no
condensed, no second display face.

**Spacing is not a 4pt grid.** 16 is screen padding, section gap and default card
padding; 14 is compact-card and row padding; 12 is the gap between siblings; 8/20/24
appear as `tight`/`loose`/hero-vertical. Both 14 and 16 are load-bearing — don't
snap them together.

**Radii.** 16 cards (continuous corners), 14 buttons, 12 rows and phase cards, 3
plates, capsules for chips and progress tracks.

**Cards** are the only container: `#232323` fill, 16px radius, **no border, no
shadow, no colored left edge.** Depth comes from the surface step. The single
exception in the entire app is `BadgeToast`, which floats — elevated surface, an
amber 40%-alpha hairline, and `0 4px 10px rgba(0,0,0,0.4)`.

**Backgrounds.** Flat `#1A1A1A`. No repeating patterns, no textures, no noise, no
full-bleed hero photography in-app. Gradients are used sparingly and only for
depth on interactive elements: `#FFC74D → #F5A623` top-to-bottom on the day's
session CTA and rings, and amber→green left-to-right on progress bars. Never a
whole-screen gradient — the codebase comment says so explicitly.

**Transparency and blur** appear in exactly three places: the translucent blurred
tab bar and inline nav bar, the 50%-black loading scrim, and a bottom-up black
protection gradient over video so overlay text stays legible. No frosted cards.

**Imagery.** 71 photographic exercise illustrations, warm-toned, mid-lift, shot
against neutral gyms — one per movement, plus 30-odd achievement badge images. No
illustration style beyond these. No stock hero photography.

**Animation.** One house spring does nearly everything:
`spring(duration: 0.35, bounce: 0.35)` (`--ease-spring`). Live readouts move
linearly (0.2s ring updates that follow the playhead), state changes fade over
0.4s, and the rest-timer endgame pulses to 1.05 forever on a 0.5s autoreversing
ease-in-out. Progress bars *spring* rather than jump. All of it is gated on
`accessibilityReduceMotion` in the app, and on `prefers-reduced-motion` here.

**Hover / press.** iOS-native, so there is no hover language — do not invent one
for app surfaces (web surfaces may use amber for link hover). Press feedback is a
**scale-pop to 0.93** with a punchier spring (`bounce: 0.5`), applied to big tap
targets. No opacity dips, no color darkening, no ripples.

**Tap targets.** 44pt Apple minimum, 52pt for the primary session CTA, and 56pt
for Made/Miss — the codebase comment says "for chalky hands". Never shrink them.

**Layout rules.** Single-column scrolls at 16px padding. Fixed elements: the
translucent tab bar (bottom) and the inline nav bar (top, sticky). Stat strips are
3-up; tool grids and module grids are 2-up. Content is left-aligned except
result readouts and empty states, which center.

---

## ICONOGRAPHY

**In the app: SF Symbols, exclusively.** There is no icon font, no SVG set and no
PNG icon set in the codebase — every glyph is `Image(systemName:)`. Filled
variants dominate (`flame.fill`, `trophy.fill`, `dumbbell.fill`,
`figure.strengthtraining.traditional`), rendered at `.title2`/`.title3` and
almost always tinted amber. Secondary/tertiary white is reserved for empty-state
glyphs; the 35% decorative white is for disclosure chevrons and inactive dots.

**Unicode as icons:** two cases only — `·` as the universal separator in titles
and captions (`Snatch · 102.5 kg`), and `↔` in the "kg ↔ lb" tool name.

**Emoji as icons:** one case only — 🔥 beside the week-streak count.

**⚠️ Substitution on the web.** Apple's SF Symbols font is not redistributable, so
this system ships an `Icon` component that inlines **Lucide** SVGs from CDN
(`unpkg.com/lucide-static@0.544.0`) so they inherit `currentColor`. Lucide's 2px
rounded-cap strokes are the closest free match, but they are *outline* glyphs —
the app's filled SF Symbols look heavier. Raise `strokeWidth` to 2.5 to close
some of the gap. Flagged for you to accept or replace.

| SF Symbol (app) | Lucide (web) |
| --- | --- |
| `figure.strengthtraining.traditional` | `dumbbell` |
| `slider.horizontal.3` | `sliders-horizontal` |
| `person.fill` | `user` |
| `point.topleft.down.to.point.bottomright.curvepath.fill` | `activity` |
| `flame.fill` | `flame` |
| `trophy.fill` | `trophy` |
| `medal.fill` | `medal` |
| `dumbbell.fill` | `dumbbell` |
| `percent` | `percent` |
| `chart.line.uptrend.xyaxis` | `trending-up` |
| `scalemass` | `scale` |
| `arrow.left.arrow.right` | `arrow-left-right` |
| `globe` | `globe` |
| `list.bullet.rectangle.portrait` | `list` |
| `clock.arrow.circlepath` | `history` |
| `books.vertical.fill` | `library` |
| `graduationcap.fill` | `graduation-cap` |
| `stethoscope` | `stethoscope` |
| `checkmark` / `xmark` | `check` / `x` |
| `chevron.right` / `chevron.left` | `chevron-right` / `chevron-left` |
| `video.fill` | `video` |
| `square.and.arrow.down.fill` | `download` |
| `info.circle` | `info` |
| `moon.zzz.fill` | `moon` |

**Logo.** Real, provided, and used as-is — never redrawn. The mark reads "OWL" as
a loaded barbell: amber geometric letters between red and blue competition plates.

- `assets/brand-lockup.png` — **the lockup to use.** 1197×322, real alpha, the
  in-app share watermark. ⚠️ Its "OLYMPIC WEIGHTLIFTING LAB" subline is mid-grey,
  drawn for light backgrounds — on `#1A1A1A` it falls below the AA contrast bar
  and stops being legible under about 44px tall. A white-subline variant would
  fix it; until then, don't set the lockup smaller than 44px on dark.
- `assets/brand-logo.png` — the square mark
- `assets/app-icon-1024.png` — app icon
- `assets/owl-lockup-black.png` — user-supplied lockup on black
- ⚠️ `assets/owl-lockup-transparent.png` — user-supplied, but **despite the name it
  has no alpha channel** (1254×1254, fully opaque). It renders as a pale square on
  dark backgrounds. Not used anywhere; kept only so the original upload isn't lost.
  Re-export it with transparency if you want a square-format lockup.

Wordmark is always uppercase: **OLYMPIC WEIGHTLIFTING LAB** (`Brand.wordmark`).
Per `Brand.swift`, name/wordmark/logo all read from one place — treat them as a
unit.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css`
- `assets/` — logos, app icon, and exercise illustrations
- `thumbnail.html` — homepage tile
- `SKILL.md` — Agent Skills wrapper
- `github.md` — upstream repo association

**Components** (`components/<group>/`)
| Group | Components |
| --- | --- |
| `core/` | `Button`, `Card`, `SectionLabel`, `Badge`, `StatusDot`, `ProgressBar`, `Icon` |
| `data/` | `StatCard`, `BigNumberCard`, `ScoreRing`, `PhaseTimeline`, `VelocityChart`, `Sparkline`, `PlateDiagram` |
| `session/` | `SetTarget`, `TimerRing`, `MakeMissButtons` |
| `forms/` | `WeightField` |
| `feedback/` | `BadgeToast`, `TrackingQuality`, `TraceVerdict` |
| `navigation/` | `ToolTile`, `NavRow`, `TabBar` |

Each has a `.d.ts` props contract and a `.prompt.md` usage note; each directory
has a `@dsCard` HTML showing its states.

**Intentional additions** (no counterpart in the source, added because the web
needs them):
- `Icon` — SwiftUI renders SF Symbols inline, so there is no app-side Icon
  component. This one masks Lucide SVGs. See ICONOGRAPHY.
- `NavRow` — the app builds list rows inline in several files with identical
  styling (`AnalysisRow`, the next-session card, history rows); this consolidates
  that one pattern rather than inventing a new one.

**Screenshots** (`assets/screens/`) — real captures from the shipping build, used
directly in the marketing kit and as the correction reference for the app kit.

**Guidelines** (`guidelines/`) — 21 foundation specimen cards: Colors (surfaces,
amber, make/miss, phases, plates, text tiers), Type (numeric, display, body,
label, mono), Spacing (scale, radii, in-use, tap targets, elevation), Brand
(motion, lockup, mark, imagery, honest UI).

**UI kits** (`ui_kits/`)
- `ios_app/` — five recreated app screens, interactively linked. **Recreation.**
- `marketing_site/` — pre-launch landing page. **A new design, not a recreation** —
  no web source exists. Built on real app screenshots. Contains placeholder
  pricing and links, all isolated in `config.jsx`. See its README.

**No slide template** was provided, so none was created.
