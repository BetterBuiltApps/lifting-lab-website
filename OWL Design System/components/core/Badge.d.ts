/**
 * The capsule chip used for lift-score grade letters, tracking-quality
 * readouts and phase tags: 12px heavy text on a 16%-alpha tint of its own color.
 */
export interface BadgeProps {
  tone?: 'amber' | 'make' | 'miss' | 'neutral';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
