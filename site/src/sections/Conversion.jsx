import React from 'react';
import { siteWrap, AppStoreButton } from './Chrome';
import { Reveal } from '../lib/Reveal';

/* The proof strip: five true facts straight under the hero, each one something the app does today and the rest of the page
   shows. Facts only, no ratings, user counts or testimonials (MARKETING-GUIDE rule 7). The free-analyses line is the real
   allowance (3 a month); Pro is never described as free. */
const FACTS = [
  ['No account', 'No signup. Just lift.'],
  ['On your phone', 'Video analysis never leaves the device.'],
  ['3 a month free', 'Bar Trace analyses, no card.'],
  ['78 movements', 'Every one illustrated.'],
  ['Offline first', 'Train with no signal.'],
];

export function ProofStrip() {
  return (
    <section aria-label="What you get" className="proof-strip">
      <div style={siteWrap}>
        <ul className="proof-list">
          {FACTS.map(([k, v]) => (
            <li key={k} className="proof-item">
              <strong>{k}</strong>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* One ask, repeated after each stretch of the page: the store button for the visitor's device (AppStoreButton picks Google
   Play on Android) and the offer line. It never says Pro is free: only the download is. */
export function DownloadRow({ title = 'Ready to lift?' }) {
  return (
    <section aria-label="Download Lifting Lab" className="download-row">
      <div style={siteWrap}>
        <Reveal>
          <div className="download-row-inner">
            <div>
              <h2 className="download-row-title">{title}</h2>
              <p className="download-row-line">Free to download. No account needed.</p>
            </div>
            <AppStoreButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
