/* The arc: twelve weeks out to the platform.
 *
 * This is the page's spine and the reason the old alternating text/screenshot
 * rows are gone. Each station sits at a real position on a week axis, and the
 * axis is calibrated rather than evocative, the markers are the actual weeks a
 * cycle runs, so a lifter reads position, not decoration.
 *
 * Density is the structural device. A station near -12w is wide and calm
 * because that is what twelve weeks out feels like; -1w is a tight numeric
 * column; meet day is high-contrast and urgent. Four sections that alternate
 * left/right at identical weight cannot do that, which is why they didn't.
 *
 * Motion is one orchestrated moment for the whole arc, the axis marker tracks
 * the station you are reading, rather than the same fade-up fired ten times.
 */
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { siteWrap, Shot } from './Chrome';
import { asset } from '../lib/asset';
import { DURATION, EASE } from '../lib/motion';

/* `week` is the real position on the axis, and it is what drives spacing, the
 * rail is measured, not evenly divided. 12 to 8 is four weeks and gets four
 * weeks of rail; 1 to 0 is one week and gets one. Equal gaps for unequal
 * intervals would make this an evocative timeline, which is the thing the
 * calibration discipline exists to refuse. */
export const STATIONS = [
  { id: 'cycle', week: 12, unit: 'weeks out', label: 'The cycle' },
  { id: 'daily', week: 8, unit: 'weeks out', label: 'Any given day' },
  { id: 'miss', week: 4, unit: 'weeks out', label: 'The miss' },
  { id: 'peak', week: 1, unit: 'week out', label: 'Peak' },
  { id: 'platform', week: 0, unit: 'meet day', label: 'The platform' },
];

/** Rail length for the interval below each station, in px per week.
 *
 *  The scale has to clear the label's own height, or the labels set the spacing
 *  instead of the weeks and the axis is decorative again: at 13px/week with a
 *  two-line label block, a three-week interval measured 1.5x a one-week one.
 *  The labels are single-line and absolutely positioned now, so they add no
 *  height, and 22px/week clears a ~20px line, which makes mark-to-mark
 *  distance exactly proportional to the weeks between them.
 *
 *  The horizontal spine in the hero needs a wider scale because labels are much
 *  wider than they are tall; 40px/week clears the longest one. */
export const WEEK_PX = 22;
export const HERO_WEEK_PX = 40;
export const gapAfter = (i, perWeek = WEEK_PX) =>
  i < STATIONS.length - 1 ? (STATIONS[i].week - STATIONS[i + 1].week) * perWeek : 0;

/* Tracks which station is being read and reports it upward. IntersectionObserver
 * rather than a scroll handler: no per-frame work, and it degrades to "first
 * station lit" if the API is unavailable rather than to a broken rail. */
function useActiveStation() {
  const [active, setActive] = React.useState(STATIONS[0].id);
  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(e.target.id, e.intersectionRatio);
        let best = null;
        for (const s of STATIONS) {
          const r = seen.get(s.id) || 0;
          if (!best || r > best.r) best = { id: s.id, r };
        }
        if (best && best.r > 0) setActive(best.id);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-20% 0px -35% 0px' }
    );
    for (const s of STATIONS) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);
  return active;
}

/** The calibrated axis. Sticky on desktop, where there is room beside the
 *  content; on narrow screens each station carries its own marker instead and
 *  this is hidden, because a rail competing with content on a phone is chrome. */
