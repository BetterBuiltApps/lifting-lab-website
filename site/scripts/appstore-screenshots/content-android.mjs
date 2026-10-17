// Google Play phone screenshots, in the same style as the iPhone App Store
// set (content.mjs): a headline and subhead over a lifter photo, the real app
// UI inside the site's device frame. Run with:
//
//   node scripts/appstore-screenshots/generate.mjs android-phone
//
// Sibling of content.mjs and content-ipad.mjs, per content.mjs's own note that
// a new device is "a new config entry and a second content.mjs, not a rewrite".
//
// Sources are real captures from the Android emulator at 1080x2160 (1:2),
// in `Lifting Lab - Andriod/screencaps`. Nothing is mocked: the bar-path shot
// is a real analyzed clip, the others are the app on seeded sample data.
//
// Play wants phone screenshots at 16:9 or 9:16, each side 320 to 3840 px, so
// the canvas is 1440x2560. The frame is 1:2 to match the capture exactly, and
// is smaller than the iPhone's relative to the canvas because 9:16 is shorter
// than the iPhone's 9:19.5. `minSource` is the capture size, not the canvas,
// because the frame (1030 px wide) is what the capture fills. No em or en
// dashes in copy, per the repo-wide rule. Every claim below is on the screen
// it sits next to.

import { resolve } from 'node:path';

const APPS = '/Users/davidhicka/Library/CloudStorage/SynologyDrive-MacBackup/Application Development';
const ANDROID_ROOT = resolve(APPS, 'Lifting Lab - Andriod');
const SCREENCAPS = resolve(ANDROID_ROOT, 'screencaps');
// The lifter photos live with the iPhone assets; they are shared brand imagery.
const IMAGES = resolve(APPS, 'Lifting Lab - iPhone', 'Images');

const BG = {
  cleanJerkMale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (1).png'), x: 66 },
  snatchFemale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (2).png'), x: 24 },
  splitJerkMale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_36_59 PM (3).png'), x: 66 },
  cleanCatchFemale: { file: resolve(IMAGES, 'ChatGPT Image Aug 17, 2026, 07_37_00 PM (4).png'), x: 20 },
};
const BG_ROTATION = [BG.cleanJerkMale, BG.snatchFemale, BG.splitJerkMale, BG.cleanCatchFemale];

export const DEVICES = {
  'android-phone': {
    width: 1440,
    height: 2560,
    minSource: { width: 1080, height: 2160 },
    frameWidth: 1030,
    frameAspect: '1 / 2',
    topPadding: 100,
    headerHeight: 270,
    headlineSize: 82,
    subheadSize: 38,
    frameGap: 40,
  },
};

export const SHOTS = [
  {
    order: 1,
    outFile: '01-bar-trace-path-score.png',
    headline: 'A path score, off your own film.',
    subhead: 'Peak speed, straightness, smoothness, scored.',
    sourceImage: resolve(SCREENCAPS, '03-bar-path.png'),
  },
  {
    order: 2,
    outFile: '02-check-in-builds-session.png',
    headline: 'Tell it how you feel.',
    subhead: 'It builds today’s session around it.',
    sourceImage: resolve(SCREENCAPS, '10-checkin.png'),
  },
  {
    order: 3,
    outFile: '03-session-already-loaded.png',
    headline: 'Every set, already loaded.',
    subhead: 'Targets and warm-ups, set for you.',
    sourceImage: resolve(SCREENCAPS, '12-session-list.png'),
  },
  {
    order: 4,
    outFile: '04-bar-loading.png',
    headline: 'The bar, loaded for you.',
    subhead: 'Plates worked out, side by side.',
    sourceImage: resolve(SCREENCAPS, '13-set-card-bar-loading.png'),
  },
  {
    order: 5,
    outFile: '05-programs.png',
    headline: 'Programs, built in.',
    subhead: 'Periodized templates, or build your own.',
    sourceImage: resolve(SCREENCAPS, '02-programs.png'),
  },
  {
    order: 6,
    outFile: '06-tools.png',
    headline: 'The maths the sport runs on.',
    subhead: 'Sinclair, Robi points, plate math, 1RM, in one tab.',
    sourceImage: resolve(SCREENCAPS, '05-tools.png'),
  },
  {
    order: 7,
    outFile: '07-bar-numbers.png',
    headline: 'Every number, off your own clip.',
    subhead: 'Peak speed, bar height, drift, measured.',
    sourceImage: resolve(SCREENCAPS, '04-bar-numbers.png'),
  },
].map((shot, i) => ({ ...shot, background: BG_ROTATION[i % BG_ROTATION.length] }));

export const OUTPUT_ROOT = resolve(ANDROID_ROOT, 'marketing');
