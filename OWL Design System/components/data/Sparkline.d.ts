/**
 * SparklineView — a 2px amber line for PR progress, oldest value first. With
 * fewer than two values it draws a dashed decorative-grey flat line rather than
 * a misleading trend.
 */
export interface SparklineProps {
  /** oldest → newest */
  values?: number[];
  color?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}
export declare function Sparkline(props: SparklineProps): JSX.Element;
