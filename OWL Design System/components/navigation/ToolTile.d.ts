/**
 * The Tools-hub grid tile: an amber glyph pinned top-left, the tool name, and a
 * two-line-reserved caption. 120pt minimum height so a 2-up grid stays even.
 *
 * @startingPoint section="Navigation" subtitle="Tools hub grid tile" viewport="700x160"
 */
export interface ToolTileProps {
  title: string;
  subtitle: string;
  /** Lucide icon name */
  icon?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function ToolTile(props: ToolTileProps): JSX.Element;
