/**
 * A rounded number over an uppercase caption on a 14px-padded card. Three
 * `medium` cards side by side is the dashboard week-stats strip; four `large`
 * cards in a 2×2 is the Bar Trace metrics grid.
 *
 * @startingPoint section="Data" subtitle="Week stats strip unit" viewport="700x120"
 */
export interface StatCardProps {
  value: string;
  label: string;
  /** Amber only when the value is the point of the card (e.g. peak speed) */
  accent?: string;
  /** medium = 28px stat strip, large = 40px Bar Trace metrics grid */
  size?: 'medium' | 'large';
  style?: React.CSSProperties;
}
export declare function StatCard(props: StatCardProps): JSX.Element;
