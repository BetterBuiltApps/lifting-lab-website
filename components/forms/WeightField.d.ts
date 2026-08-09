/**
 * The app's only text input: a label on the left, a right-aligned numeric value,
 * and a unit suffix. No box, no border, the row itself is the field. Weights
 * are stored in kg and displayed in the athlete's unit.
 */
export interface WeightFieldProps {
  title: string;
  value: string | number;
  /** "kg" | "lb" | any unit string (NumericRow behaviour) */
  unit?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function WeightField(props: WeightFieldProps): JSX.Element;
