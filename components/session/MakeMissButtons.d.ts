/**
 * The set-logging pair: full-width green Made and red Miss, 56pt tall (the app's
 * deliberate "chalky hands" size) with a spring scale-pop on press.
 *
 * @startingPoint section="Session" subtitle="Made / Miss set logging" viewport="700x120"
 */
export interface MakeMissButtonsProps {
  onMade?: () => void;
  onMiss?: () => void;
  style?: React.CSSProperties;
}
export declare function MakeMissButtons(props: MakeMissButtonsProps): JSX.Element;
