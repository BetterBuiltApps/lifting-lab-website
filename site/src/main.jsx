import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import './styles.css';

import { SiteNav } from './sections/Chrome';
import { Hero } from './sections/Hero';
import { Arc } from './sections/Arc';
import { Engine } from './sections/Engine';
import { Explore } from './sections/Explore';
import { Progress } from './sections/Progress';
import { LogBook } from './sections/LogBook';
import { Pricing } from './sections/Pricing';
import { FAQ, SiteFooter } from './sections/FAQFooter';
import { Contact } from './sections/Contact';
import { StructuredData } from './lib/StructuredData';
import { LightboxProvider } from './lib/Lightbox';

function App() {
  return (
    <LightboxProvider>
      <StructuredData />
      {/* First thing in the tab order. The nav is sticky and the page is one
          long scroll, so without this a keyboard user tabs the whole nav on
          every visit. Visually hidden until focused, see .skip-link. */}
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      {/* Order is the argument: follow one cycle from twelve weeks out to the
          platform (Arc), then reveal the engine that was shaping every one of
          those sessions underneath (Engine), then everything that outlasts
          a single meet (LogBook, Progress), then the index of the rest
          (Explore). Pricing and FAQ close because they answer questions the
          page has by then earned the right to be asked. Contact is last for
          the same reason: it is the one question the FAQ could not answer,
          and asking for a message before the page has made its case is
          asking a stranger for their email. */}
      <main id="main">
        <Hero />
        <Arc />
        <Engine />
        <LogBook />
        <Progress />
        <Explore />
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
