import React from 'react';
import { siteWrap, DownloadButton } from './Chrome';
import { Reveal } from '../lib/Reveal';

/* The proof strip: five true facts straight under the hero, each one something the app does today and the rest of the page
   shows. Facts only, no ratings, user counts or testimonials (MARKETING-GUIDE rule 7). Pro is never described as free. */
const FACTS = [
  ['No account', 'No signup. Just lift.'],
  ['On your phone', 'Video analysis never leaves the device.'],
  ['Free to start', 'Logging, Beginner Foundation, every calculator.'],
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

/* One ask, repeated after each stretch of the page: a plain download button (DownloadButton, store link for the visitor's
   device) and the offer line. It is a button, not Apple's badge: the badge appears in the hero and Pricing only. It never
   says Pro is free: only the download is. */
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
            <DownloadButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
