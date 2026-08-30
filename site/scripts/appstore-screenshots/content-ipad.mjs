// iPad 13" sibling of content.mjs, per that file's own note: "the iPad
// follow-up is a new config entry and a second content.mjs, not a rewrite."
// Same headlines/subheads and background rotation as the iPhone set (the
// copy isn't device-specific), but its own source screenshots: the iPad app
// runs a top tab-pill instead of a bottom bar and several screens differ in
// what fits on screen without scrolling, so these are native iPad captures
// (2064x2868 iPad Pro 13" simulator, portrait), not resized iPhone shots.
// DEVICE_TESTING.md's iPad walk (2026-08-29) found no blockers on any of
// these 8 screens, only two cosmetic gaps elsewhere (missed-session cover,
// Builder's Send It screen), neither of which this set touches.

import { resolve } from 'node:path';

const ROOT = '/Users/davidhicka/Library/CloudStorage/SynologyDrive-MacBackup/Application Development/Lifting Lab';
const SCREENCAPS_IPAD = resolve(ROOT, 'Screencaps', 'ipad');
const IMAGES = resolve(ROOT, 'Images');

const BG = {
  cleanJerkMale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (1).png'), x: 66 },
  snatchFemale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (2).png'), x: 24 },
  splitJerkMale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (3).png'), x: 66 },
  cleanCatchFemale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_37_00 PM (4).png'), x: 20 },
};
const BG_ROTATION = [BG.cleanJerkMale, BG.snatchFemale, BG.splitJerkMale, BG.cleanCatchFemale];

// frameAspect uses the iPad's own point-space proportions (1032:1376, the
// iPad Pro 13" simulator's reported coordinate space) rather than the
// iPhone's 9:19.5 bezel shape carried over from Chrome.jsx's `Shot`
// component, iPad screens are much closer to square and a phone-shaped
// frame would crop away most of a native iPad capture's width.
//
// Vertical layout (topPadding/headerHeight/frameGap/frameWidth) is derived
// from the iPhone config scaled by canvas-height ratio (2752/2868 = 0.9596),
// keeping the same proportion of canvas height spent on header vs. frame vs.
// bottom margin, then solving frameWidth from the remaining vertical space
// at the iPad's own aspect ratio. See generate.mjs's preflight check, which
// still fails loudly rather than upscale if a source image comes in short.
export const DEVICES = {
  'ipad-13': {
    width: 2064,
    height: 2752,
    frameWidth: 1560,
    frameAspect: '1032 / 1376',
    topPadding: 163,
    headerHeight: 251,
    headlineSize: 88,
    subheadSize: 38,
    frameGap: 61,
  },
};

export const SHOTS = [
  {
    order: 1,
    outFile: '01-bar-trace-phase-breakdown.png',
    headline: 'It missed. Here’s where it went.',
    subhead: 'Five phases, split from your own film.',
    sourceImage: resolve(SCREENCAPS_IPAD, '01-bar-trace-phase-breakdown.png'),
  },
  {
    order: 2,
    outFile: '02-check-in-builds-session.png',
    headline: 'Tell it how you feel.',
    subhead: 'It builds today’s session around it.',
    sourceImage: resolve(SCREENCAPS_IPAD, '02-check-in-builds-session.png'),
  },
  {
    order: 3,
    outFile: '03-active-session.png',
    headline: 'Every set, already loaded.',
    subhead: 'Target weight and percent of PR, no math.',
    sourceImage: resolve(SCREENCAPS_IPAD, '03-active-session.png'),
  },
  {
    order: 4,
    outFile: '04-technique-doctor.png',
    headline: 'Named the fault. Handed you the fix.',
    subhead: 'A cause and a corrective drill, every miss.',
    sourceImage: resolve(SCREENCAPS_IPAD, '04-technique-doctor.png'),
  },
  {
    order: 5,
    outFile: '05-meet-day-attempt-board.png',
    headline: 'Six attempts. One board.',
    subhead: 'Openers you’ll make. Totals you’ll keep.',
    sourceImage: resolve(SCREENCAPS_IPAD, '05-meet-day-attempt-board.png'),
  },
  {
    order: 6,
    outFile: '06-program-week.png',
    headline: 'A cycle built off your real numbers.',
    subhead: 'Every week periodized off your own PRs.',
    sourceImage: resolve(SCREENCAPS_IPAD, '06-program-week.png'),
  },
  {
    order: 7,
    outFile: '07-pr-tracker.png',
    headline: 'Every PR, the moment you hit it.',
    subhead: 'Snatch, clean & jerk, total, charted over time.',
    sourceImage: resolve(SCREENCAPS_IPAD, '07-pr-tracker.png'),
  },
  {
    order: 8,
    outFile: '08-tools-grid.png',
    headline: 'The maths the sport actually runs on.',
    subhead: 'Sinclair, Prilepin, plate math, in one tab.',
    sourceImage: resolve(SCREENCAPS_IPAD, '08-tools-grid.png'),
  },
].map((shot, i) => ({ ...shot, background: BG_ROTATION[i % BG_ROTATION.length] }));

export const OUTPUT_ROOT = resolve(ROOT, 'AppStoreScreenshots', 'ipad-13');
