/**
 * Icon wrapper. INTENTIONAL ADDITION, the app has no Icon component because
 * SwiftUI renders SF Symbols inline; the web needs a stand-in, so this inlines
 * a Lucide SVG that inherits `color` and renders in any serializing renderer.
 */
export interface IconProps {
  /** Lucide icon name, e.g. "flame", "trophy", "dumbbell" */
  name: string;
  size?: number;
  /** Any CSS color; defaults to currentColor */
  color?: string;
  /** Lucide's default is 2, raise to 2.5 to sit closer to SF Symbols' filled weight */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
