/**
 * The tracking-honesty card — the single most brand-defining component in Lifting Lab.
 * Never hide a weak result: state the verdict, show the raw evidence, and say
 * plainly what it means for the numbers and what to change next time.
 *
 * @startingPoint section="Feedback" subtitle="Tracking quality + honest note" viewport="700x200"
 */
export interface TrackingQualityProps {
  quality?: 'good' | 'fair' | 'poor';
  /** The raw numbers behind the verdict, e.g. "41% frames · conf 0.73" */
  evidence?: string;
  /** One or two sentences: what it means, then what to do */
  note?: string;
  style?: React.CSSProperties;
}
export declare function TrackingQuality(props: TrackingQualityProps): JSX.Element;

/**
 * The prose verdict card above the tracking note. Its heading is sentence case
 * and secondary — quieter than a SectionLabel on purpose.
 */
export interface TraceVerdictProps {
  heading?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function TraceVerdict(props: TraceVerdictProps): JSX.Element;
