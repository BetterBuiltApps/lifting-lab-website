/**
 * The app's only container surface (bpCard): #232323 fill, 16px continuous
 * corners, no border and no shadow. Depth comes from the surface step, never
 * from a shadow.
 *
 * @startingPoint section="Core" subtitle="The #232323 card surface" viewport="700x160"
 */
export interface CardProps {
  /** 16 default, 14 for compact/stat cards, 12 for chips */
  padding?: number;
  /** card = 16px radius, row = 12px radius (list rows, phase cards) */
  radius?: 'card' | 'row';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
