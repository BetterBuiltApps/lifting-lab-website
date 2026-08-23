import React from 'react';
import { motion } from 'motion/react';
import { siteWrap, SiteHead, Shot } from './Chrome';
import { asset } from '../lib/asset';
import { Reveal } from '../lib/Reveal';
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion';

export function Progress() {
  return (
    <section id="progress" style={{
      background: 'radial-gradient(80% 100% at 88% 10%, rgba(245,166,35,0.10), transparent 60%), var(--surface)',
      padding: 'clamp(60px,7vw,110px) 0',
    }}>
      <div style={{ ...siteWrap, display: 'grid', gap: 'clamp(40px,5vw,64px)' }}>
        <Reveal>
          <SiteHead center title="Every session counts for something." max={680}
            body="Levels and streaks built from real training: sessions finished, sets made, tonnage moved, and PRs set. Badges unlock for real milestones, strength, Sinclair, programs completed, and lifts analyzed. No fake points, it's computed from your log, so your history counts from day one." />
        </Reveal>
        <div className="progress-row">
          <div className="shot-row">
            <Shot src={asset('assets/screens/27-progress-levels-xp-badges.png')} alt="Level ring and streak, computed from real training" width={260} />
            <Shot src={asset('assets/screens/28-badges-grid-full.png')} alt="Badge grid: unlocked in full color, locked desaturated" width={260} />
          </div>
          <div style={{ display: 'grid', justifyItems: 'center' }}>
            <Shot src={asset('assets/screens/29-badge-detail-first-blood.png')} alt="Badge unlocked share card" width={260} />
          </div>
        </div>
      </div>
    </section>
  );
}
