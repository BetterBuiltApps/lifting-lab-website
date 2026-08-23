/* Lifting Lab landing page, configuration. Post-release presentation: every
   CTA on the site reads from `released` below, flip it back only if the
   listing is ever pulled. */

export const SITE = {
  // Every CTA on the site reads from this one flag. `links.appStore` still
  // needs the real listing URL dropped in, see the note beside it below,
  // the flag alone does not make the badge link anywhere real.
  released: true,
  pricing: {
    free: { name: 'Free', price: '$0' },
    pro: { name: 'Pro', monthly: '$12.99/mo', yearly: '$99.99/yr' },
  },
  links: {
    // TODO real URL: this is still a placeholder anchor. `released` is true
    // and AppStoreButton now renders as a real `<a href>`, which means it
    // currently links to nowhere on the page rather than to the App Store.
    // That's a worse experience than the earlier unlinked badge, fix this
    // before the next deploy: https://apps.apple.com/app/id<the-real-id>.
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
  // rule says to use the pre-order badge before then. `released` above
  // reflects that the app is out, which is what makes this badge the correct
  // one to show rather than a compliance issue. AppStoreButton still checks
  // `released` so a future rollback (the listing gets pulled) reverts to an
  // unlinked badge instead of a dead link, see the note on `links.appStore`
  // above, that URL is the one piece still not real.
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
