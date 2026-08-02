/**
 * ScoreRingCard — the bar-path quality readout. Amber ring fills to the score,
 * the grade letter sits inside it, and straightness/smoothness show as sub-bars.
 * Pass `total: undefined` for the honest "not enough tracking data" state.
 *
 * @startingPoint section="Bar Trace" subtitle="Lift score ring + sub-scores" viewport="700x180"
 */
export interface ScoreRingProps {
  /** 0…100. Omit to render the ungraded state. */
  total?: number;
  /** Letter grade, e.g. "A", "B+" */
  grade?: string;
  /** 0…1 */
  straightness?: number;
  /** 0…1 */
  smoothness?: number;
  style?: React.CSSProperties;
}
export declare function ScoreRing(props: ScoreRingProps): JSX.Element;
