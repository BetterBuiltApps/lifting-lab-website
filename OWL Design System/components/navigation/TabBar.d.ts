/**
 * The app's root navigation: three tabs — Train, Tools, Me — on a blurred
 * translucent bar with a hairline top edge. The selected tab is amber; the rest
 * are the decorative grey.
 *
 * @startingPoint section="Navigation" subtitle="Train / Tools / Me tab bar" viewport="393x110"
 */
export interface TabBarTab { id: string; label: string; icon: string }
export interface TabBarProps {
  active?: string;
  /** Defaults to the app's real three tabs; the Meet module lives inside Tools */
  tabs?: TabBarTab[];
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
export declare function TabBar(props: TabBarProps): JSX.Element;
