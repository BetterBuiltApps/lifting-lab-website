import React from 'react';
import ReactDOM from 'react-dom/client';
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
      <SiteNav />
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
      <SiteFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
