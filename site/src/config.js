/* Lifting Lab landing page, configuration. Post-prelaunch presentation:
   designed to read correctly once the App Store listing exists, even though
   today the button still points nowhere. */

export const SITE = {
  // Flip to true (and set links.appStore to the real URL) when the App Store
  // listing goes live, every CTA on the site reads from this one flag.
  released: false,
  pricing: {
    free: { name: 'Free', price: '$0' },
    pro: { name: 'Pro', monthly: '$4.99/mo', yearly: '$29.99/yr', lifetime: '$79.99 lifetime' },
    coach: { name: 'Coach', monthly: '$12.99/mo', yearly: '$99/yr' },
  },
  links: {
    appStore: '#app-store',
    // Real pages now, built from legal/*.md by tools/legal/build.py and served
    // as their own static files (see the multi-page input in vite.config.js).
    // These were '#privacy' and '#terms', in-page anchors matching no element,
    // so both rendered as real links and did nothing; the footer still omits
    // any link whose target is null, which is what carried them until the
    // documents existed.
    //
    // The privacy URL is the one App Store review asks for.
    privacy: '/privacy/',
    terms: '/terms/',
    support: 'mailto:support@liftinglab.app',
  },
  // Official badge, generated per-app at toolbox.marketingtools.apple.com/app-store/
  // (requires an accepted App Store Marketing Artwork License, only valid once
  // the app is actually live). Drop the downloaded SVG/PNG at this path before
  // flipping `released` to true; the license itself only permits use in
  // connection with an app that's available on the App Store. Black variant is
  // Apple's preferred default, see App Store Marketing Guidelines.
  appStoreBadgeSrc: 'assets/app-store-badge-black.svg',
  ctaPrimary: 'Download on the App Store',
  ctaPrimaryPrelaunch: 'Coming soon to the App Store',
  ctaNote: 'Free at launch. No account required.',
};
