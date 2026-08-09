# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, deliberately addressed together, confirmed by the product
owner, not an unresolved question. They share a sport and differ in what they
lack:

1. **The self-coached competitive lifter.** Trains seriously; has no coach, or
   sees one weekly. Runs their own programming, usually out of a spreadsheet,
   calculating percentages by hand on a phone in a gym.
2. **The lifter with nobody watching.** Misses a lift and cannot say why. The
   set felt fine until it wasn't and there was no one there to see it.
3. **The novice heading to a first meet.** Doesn't know what actually happens
   in a warm-up room, or how attempts are timed.

The shared situation matters more than the segments: this is used mid-session,
standing, one-handed, with chalked hands, in a room that is usually dim and
often loud. Attention is measured in the rest between sets.

## Product Purpose

Lifting Lab is an iOS app for Olympic weightlifting. It programs the training
cycle, builds each day's session around how the lifter actually feels, analyzes
lifts from phone video, and plans meet day. This site is its marketing page, pre-launch, so its job is to make the app understood and awaited, not
downloaded. `SITE.released` gates every App Store CTA.

Success for the page: a lifter in any of the three situations above recognizes
their own problem in it and believes this app was built for their sport rather
than adapted to it.

## Positioning

Four claims, all confirmed as load-bearing, in roughly descending order of how
hard they are to copy:

- **Bar-path analysis with no hardware.** Speed, path, and phase timing read
  from an ordinary phone video, no sensor, no clip-on unit, no pairing. The
  nearest competitor in this space requires a $249+ device.
- **Built for one sport.** Sinclair, Robi, Prilepin, plate math for a real
  gym's inventory, warm-up ramps shaped the way a coach jumps a lifter, and a
  meet-day planner that counts attempts rather than minutes. Not a general
  strength app with weightlifting bolted on.

  The site deliberately does not sell IWF weight classes or world records. The
  app has them; measuring a club lifter against the world best does not
  motivate the people this page is written for, so they are not a headline.
- **It says when it doesn't know.** When tracking is weak, the app says so and
  shows the evidence instead of printing a confident number. Uncommon in this
  category and difficult to claim credibly without building for it.
- **Adaptive daily programming.** The lifter states energy, soreness, available
  equipment, and time; the app builds the session around that. Nothing is
  locked, reorder, swap, or adjust anything, before or during.

## Operating Context

Used in a gym, mid-session, between sets. Standing, one-handed, chalked hands,
dim room. Video is filmed from the lifter's own phone on the platform. Meet day
is the high-stakes case: the warm-up room runs on attempt counts, and being
warm at the wrong time is a real failure.

## Capabilities and Constraints

- iOS only today. Android is not planned and the site says so.
- Video analysis runs on-device; no clip or lift data is sent anywhere to score
  it. Training data syncs to the user's own private iCloud; clip sync is a
  separate opt-in. No account required.
- Stored in kg internally, matching IWF competition; kg/lb is a display choice.
- Free tier is permanent and substantial: training log, adaptive builder, all
  five programs, PR tracker, exercise library, every calculator, and three
  bar-path analyses a month.
- **Not yet released.** Nothing on the site may imply it is available.

## Brand Commitments

- Name: **Lifting Lab**. The name is fixed; the rest of the identity is not
  treated as untouchable.
- Dark interface, single amber accent (`#F5A623` on `#1A1A1A`), mirroring the
  app's `LiftingLab/Theme/Theme.swift`, which is the token source of truth.
- **Honest UI** is a product rule, not a slogan: don't claim a capability the
  app doesn't ship, and label any number whose vintage is uncertain.
- No Olympic marks or imagery, and no IWF branding beyond descriptive body
  copy. Not affiliated with the IWF, USA Weightlifting, or any manufacturer.
- No attribution to, or quotation from, any coaching text. All prose original.
- Apple's App Store badge may only appear once the app is actually live, per
  the Marketing Artwork License.

## Evidence on Hand

- 29 real screenshots of the shipping app in `site/public/assets/screens/`,
  with WebP variants. These are the strongest proof the page has.
- Sinclair coefficients are the official 2021 to 2024 IWF values.
- Pricing is set: Free $0; Pro $4.99/mo, $29.99/yr, $79.99 lifetime; Coach
  $12.99/mo, $99/yr.
- **Absent, and not to be invented:** no testimonials, no named users, no
  athlete endorsements, no download or user counts, no press, no benchmark
  results for the bar-path accuracy. The app has not shipped, so no one has
  used it.
- `site/public/assets/logo.svg` is still a placeholder wordmark.
- Privacy and Terms pages do not exist yet. App Store review requires a
  reachable privacy policy, so this is a launch blocker.

## Product Principles

1. **Earn the claim or drop it.** The app's own rule is that it says when it
   doesn't know; a page that oversells it contradicts the product.
2. **Show the app, don't describe it.** Real screenshots are the only proof
   available pre-launch, and there are 29 of them.
3. **Speak the sport.** Sinclair, Robi, warm-up room, chalk, attempts. The
   specificity is the positioning; generic fitness language erases it.
4. **Respect the reading situation.** Not a desk audience. Assume a phone, a
   short window, and a reader who wants to know quickly whether this is for
   them.
5. **Free is real, and saying so is the strongest offer.** The permanent free
   tier is unusually generous; hedging it would waste it.

## Accessibility & Inclusion

No product-specific standard was established by the owner. The site targets
WCAG 2.2 AA as a floor. The app already enforces 4.5:1 contrast on all text
tiers via an automated test (`LiftingLabTests/ThemeContrastTests.swift`), and
the site's tokens are derived from the same palette, so the contrast floor is
inherited rather than assumed. Reduced motion is honored in both.
