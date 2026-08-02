/**
 * The uppercase 12px rounded-semibold label with 0.8px kerning that heads every
 * grouped block and every stat. Lifting Lab has no other heading style below title.
 * `amber` marks the active program phase ("STRENGTH · ACCUMULATION").
 */
export interface SectionLabelProps {
  tone?: 'secondary' | 'amber' | 'tertiary';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;
