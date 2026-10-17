// Google Play tablet screenshots (7-inch and 10-inch slots), same design as the
// Android phone set (content-android.mjs) and the iPhone App Store set. Run:
//
//   node scripts/appstore-screenshots/generate.mjs android-tablet
//
// Sources are real captures from the Android emulator resized to a tablet
// shape (1600x2560 at 320 dpi, so 800x1280 dp), in `Lifting Lab - Andriod/
// screencaps-tablet`. They are the app as it really renders at that size, not
// mockups. The app has no tablet-specific layout: most screens are the phone
// layout at full width, so the set uses the four screens that fill a tablet
// well (Tools already reflows to two columns, check-in and the set card fit
// without stretching). Play wants 16:9 or 9:16 images, so the canvas is the
// same 1440x2560 as the phone set; `minSource` is the capture size, not the
// canvas, for the reason given in content-android.mjs. No em or en dashes.

import { resolve } from 'node:path';
import { SHOTS as PHONE_SHOTS } from './content-android.mjs';

const APPS = '/Users/davidhicka/Library/CloudStorage/SynologyDrive-MacBackup/Application Development';
const ANDROID_ROOT = resolve(APPS, 'Lifting Lab - Andriod');
const SCREENCAPS = resolve(ANDROID_ROOT, 'screencaps-tablet');

// Same lifter photos and crops as the phone set, so the two sets match.
const BACKGROUNDS = PHONE_SHOTS.map((shot) => shot.background);

export const DEVICES = {
  'android-tablet': {
    width: 1440,
    height: 2560,
    minSource: { width: 1600, height: 2560 },
    frameWidth: 1248,
    frameAspect: '1600 / 2560',
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
    outFile: '01-train.png',
    headline: 'Your week, at a glance.',
    subhead: 'Sessions, tonnage and your next lift.',
    sourceImage: resolve(SCREENCAPS, '01-train.png'),
  },
  {
    order: 2,
    outFile: '02-check-in-builds-session.png',
    headline: 'Tell it how you feel.',
    subhead: 'It builds today’s session around it.',
    sourceImage: resolve(SCREENCAPS, '02-checkin.png'),
  },
  {
    order: 3,
    outFile: '03-bar-loading.png',
    headline: 'The bar, loaded for you.',
    subhead: 'Plates worked out, side by side.',
    sourceImage: resolve(SCREENCAPS, '03-set-card.png'),
  },
  {
    order: 4,
    outFile: '04-tools.png',
    headline: 'The maths the sport runs on.',
    subhead: 'Sinclair, Robi points, plate math, 1RM, in one tab.',
    sourceImage: resolve(SCREENCAPS, '04-tools.png'),
  },
].map((shot, i) => ({ ...shot, background: BACKGROUNDS[i % BACKGROUNDS.length] }));

export const OUTPUT_ROOT = resolve(ANDROID_ROOT, 'marketing-tablet');
