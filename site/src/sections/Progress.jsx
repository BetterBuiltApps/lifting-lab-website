import React from 'react';
import { owlSiteWrap, SiteHead, Shot } from './Chrome';
import { asset } from '../lib/asset';

export function Progress() {
  return (
    <section id="progress" style={{
      background: 'radial-gradient(80% 100% at 88% 10%, rgba(245,166,35,0.10), transparent 60%), var(--surface)',
      padding: 'clamp(60px,7vw,110px) 0',
    }}>
      <div style={{ ...owlSiteWrap, display: 'grid', gap: 'clamp(40px,5vw,64px)' }}>
        <SiteHead center eyebrow="Progress" title="Every session counts for something." max={680}
          body="Levels and streaks built from your actual training — sessions finished, sets made, tonnage moved, PRs set, weeks run perfectly. Badges unlock for real milestones across strength, Sinclair, programs completed, and lifts analyzed. No fake points: it's computed straight from your log, so your history counts from day one." />
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 'clamp(28px,4vw,60px)', alignItems: 'center' }} className="split">
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center' }}>
            <Shot src={asset('assets/screens/27-progress-levels-xp-badges.png')} alt="Level ring and streak, computed from real training" width={240} />
            <Shot src={asset('assets/screens/28-badges-grid-full.png')} alt="Badge grid: unlocked in full color, locked desaturated" width={240} />
          </div>
          <div style={{ display: 'grid', gap: 18, justifyItems: 'center' }}>
            <Shot src={asset('assets/screens/29-badge-detail-first-blood.png')} alt="Badge unlocked share card" width={260} />
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>Shareable, one tap</span>
          </div>
        </div>
      </div>
    </section>
  );
}
