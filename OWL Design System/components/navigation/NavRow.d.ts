/**
 * The standard list row (analysis rows, next-session card, history entries):
 * 14px padding, 12px radius, leading amber glyph, title over caption, and a
 * trailing accessory slot before the decorative chevron.
 *
 * @startingPoint section="Navigation" subtitle="Standard list row with accessory" viewport="700x200"
 */
export interface NavRowProps {
  title: string;
  caption?: string;
  /** Lucide icon name */
  icon?: string;
  /** Badges, metric readouts, status glyphs — rendered before the chevron */
  accessory?: React.ReactNode;
  chevron?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function NavRow(props: NavRowProps): JSX.Element;
