import React from 'react';
import { motion } from 'motion/react';
import { owlSiteWrap, SiteHead, Shot } from './Chrome';
import { asset } from '../lib/asset';
import { slideFade, staggerContainer, VIEWPORT_ONCE } from '../lib/motion';

const leftVariant = slideFade('left', 24);
const rightVariant = slideFade('right', 24);

export function FixMyMiss() {
  return (
    <section id="fix-my-miss" style={{
      background: 'radial-gradient(90% 120% at 12% 50%, rgba(255,59,48,0.12), transparent 60%), var(--surface)',
      padding: 'clamp(60px,7vw,110px) 0',
    }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        variants={staggerContainer(0.08)}
        style={{ ...owlSiteWrap, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 'clamp(28px,4vw,60px)', alignItems: 'center' }} className="split"
      >
        <motion.div variants={leftVariant} style={{ display: 'grid', gap: 22 }}>
          <SiteHead eyebrow="Fix My Miss" accent="var(--miss)" title="Missed it? Say where." max={520}
            body="One tap after a miss — in front, behind, soft elbows, crashed on the shoulders — and OWL gives you the likely causes, the drills that fix them, and a cue to take into the next set. It's the conversation you'd have with a coach standing three metres away." />
        </motion.div>
        <motion.div variants={rightVariant} className="shot-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 18, justifyContent: 'center', justifyItems: 'center' }}>
          <Shot src={asset('assets/screens/33-technique-doctor-list.png')} alt="Fix My Miss: select where the lift went wrong" width={230} />
          <Shot src={asset('assets/screens/34-technique-doctor-detail.png')} alt="Fix My Miss: likely causes and corrective drills" width={230} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export function MeetDay() {
  return (
    <section id="meet-day" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        variants={staggerContainer(0.08)}
        style={{ ...owlSiteWrap, display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)', gap: 'clamp(28px,4vw,60px)', alignItems: 'center' }} className="split"
      >
        <motion.div variants={leftVariant} className="shot-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 18, justifyContent: 'center', justifyItems: 'center' }}>
          <Shot src={asset('assets/screens/24-meet-day-warmup-room.png')} alt="Meet Day: warm-up room, attempts not the clock" width={230} />
          <Shot src={asset('assets/screens/25-meet-day-attempt-board.png')} alt="Meet Day: six-attempt board" width={230} />
        </motion.div>
        <motion.div variants={rightVariant} style={{ display: 'grid', gap: 22 }}>
          <SiteHead eyebrow="Meet Day" title="Your first meet, handled." max={520}
            body="The warm-up room runs on attempts, not the clock. OWL counts them for you, tells you when to take your next warm-up, holds you in a pattern when the count stretches, and tracks your six attempts on the board. Openers you'll make. Totals you'll keep." />
        </motion.div>
      </motion.div>
    </section>
  );
}
