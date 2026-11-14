import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import './styles.css';

import { SiteNav } from './sections/Chrome';
import { Hero } from './sections/Hero';
import { Arc } from './sections/Arc';
import { Engine } from './sections/Engine';
import { Watch } from './sections/Watch';
import { Record } from './sections/Record';
import { ProofStrip, DownloadRow } from './sections/Conversion';
import { Pricing } from './sections/Pricing';
import { FAQ, SiteFooter } from './sections/FAQFooter';
import { Contact } from './sections/Contact';
import { StructuredData } from './lib/StructuredData';
import { LightboxProvider } from './lib/Lightbox';
import { scrollToHashOnLoad } from './lib/hashScroll';

function App() {
  return (
    <LightboxProvider>
      <StructuredData />
      {/* First thing in the tab order. The nav is sticky and the page is one
          long scroll, so without this a keyboard user tabs the whole nav on
          every visit. Visually hidden until focused, see .skip-link. */}
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      {/* Order is the argument: the promise and the overview video first (Hero), then proof straight away (ProofStrip), then every
          area on video (Watch), then the cycle from twelve weeks out to the platform (Arc), the engine that shapes every session
          (Engine) and the record it leaves (Record). A download ask follows each stretch. Pricing and FAQ close because they
          answer questions the page has by then earned the right to be asked. Contact is last for the same reason. */}
      <main id="main">
        <Hero />
        <ProofStrip />
        <Watch />
        <DownloadRow title="Seen enough? Try it." />
        <Arc />
        <Engine />
        <Record />
        <DownloadRow />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </LightboxProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </React.StrictMode>
);

scrollToHashOnLoad();
