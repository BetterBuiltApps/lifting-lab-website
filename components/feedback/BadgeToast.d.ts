/**
 * The only floating element in the app: a capsule toast on the elevated surface
 * with an amber hairline and a soft black shadow, springing in from the top and
 * auto-dismissing after ~2.5s.
 *
 * @startingPoint section="Feedback" subtitle="Mid-session badge unlock toast" viewport="700x120"
 */
export interface BadgeToastProps {
  title: string;
  /** Lucide icon name */
  icon?: string;
  /** Overline text; defaults to "Badge unlocked" */
  label?: string;
  style?: React.CSSProperties;
}
export declare function BadgeToast(props: BadgeToastProps): JSX.Element;
