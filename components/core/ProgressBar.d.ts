/**
 * JuicyProgressBar, a capsule track on the elevated surface with an
 * amber→green gradient fill that springs (never jumps) to its new value.
 */
export interface ProgressBarProps {
  /** 0…1 */
  progress?: number;
  /** 8 default; 6 for the score sub-bars */
  height?: number;
  gradient?: 'progress' | 'amber';
  style?: React.CSSProperties;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
