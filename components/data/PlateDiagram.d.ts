/**
 * PlateDiagramView, one side of a loaded barbell, drawn to scale-ish in IWF
 * competition colors: shaft, inner collar, then plates largest-to-smallest
 * outward. Renders "EMPTY BAR" when nothing is loaded.
 *
 * @startingPoint section="Data" subtitle="IWF-colored barbell loading diagram" viewport="700x180"
 */
export interface PlateStack { kg: number; count: number }
export interface PlateDiagramProps {
  /** largest first, e.g. [{kg:25,count:2},{kg:5,count:1}] */
  perSide?: PlateStack[];
  height?: number;
  style?: React.CSSProperties;
}
export declare function PlateDiagram(props: PlateDiagramProps): JSX.Element;
