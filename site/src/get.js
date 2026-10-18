// The smart link at liftinglab.app/get. One URL for every video description,
// QR code, and social bio link, so a store listing change or an Android
// launch never means re-cutting a caption or re-printing a code. Reads
// SITE.links.appStore and SITE.android from config.js, the same source every
// other CTA on the site reads, so there is nothing here to keep in sync by
// hand.
import { SITE } from './config.js';

const ua = navigator.userAgent;
// iPadOS 13+ reports as "Macintosh" with touch support, not "iPad".
const isIOS = /iPhone|iPad|iPod/.test(ua)
  || (ua.includes('Macintosh') && navigator.maxTouchPoints > 1);
const isAndroid = /Android/.test(ua);

function redirect(url) {
  location.replace(url);
}

if (isIOS) {
  redirect(SITE.links.appStore);
} else if (isAndroid && SITE.android.released && SITE.android.playStoreUrl) {
  redirect(SITE.android.playStoreUrl);
} else {
  // Desktop, an unreleased Android visitor, or UA sniffing that guessed
  // wrong: show both paths instead of guessing again. Honest UI over a
  // confident redirect to the wrong store, or to a Play listing that
  // doesn't exist yet.
  const root = document.getElementById('get-root');
  root.hidden = false;
  root.querySelector('.get-ios a').href = SITE.links.appStore;

  const android = root.querySelector('.get-android');
  if (SITE.android.released && SITE.android.playStoreUrl) {
    android.innerHTML = `<a href="${SITE.android.playStoreUrl}">Get it on Google Play</a>`;
  }
}
