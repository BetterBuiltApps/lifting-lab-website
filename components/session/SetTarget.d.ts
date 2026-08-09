/**
 * The one-set-at-a-time card: exercise name at 34px heavy with an info glyph,
 * the set count, the coach cue in italic quotes, the target load at 60px heavy
 * amber with its rep suffix, percent of PR, then a hairline, the per-side
 * loading as plain text (`20 + 2.5 + 0.25`), and the Film-this-set pill.
 *
 * @startingPoint section="Session" subtitle="Active-set target card" viewport="700x420"
 */
export interface SetTargetProps {
  exercise: string;
  weight: string;
  /** "kg", the app is kg-native; "lb" only when the athlete opted in */
  unit?: string;
  /** Rep count, rendered as "kg × 2" */
  reps?: number | string;
  /** e.g. "Set 1 of 4" */
  setLabel?: string;
  /** Coach cue, rendered in italic quotes, e.g. "Set the back before you dip" */
  cue?: string;
  /** e.g. "64% of 101kg Snatch" */
  percentOfPR?: string;
  /** Plate maths as text, e.g. "20 + 2.5 + 0.25", NOT a plate diagram here */
  loadPerSide?: string;
  onFilm?: () => void;
  onEditWeight?: () => void;
  style?: React.CSSProperties;
}
export declare function SetTarget(props: SetTargetProps): JSX.Element;
