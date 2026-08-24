/* Lifting Lab landing page, configuration. Pre-release presentation: the app
   isn't in the App Store yet (a few weeks out as of writing), so every CTA
   on the site reads from `released` below and shows honest "coming soon"
   messaging instead of a live download link. Flip to true, and drop the
   real listing URL into `links.appStore`, once the App Store listing is
   actually live. See git tag `release-ready-2026-08-23` for the last
   released:true snapshot, so that work isn't lost while this reverts. */

export const SITE = {
  // Every CTA on the site reads from this one flag. `links.appStore` still
  // needs the real listing URL dropped in, see the note beside it below,
  // the flag alone does not make the badge link anywhere real.
  released: false,
  pricing: {
    free: { name: 'Free', price: '$0' },
    pro: { name: 'Pro', monthly: '$12.99/mo', yearly: '$99.99/yr' },
  },
  links: {
    // Real URL still TODO: drop the actual App Store listing link in here
    // when it exists, alongside flipping `released` to true. Until then
    // AppStoreButton never wraps this in an `<a>` at all (see Chrome.jsx),
    // so an unset placeholder here can't become a dead link on the page.
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
    // No `support` mailto any more. It sent people out to a mail client, which
    // most never came back from, and the contact form is now the one route in.
    // The footer drops any link whose href is missing, so nothing else changed.
  },
  // The contact form posts here. Web3Forms relays a plain form POST as email,
  // which is the whole reason a static Pages site can take messages at all.
  contact: {
    endpoint: 'https://api.web3forms.com/submit',
    // Public by design. A Web3Forms access key is a client-side identifier, the
    // same class of thing as a Stripe publishable key: it ships in the bundle
    // whatever we do with it, so there is nothing here to hide and no .env to
    // add. Rotate it in the Web3Forms dashboard if it ever attracts spam.
    accessKey: 'cd2da567-17a7-4cfb-834a-88534b13fa37',
    subject: 'Lifting Lab site: new message',
  },
  // Official badge, US/UK English, white lockup (product owner's call, over
  // the black lockup Apple states as its preferred default). The App Store
  // Marketing Guidelines only permit this specific badge, "Download on the
  // App Store", once the app is actually released, its own badge-replacement
  // rule says to use the pre-order badge before then. `released` is false
  // right now, so AppStoreButton (Chrome.jsx) doesn't render this artwork at
  // all yet, a plain "coming soon" pill fills that slot honestly instead.
  // Flip `released` to true once the listing is live to start showing it.
  appStoreBadgeSrc: 'assets/app-store-badge-white.svg',
  ctaPrimary: 'Download on the App Store',
  // "Works with Apple Health" badge. Unlike the App Store badge this does not
  // wait on `released`, HealthKit sync is a real, shipped feature today, not a
  // pending listing, so the badge can go up as soon as the artwork exists.
  //
  // Apple does not let this artwork be self-served the way the App Store
  // badge's generator does: it requires an active Apple Developer Program
  // membership and a signed Developer Artwork License Agreement for Works
  // with Apple Health, then the file downloads from
  // developer.apple.com/licensing-trademarks/works-with-apple-health/.
  // There is no substitute for the real file: hand-drawing this mark would be
  // a trademark violation, not a placeholder.
  //
  // Guidelines worth knowing before it ships: white-with-outline-rule is the
  // only color variant, minimum on-screen height is 30px, clear space is 1/4
  // of the badge's height on every side, one badge maximum per web page (it
  // lives in the hero only, not duplicated in Pricing), it must sit in a
  // subordinate position associated with a specific HealthKit feature (never
  // a general "About us" placement), and never alongside a bare Apple logo.
  // Pairing it with the App Store badge itself in one CTA row is fine, that
  // rule is about the standalone Apple logo mark, not Apple's own official
  // App Store badge. The real artwork now lives at `healthBadgeSrc` (downloaded
  // under the Developer Artwork License Agreement for Works with Apple
  // Health, which grants use for marketing HealthKit-enabled apps and,
  // unlike the App Store badge, does not require a live App Store listing),
  // so this is true.
  healthBadgeReady: true,
  healthBadgeSrc: 'assets/works-with-apple-health-badge.svg',
};
