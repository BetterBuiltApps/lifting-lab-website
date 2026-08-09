/**
 * The 10px green / amber / red dot on strength-ratio and readiness rows.
 * `none` renders the decorative grey, used when a ratio can't be computed.
 */
export interface StatusDotProps {
  status?: 'good' | 'caution' | 'imbalanced' | 'none';
  size?: number;
  style?: React.CSSProperties;
}
export declare function StatusDot(props: StatusDotProps): JSX.Element;
