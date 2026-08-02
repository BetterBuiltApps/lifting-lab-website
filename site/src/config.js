/* OWL landing page — configuration. Post-prelaunch presentation: designed to
   read correctly once the App Store listing exists, even though today the
   button still points nowhere. */

export const OWL_SITE = {
  // Flip to true (and set links.appStore to the real URL) when the App Store
  // listing goes live — every CTA on the site reads from this one flag.
  released: false,
  pricing: {
    free: { name: 'Free', price: '$0' },
    pro: { name: 'Pro', monthly: '$4.99/mo', yearly: '$29.99/yr', lifetime: '$79.99 lifetime' },
    coach: { name: 'Coach', monthly: '$12.99/mo', yearly: '$99/yr' },
  },
  links: {
    appStore: '#app-store',
    privacy: '#privacy',
    terms: '#terms',
    support: 'mailto:support@owl.example',
  },
  ctaPrimary: 'Download on the App Store',
  ctaPrimaryPrelaunch: 'Coming soon to the App Store',
  ctaNote: 'Free at launch. No account required.',
};
