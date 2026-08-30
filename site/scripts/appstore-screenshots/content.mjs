// The 8 App Store Connect screenshots, in PRICING_AND_MARKETING.md §5 order
// ("order matters, most users see the first two"). Headlines 1, 2, and 6 are
// the site's own Arc.jsx section titles reused verbatim; the rest are trimmed
// paraphrases of copy already written there. No em/en dashes anywhere, per
// the repo-wide copy rule.
//
// SCREENCAPS and IMAGES point at the two source folders: SCREENCAPS holds
// simulator captures of ordinary UI states (all confirmed 1320x2868, current
// 5-tab UI: Train/Bar Trace/Build/Tools/Locker). Older files in that same
// folder predate a tab-bar change and mismatched filenames in places (e.g.
// an old "03-pr-tracker.png" that actually showed the Programs list), so
// every entry below was re-verified against a fresh capture, not assumed
// current by filename. IMAGES holds real-device captures that need genuine
// filmed content the simulator's seed data can't produce, currently just the
// bar trace phase-breakdown shot, which needs an actual analyzed video with
// the skeleton/phase-color overlay on screen ("Video unavailable" is what
// that screen renders against seed data with no attached clip).

import { resolve } from 'node:path';

const ROOT = '/Users/davidhicka/Library/CloudStorage/SynologyDrive-MacBackup/Application Development/Lifting Lab';
const SCREENCAPS = resolve(ROOT, 'Screencaps');
const IMAGES = resolve(ROOT, 'Images');

// The 4 AI-generated (ChatGPT) lifter photos in Images/, used as full-bleed
// backgrounds per the "photographic exception" DESIGN.md reserves for
// Hero/Pricing/footer, extended here to the App Store set. Each is 1672x941
// landscape; `cover` on the 1320x2868 portrait canvas scales by height and
// crops nearly all the width away, so `x` below is the lifter's horizontal
// center as a % of image width, tuned per photo so the crop lands on the
// athlete rather than a default 50% (which could land on empty background
// depending on the shot). Cycled round-robin across the 8 shots.
const BG = {
  cleanJerkMale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (1).png'), x: 66 },
  snatchFemale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (2).png'), x: 24 },
  splitJerkMale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (3).png'), x: 66 },
  cleanCatchFemale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_37_00 PM (4).png'), x: 20 },
};
const BG_ROTATION = [BG.cleanJerkMale, BG.snatchFemale, BG.splitJerkMale, BG.cleanCatchFemale];

// Device config, kept as data so the iPad 13" follow-up is a new entry here
// plus a sibling content array, not a template/script rewrite.
export const DEVICES = {
  'iphone-6.9': {
    width: 1320,
    height: 2868,
    frameWidth: 1000,
    frameAspect: '9 / 19.5',
    topPadding: 170,
    headerHeight: 262,
    headlineSize: 92,
    subheadSize: 40,
    frameGap: 64,
  },
};

export const SHOTS = [
  {
    order: 1,
    outFile: '01-bar-trace-path-score.png',
    headline: 'A path score, off your own film.',
    subhead: 'Peak speed, straightness, smoothness, scored.',
    // Real filmed/analyzed clip (skeleton overlay, path score), the
    // simulator's seed data has no video attached so this screen renders
    // "Video unavailable" there. Source is a real-device capture at
    // 1179x2556, upscaled ~12% to the 1320x2868 canvas (see Screencaps/
    // 46-bar-trace-path-score.png); same aspect ratio, no letterboxing.
    sourceImage: resolve(SCREENCAPS, '46-bar-trace-path-score.png'),
  },
  {
    order: 2,
    outFile: '02-check-in-builds-session.png',
    headline: 'Tell it how you feel.',
    subhead: 'It builds today’s session around it.',
    sourceImage: resolve(SCREENCAPS, '45-checkin-build-my-workout.png'),
  },
  {
    order: 3,
    outFile: '03-active-session.png',
    headline: 'Every set, already loaded.',
    subhead: 'Target weight, percent of PR, plates picked.',
    sourceImage: resolve(SCREENCAPS, '43-active-session-set-card.png'),
  },
  {
    order: 4,
    outFile: '04-technique-doctor.png',
    headline: 'Named the fault. Handed you the fix.',
    subhead: 'A cause and a corrective drill, every miss.',
    sourceImage: resolve(SCREENCAPS, '42-technique-doctor-detail-causes.png'),
  },
  {
    order: 5,
    outFile: '05-meet-day-attempt-board.png',
    headline: 'Six attempts. One board.',
    subhead: "Openers you'll make. Totals you'll keep.",
    sourceImage: resolve(SCREENCAPS, '40-meet-day-attempt-board.png'),
  },
  {
    order: 6,
    outFile: '06-program-week.png',
    headline: 'A cycle built off your real numbers.',
    subhead: 'Every week periodized off your own PRs.',
    sourceImage: resolve(SCREENCAPS, '47-program-week-detail.png'),
  },
  {
    order: 7,
    outFile: '07-pr-tracker.png',
    headline: 'Every PR, the moment you hit it.',
    subhead: 'Snatch, clean & jerk, total, charted over time.',
    sourceImage: resolve(SCREENCAPS, '41-pr-tracker.png'),
  },
  {
    order: 8,
    outFile: '08-tools-grid.png',
    headline: 'The maths the sport actually runs on.',
    subhead: 'Sinclair, Prilepin, plate math, in one tab.',
    sourceImage: resolve(SCREENCAPS, '48-tools-hub-compact.png'),
  },
].map((shot, i) => ({ ...shot, background: BG_ROTATION[i % BG_ROTATION.length] }));

export const OUTPUT_ROOT = ROOT;
