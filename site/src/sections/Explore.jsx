import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { owlSiteWrap, SiteHead, Shot } from './Chrome';
import { asset } from '../lib/asset';
import { DURATION, EASE } from '../lib/motion';
import { Reveal } from '../lib/Reveal';

const EXPLORE_GROUPS = [
  { g: 'Train', items: [
    { k: 'pr', label: 'PR tracker', body: 'Every 1-rep max, logged the moment you hit it.', src: 'assets/screens/03-pr-tracker.png' },
    { k: 'chart', label: 'Progress charts', body: 'Snatch, clean & jerk, and every accessory, charted over time.', src: 'assets/screens/04-exercise-progress-chart-snatch.png' },
    { k: 'warmup', label: 'Warm-up ramps', body: 'Raise, potentiate, ramp — sets built the way a coach would jump you.', src: 'assets/screens/09-warmup-raise-phase.png' },
  ] },
  { g: 'Learn', items: [
    { k: 'library', label: 'Exercise library', body: 'Illustrated library for every lift and accessory.', src: 'assets/screens/05-exercise-library.png' },
    { k: 'detail', label: 'Lift detail', body: 'Cues, video, and common faults for the snatch.', src: 'assets/screens/06-exercise-detail-snatch.png' },
    { k: 'learn', label: 'Learn the Lifts', body: 'Step-by-step breakdowns of the classic lifts.', src: 'assets/screens/07-learn-the-snatch.png' },
  ] },
  { g: 'Calculate', items: [
    { k: '1rm', label: '1RM estimator', body: 'Estimate a true max without testing it.', src: 'assets/screens/19-1rm-estimator.png' },
    { k: 'ratios', label: 'Strength ratios', body: 'Where your lifts sit relative to each other.', src: 'assets/screens/20-strength-ratios.png' },
    { k: 'records', label: 'World records', body: 'IWF records by class, for reference against your own.', src: 'assets/screens/22-world-records.png' },
  ] },
  { g: 'Coach Studio', items: [
    { k: 'editor', label: 'Program editor', body: 'Author a multi-week cycle from scratch.', src: 'assets/screens/31-coach-studio-program-editor.png' },
    { k: 'share', label: 'Share a program', body: 'Send a finished program straight to an athlete.', src: 'assets/screens/32-coach-studio-program-list-share.png' },
  ] },
  { g: 'Setup', items: [
    { k: 'gym', label: 'Gym profile', body: 'Tell OWL what plates and bars your gym actually has.', src: 'assets/screens/30-gym-profile-equipment.png' },
    { k: 'integrations', label: 'Integrations', body: 'HealthKit and CSV export — your data, your call.', src: 'assets/screens/36-settings-integrations.png' },
    { k: 'about', label: 'About the data', body: 'What’s tracked, what’s not, and why.', src: 'assets/screens/37-about-the-data.png' },
  ] },
];

const EXPLORE_FLAT = EXPLORE_GROUPS.flatMap((g) => g.items);

export function Explore() {
  const [active, setActive] = React.useState(EXPLORE_FLAT[0].k);
  const current = EXPLORE_FLAT.find((i) => i.k === active) || EXPLORE_FLAT[0];
  return (
    <section id="explore" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={owlSiteWrap}>
        <Reveal>
          <SiteHead eyebrow="Everything else" title="Every feature, one tap away." max={640}
            body="The pillars above are the headline. Here's the rest of what's in the app." />
        </Reveal>
        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)', gap: 'clamp(28px,4vw,60px)', alignItems: 'start' }} className="split">
          <div style={{ display: 'grid', gap: 28 }}>
            {EXPLORE_GROUPS.map((group) => (
              <div key={group.g} style={{ display: 'grid', gap: 4 }}>
                <div style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 0' }}>{group.g}</div>
                {group.items.map((item) => {
                  const isActive = item.k === active;
                  return (
                    <button key={item.k} onClick={() => setActive(item.k)} style={{
                      position: 'relative',
                      display: 'grid', gap: 4, textAlign: 'left', width: '100%', cursor: 'pointer',
                      background: 'none', border: 'none',
                      padding: '10px 0 10px 16px', borderRadius: 4,
                    }}>
                      {isActive && (
                        <motion.span
                          layoutId="explore-indicator"
                          transition={{ duration: DURATION.spring, ease: EASE.spring }}
                          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'var(--amber)', borderRadius: 2 }}
                        />
                      )}
                      <span style={{ font: 'var(--type-headline)', fontWeight: 700, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{item.label}</span>
                      {isActive && <span style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)' }}>{item.body}</span>}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="explore-shot-col" style={{ position: 'sticky', top: 100, display: 'flex', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.k}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: DURATION.fade, ease: EASE.inOut }}
              >
                <Shot src={asset(current.src)} alt={current.label} width={260} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
