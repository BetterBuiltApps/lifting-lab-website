/**
 * PhaseBreakdownCard — the five lift phases as a duration-proportional bar plus
 * one row each with peak velocity and duration, closing with the
 * transition-loss insight sentence.
 *
 * @startingPoint section="Bar Trace" subtitle="Proportional phase timeline + per-phase stats" viewport="700x260"
 */
export interface PhaseTimelinePhase {
  kind: 'firstPull' | 'transition' | 'secondPull' | 'turnover' | 'catch';
  label: string;
  /** seconds */
  duration: number;
  /** m/s; hidden below 0.05 */
  peakVelocity?: number;
}
export interface PhaseTimelineProps {
  phases?: PhaseTimelinePhase[];
  /** The one-sentence takeaway, e.g. "Smooth transition — only 8% velocity loss." */
  insight?: string;
  /** caution turns the insight amber (>25% velocity loss) */
  insightTone?: 'secondary' | 'caution';
  style?: React.CSSProperties;
}
export declare function PhaseTimeline(props: PhaseTimelineProps): JSX.Element;
export declare const PHASE_COLORS: Record<string, string>;
