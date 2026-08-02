/**
 * OWL's primary button. Amber fill with a black label; `gradient` for the
 * session CTA; `make`/`miss` for set logging.
 *
 * @startingPoint section="Core" subtitle="Amber CTA, make/miss, gradient, plain" viewport="700x180"
 */
export interface ButtonProps {
  variant?: 'primary' | 'gradient' | 'make' | 'miss' | 'secondary' | 'plain';
  /** large = 52pt session CTA, medium = 48pt capture button, small = 36pt inline link */
  size?: 'large' | 'medium' | 'small';
  full?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export declare function Button(props: ButtonProps): JSX.Element;
