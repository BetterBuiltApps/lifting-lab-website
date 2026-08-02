/**
 * VelocityChartCard — bar speed across the lift, colored by phase, with a
 * playhead. It is also a scrubber: pointer down or drag anywhere seeks the
 * player to that moment.
 *
 * @startingPoint section="Bar Trace" subtitle="Phase-colored velocity graph + playhead" viewport="700x230"
 */
export interface VelocitySample { time: number; velocity: number }
export interface VelocityPhase { kind: string; start: number; end: number }
export interface VelocityChartProps {
  samples?: VelocitySample[];
  /** Omit for a single amber line */
  phases?: VelocityPhase[];
  currentTime?: number;
  height?: number;
  onSeek?: (time: number) => void;
  style?: React.CSSProperties;
}
export declare function VelocityChart(props: VelocityChartProps): JSX.Element;