function Axis({ active }) {
  const reduced = useReducedMotion();
  return (
    <nav className="arc-axis" aria-label="Training cycle">
      <ol className="arc-axis-list">
        {STATIONS.map((s, i) => {
          const on = s.id === active;
          return (
            <li key={s.id} className="arc-axis-item" style={{ '--gap-after': `${gapAfter(i)}px` }}>
              <a href={`#${s.id}`} aria-current={on ? 'step' : undefined} className="arc-axis-link">
                <span className="arc-axis-tick" data-on={on || undefined}>
                  {on && (
                    <motion.span
                      className="arc-axis-dot"
                      layoutId="arc-marker"
                      transition={reduced ? { duration: 0 } : { duration: DURATION.spring, ease: EASE.spring }}
                    />
                  )}
                </span>
                <span className="arc-axis-mark owl-numeric">{s.week}</span>
                <span className="arc-axis-label">{s.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Every station's shared shell: the id the axis observes, and the marker that
 *  carries the week on small screens where the rail is hidden. */
function Station({ id, week, unit, title, children, className = '', ...rest }) {
  return (
    <section id={id} className={`arc-station ${className}`} aria-labelledby={`${id}-title`} {...rest}>
      <p className="arc-station-mark">
        <span className="arc-station-mark-num owl-numeric">{week}</span>
        <span className="arc-station-mark-unit">{unit}</span>
      </p>
      <h2 id={`${id}-title`} className="arc-station-title">{title}</h2>
      {children}
    </section>
  );
}

/* An authored snatch bar path, drawn in the app's own phase palette.
 *
 * Product-true rather than decorative: the bar really does travel back toward
 * the lifter off the floor, loop forward through the second pull, and settle
 * back under the body, and the app really does split the trace into these five
 * phases in these colours. It draws itself once when scrolled to, the trace
 * leaving visible evidence of motion, which is the whole claim of the feature
 * this station is about. */
function BarPathTrace() {
  const reduced = useReducedMotion();
  const phases = [
    { d: 'M92,300 C88,270 84,244 82,214', stroke: 'var(--phase-first-pull)' },
    { d: 'M82,214 C81,196 84,180 92,166', stroke: 'var(--phase-transition)' },
    { d: 'M92,166 C102,146 112,120 110,92', stroke: 'var(--phase-second-pull)' },
    { d: 'M110,92 C108,72 98,58 84,50', stroke: 'var(--phase-turnover)' },
    { d: 'M84,50 C74,45 66,44 60,46', stroke: 'var(--phase-catch)' },
  ];
  return (
    <svg className="arc-trace" viewBox="0 0 180 340" role="img"
         aria-label="A snatch bar path, split into its five phases: first pull, transition, second pull, turnover, catch.">
      <line x1="60" y1="20" x2="60" y2="320" className="arc-trace-plumb" />
      {phases.map((p, i) => (
        <motion.path
          key={p.stroke}
          d={p.d}
          fill="none"
          stroke={p.stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={reduced ? { duration: 0 } : { duration: 0.5, delay: 0.12 * i, ease: EASE.spring }}
        />
      ))}
    </svg>
  );
}

export function Arc() {
  const active = useActiveStation();
  return (
    <div className="arc" style={siteWrap}>
      <Axis active={active} />

      <div className="arc-stations">
        {/* -12w, wide and calm. One screenshot, large, plenty of air. */}
        <Station id="cycle" week={12} unit="weeks out" title="A cycle built off your real numbers."
                 className="arc-station--wide">
          <div className="arc-row">
            <p className="arc-lede">
              Technique, strength, specification, peak, and masters cycles, periodized off your actual
              PRs, not a generic percentage table. Every set arrives with target weight, percentage, and
              plates already loaded. Miss a session and Lifting Lab reschedules it, no guilt trip.
            </p>
            <div className="arc-figure">
              <Shot src={asset('assets/screens/02-programs-list.png')}
                    alt="Programs list: five periodized cycles" width={260} />
            </div>
          </div>
        </Station>

        {/* -8w, the transformation pair: what you tell it, what you get back. */}
        <Station id="daily" week={8} unit="weeks out" title="Tell it how you feel. It builds the day."
                 className="arc-station--pair">
          <p className="arc-lede">
            Energy, soreness, your equipment, the time you have. Lifting Lab builds the session around
            it: the right lift for today's rotation, strength work that avoids what's sore, accessories
            that balance the day. Then it's yours to reorder, swap, or dial up or down.
          </p>
          <p className="arc-lede arc-lede--quiet">
            Open the app on any day and it already knows: an unfinished session waiting to resume, the
            week at a glance, and a flag the moment the same technique fault shows up twice.
          </p>
          <div className="arc-pair">
            <figure className="arc-pair-half">
              <Shot src={asset('assets/screens/08-readiness-checkin.png')}
                    alt="Check-in: energy, sore muscles to avoid, and what you're training today" width={260} />
              <figcaption className="arc-pair-cap">What you tell it</figcaption>
            </figure>
            <div className="arc-pair-arrow" aria-hidden="true">
              <svg viewBox="0 0 40 12" focusable="false"><path d="M0 6h34M28 1l6 5-6 5" /></svg>
            </div>
            <figure className="arc-pair-half">
              <Shot src={asset('assets/screens/11-session-hub.png')}
                    alt="A custom workout put together: four blocks, set counts, and volume and intensity dialed in" width={260} />
              <figcaption className="arc-pair-cap">What you get back</figcaption>
            </figure>
          </div>
        </Station>

        {/* -4w, the signature station. Darkest, tightest, the trace as hero. */}
        <Station id="miss" week={4} unit="weeks out" title="It missed. Here's where it went."
                 className="arc-station--dark">
          <div className="arc-miss">
            <div className="arc-miss-trace">
              <BarPathTrace />
              <p className="arc-trace-key">
                <span data-phase="first-pull">First pull</span>
                <span data-phase="transition">Transition</span>
                <span data-phase="second-pull">Second pull</span>
                <span data-phase="turnover">Turnover</span>
                <span data-phase="catch">Catch</span>
              </p>
            </div>
            <div className="arc-miss-body">
              <p className="arc-lede">
                Film a set on your phone. Lifting Lab plots the bar path, splits it into five phases,
                and shows you where it drifts, no sensor, no pairing. Compare today's snatch against
                your best one, at true scale.
              </p>
              <p className="arc-lede arc-lede--quiet">
                And when the tracking isn't clean, it says so and shows the evidence, rather than
                handing you a number it can't stand behind.
              </p>
              <div className="arc-miss-shots">
                <Shot src={asset('assets/screens/15b-bar-trace-live-metrics.png')}
                      alt="Bar Trace metrics: peak speed, mean pull speed, bar height" width={260} />
                <Shot src={asset('assets/screens/33-technique-doctor-list.png')}
                      alt="Technique Doctor: say where the lift went wrong" width={260} />
                <Shot src={asset('assets/screens/34-technique-doctor-detail.png')}
                      alt="Technique Doctor: likely causes and corrective drills" width={260} />
              </div>
            </div>
          </div>
        </Station>

        {/* -1w, deliberately dense and numeric after the dark, open station above. */}
        <Station id="peak" week={1} unit="week out" title="The week the numbers matter."
                 className="arc-station--dense">
          <div className="arc-dense">
            <div className="arc-row">
              <div>
                {/* No weight-class records here. Measuring a lifter against the
                    world best is not what motivates anyone in a taper week; the
                    numbers that matter are their own, moving. */}
                <p className="arc-lede">
                  Taper week is arithmetic. Lifting Lab carries the maths the sport actually runs on,
                  worked against your lifts rather than a table.
                </p>
                <dl className="arc-facts">
                  <div><dt>Sinclair</dt><dd>Your total, scored across bodyweights</dd></div>
                  <div><dt>Openers</dt><dd>A first attempt you will make, not one you hope for</dd></div>
                  <div><dt>Prilepin</dt><dd>Rep and intensity ranges per block</dd></div>
                  <div><dt>Plate math</dt><dd>Loaded for your gym's actual inventory</dd></div>
                  <div><dt>Warm-up ramps</dt><dd>Jumps shaped the way a coach would set them</dd></div>
                  <div><dt>Your own history</dt><dd>Every number above, against what you lifted last cycle</dd></div>
                </dl>
              </div>
              <div className="arc-dense-shots">
                <Shot src={asset('assets/screens/21-sinclair.png')} alt="Sinclair score calculator" width={260} />
                <Shot src={asset('assets/screens/17-barbell-loader.png')} alt="Barbell loader: plate math for your gym" width={260} />
              </div>
            </div>
          </div>
        </Station>

        {/* 0, the close. Highest contrast on the page; the arc ends here. */}
        <Station id="platform" week={0} unit="meet day" title="The warm-up room runs on attempts, not the clock."
                 className="arc-station--close">
          <div className="arc-row">
            <p className="arc-lede">
              Lifting Lab counts your warm-ups, tells you when to take the next one, and tracks your six
              attempts on the board. Openers you'll make. Totals you'll keep. Nobody explains the
              warm-up room. This does.
            </p>
            <div className="arc-close-shots">
              <Shot src={asset('assets/screens/24-meet-day-warmup-room.png')}
                    alt="Meet Day: the warm-up room, counted in attempts" width={260} />
              <Shot src={asset('assets/screens/25-meet-day-attempt-board.png')}
                    alt="Meet Day: the six-attempt board" width={260} />
            </div>
          </div>
        </Station>
      </div>
    </div>
  );
}
