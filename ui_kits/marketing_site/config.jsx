/* Lifting Lab landing page — configuration. Post-prelaunch presentation: designed to
   read correctly once the App Store listing exists, even though today the
   button still points nowhere. */

const SITE = {
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
  ctaNote: 'Free. No account required.',
};

Object.assign(window, { SITE });
