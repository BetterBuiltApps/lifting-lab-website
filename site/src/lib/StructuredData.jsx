import React from 'react';
import { SITE } from '../config';
import { FAQ_ITEMS } from '../sections/FAQFooter';

/* Renders three JSON-LD blocks. Plain <script> tags in the render tree
   rather than a head-manipulation effect, so they exist on first paint and
   flow straight into the build's prerendered snapshot (scripts/prerender.mjs)
   for crawlers that never run the JS at all.

   Prices come from SITE.pricing rather than being restated, so a pricing
   change here never drifts from what Pricing.jsx actually shows. FAQ_ITEMS
   is the same array FAQFooter.jsx renders, for the same reason. */

function priceToOffer(display) {
  const amount = parseFloat(display.replace(/[^0-9.]/g, ''));
  const period = display.includes('/yr') ? 'P1Y' : display.includes('/mo') ? 'P1M' : undefined;
  const offer = { '@type': 'Offer', price: amount, priceCurrency: 'USD' };
  if (period) offer.eligibleDuration = { '@type': 'QuantitativeValue', unitCode: period === 'P1Y' ? 'ANN' : 'MON' };
  return offer;
}

function jsonLd(id, data) {
  return (
    <script
      key={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function StructuredData() {
  const { free, pro } = SITE.pricing;

  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Lifting Lab',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    description: 'Lifting Lab programs your cycle, analyzes your lifts frame by frame, tells you why it missed, and gets you through meet day. Built for one sport: the snatch and the clean & jerk.',
    url: 'https://liftinglab.app/',
    // Same reasoning as AppStoreButton (Chrome.jsx): don't tell Google there
    // are live purchasable offers for an app that isn't in the App Store
    // yet. Google can surface `offers` as a price rich result, which would
    // be as misleading pre-release as showing the real download badge.
    ...(SITE.released && {
      offers: [
        { ...priceToOffer(free.price), name: free.name },
        { ...priceToOffer(pro.monthly), name: pro.name },
      ],
    }),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  // Address matches legal/privacy-policy.md's Company Information section.
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Better Built Apps LLC',
    url: 'https://liftinglab.app/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7901 4th St N STE 300',
      addressLocality: 'St. Petersburg',
      addressRegion: 'FL',
      postalCode: '33702',
      addressCountry: 'US',
    },
  };

  return (
    <>
      {jsonLd('ld-software', softwareApplication)}
      {jsonLd('ld-faq', faqPage)}
      {jsonLd('ld-org', organization)}
    </>
  );
}
