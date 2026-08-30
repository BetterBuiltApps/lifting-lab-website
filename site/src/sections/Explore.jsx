import React from 'react';
import { motion } from 'motion/react';
import { siteWrap, SiteHead, Shot } from './Chrome';
import { asset } from '../lib/asset';
import { DURATION, EASE } from '../lib/motion';
import { Reveal } from '../lib/Reveal';

const EXPLORE_GROUPS = [
  { g: 'Train', items: [
    { k: 'pr', label: 'PR tracker', body: 'Every 1-rep max, logged the moment you hit it.', src: 'assets/screens/03-pr-tracker.png' },
    { k: 'chart', label: 'Progress charts', body: 'Snatch, clean & jerk, and every accessory, charted over time.', src: 'assets/screens/04-exercise-progress-chart-snatch.png' },
    { k: 'warmup', label: 'Warm-up ramps', body: 'Raise, potentiate, ramp, sets built the way a coach would jump you, or set up your own routine and save it for next time.', src: 'assets/screens/09-warmup-routine-editor.png' },
  ] },
  { g: 'Learn', items: [
    { k: 'library', label: 'Exercise library', body: 'Illustrated library for every lift and accessory.', src: 'assets/screens/05-exercise-library.png' },
    { k: 'detail', label: 'Lift detail', body: 'Cues, video, and common faults for the snatch.', src: 'assets/screens/06-exercise-detail-snatch.png' },
  ] },
  { g: 'Calculate', items: [
    { k: '1rm', label: '1RM estimator', body: 'Estimate a true max without testing it.', src: 'assets/screens/19-1rm-estimator.png' },
    { k: 'ratios', label: 'Strength ratios', body: 'Where your lifts sit relative to each other.', src: 'assets/screens/20-strength-ratios.png' },
  ] },
  { g: 'Setup', items: [
    { k: 'gym', label: 'Gym profile', body: 'Tell Lifting Lab what equipment your gym actually has.', src: 'assets/screens/30-gym-profile-equipment.png' },
    { k: 'integrations', label: 'Integrations', body: 'Finished workouts write to Health as strength training and count toward your Activity rings; Health can feed back heart rate for adaptive rest and your latest bodyweight. Every toggle is optional, and CSV export is there when you want your data out too.', src: 'assets/screens/36-settings-integrations.png' },
  ] },
];

const EXPLORE_FLAT = EXPLORE_GROUPS.flatMap((g) => g.items);

// Clips the inactive thirteen descriptions out of view without removing them
// from the DOM or the accessibility tree, the same "visually hidden" pattern
// as the skip link. `{isActive && <span>…}` used to unmount them instead,
// which meant a crawler that never clicks a tab, everything but Google, and
// even Google only on a deferred pass, saw one feature description instead
// of fourteen.
const offscreenUnlessActive = (isActive) => (isActive ? undefined : {
  position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap',
});

export function Explore() {
  const [active, setActive] = React.useState(EXPLORE_FLAT[0].k);
  const current = EXPLORE_FLAT.find((i) => i.k === active) || EXPLORE_FLAT[0];
  const tabRefs = React.useRef({});

  // Standard vertical-tablist keys. The list is grouped visually, but arrow keys
  // run the flattened order so Down from the last "Train" item lands on the
  // first "Learn" item rather than dead-ending. Paired with roving tabindex
  // below, this keeps the whole widget one Tab stop instead of fourteen.
  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next;
    if (keys[e.key]) {
      const i = EXPLORE_FLAT.findIndex((x) => x.k === active);
      next = EXPLORE_FLAT[(i + keys[e.key] + EXPLORE_FLAT.length) % EXPLORE_FLAT.length];
    } else if (e.key === 'Home') {
      next = EXPLORE_FLAT[0];
    } else if (e.key === 'End') {
      next = EXPLORE_FLAT[EXPLORE_FLAT.length - 1];
    } else {
      return;
    }
    e.preventDefault();
    setActive(next.k);
    tabRefs.current[next.k]?.focus();
  };
  return (
    <section id="explore" style={{ padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={siteWrap}>
        <Reveal>
          <SiteHead title="The rest of it." max={640}
            body="A cycle is the spine, but most of the app is the things you reach for between sets. All of it is free." />
        </Reveal>
        <div style={{ marginTop: 44, '--split-cols': 'minmax(0,1.15fr) minmax(0,0.85fr)', alignItems: 'start' }} className="split">
          {/* The group wrappers are presentational so the tabs stay effective
              children of the tablist, which ARIA requires. The headings are
              visual grouping only, each tab label already stands alone. */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Explore Lifting Lab features"
            onKeyDown={onKeyDown}
            style={{ display: 'grid', gap: 28 }}
          >
            {EXPLORE_GROUPS.map((group) => (
              <div key={group.g} role="presentation" style={{ display: 'grid', gap: 4 }}>
                <div aria-hidden="true" style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 0' }}>{group.g}</div>
                {group.items.map((item) => {
                  const isActive = item.k === active;
                  return (
                    <button
                      key={item.k}
                      ref={(el) => { tabRefs.current[item.k] = el; }}
                      role="tab"
                      id={`explore-tab-${item.k}`}
                      aria-selected={isActive}
                      aria-controls="explore-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActive(item.k)}
                      style={{
                        position: 'relative',
                        display: 'grid', gap: 4, textAlign: 'left', width: '100%', minHeight: 44, cursor: 'pointer',
                        background: 'none', border: 'none',
                        padding: '10px 0 10px 16px', borderRadius: 4,
                        alignContent: 'center',
                      }}
                    >
                      {isActive && (
                        <motion.span
                          aria-hidden="true"
                          layoutId="explore-indicator"
                          transition={{ duration: DURATION.spring, ease: EASE.spring }}
                          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'var(--amber)', borderRadius: 2 }}
                        />
                      )}
                      <span style={{ font: 'var(--type-headline)', fontWeight: 700, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{item.label}</span>
                      <span style={{ font: 'var(--type-subheadline)', color: 'var(--text-secondary)', ...offscreenUnlessActive(isActive) }}>{item.body}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <div
            className="explore-shot-col"
            role="tabpanel"
            id="explore-panel"
            aria-labelledby={`explore-tab-${current.k}`}
          >
            {/* Plain keyed swap, not an AnimatePresence crossfade: wrapping this
                in <AnimatePresence mode="wait"><motion.div key={current.k}>
                never got past the exit phase, so React had the right image
                queued on every render but the DOM stayed frozen on whichever
                one loaded first, no crossfade is better than a tab that looks
                broken. */}
            <Shot key={current.k} src={asset(current.src)} alt={current.label} width={260} />
          </div>
        </div>
      </div>
    </section>
  );
}
