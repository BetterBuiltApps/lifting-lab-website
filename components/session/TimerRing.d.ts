/**
 * The rest-timer ring: a 10px amber arc on the elevated track with a 34px heavy
 * monospaced-digit M:SS readout. Turns green in the countdown endgame (or once a
 * count-up passes its soft reference) and scale-pulses while `pulsing`.
 *
 * @startingPoint section="Session" subtitle="Rest timer ring" viewport="700x220"
 */
export interface TimerRingProps {
  /** 0…1 ring fill */
  progress?: number;
  /** M:SS */
  centerText?: string;
  emphasized?: boolean;
  pulsing?: boolean;
  size?: number;
  style?: React.CSSProperties;
}
export declare function TimerRing(props: TimerRingProps): JSX.Element;
