import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import './styles.css';

import { SiteNav } from './sections/Chrome';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Pillars } from './sections/Pillars';
import { Explore } from './sections/Explore';
import { FixMyMiss, MeetDay } from './sections/Spotlight';
import { Progress } from './sections/Progress';
import { LogBook } from './sections/LogBook';
import { Pricing } from './sections/Pricing';
import { FAQ, SiteFooter } from './sections/FAQFooter';

function App() {
  return (
    <>
      {/* First thing in the tab order. The nav is sticky and the page is one
          long scroll, so without this a keyboard user tabs the whole nav on
          every visit. Visually hidden until focused — see .skip-link. */}
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      <main id="main">
        <Hero />
        <Problem />
        <Pillars />
        <Explore />
        <FixMyMiss />
        <MeetDay />
        <Progress />
        <LogBook />
        <Pricing />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </React.StrictMode>
);
