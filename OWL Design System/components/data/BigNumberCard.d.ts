/**
 * The calculator result display: a 60px heavy amber number, a secondary unit on
 * the same baseline, and an optional caption. Used by Sinclair, 1RM, Robi.
 *
 * @startingPoint section="Data" subtitle="Calculator result readout" viewport="700x220"
 */
export interface BigNumberCardProps {
  number: string;
  unit?: string;
  caption?: string;
  accent?: string;
  style?: React.CSSProperties;
}
export declare function BigNumberCard(props: BigNumberCardProps): JSX.Element;
