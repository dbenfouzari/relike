import classNames from "classnames";
import {
  ComponentType,
  CSSProperties,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";
import { createUseStyles } from "react-jss";

import TextOverflow from "../text-overflow";
import TextStyle from "../text-style";
import Typography from "../typography";

/** Defines Text props. */
export interface TextProps {
  /**
   * By default, [Text] renders a `span` element. You can override this using this prop.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  /**
   * If non-null, the style to use for this text.
   */
  style?: TextStyle;
  /**
   * The text to display.
   */
  children: string | ReactNode;
  /**
   * Override styles with this className.
   * Prefer using `style` prop since it's easier.
   *
   * If you thing there is something missing, please open an issue on Github !
   */
  className?: string;
}

/** Defines Text component props without the `as` prop. */
export type TextWithoutAsProps = Omit<TextProps, "as">;

/** Defines props for Text styles */
export interface TextStylesProps {
  /**
   * The TextStyle used for text.
   */
  style: TextStyle;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "Text";

/**
 * Component default props.
 */
const DEFAULT_PROPS: Partial<TextProps> = {};

/**
 * Helper to get CSS overflow property.
 *
 * @param   {TextOverflow}               overflow The TextOverflow.
 * @returns {CSSProperties.textOverflow}          The CSS textOverflow property value.
 * @example
 * getCSSOverflow(TextOverflow.clip) // "hidden"
 */
export const getCSSOverflow = (overflow?: TextOverflow): CSSProperties["textOverflow"] => {
  if (typeof overflow === "undefined") return undefined;

  switch (overflow) {
    case TextOverflow.clip:
      return "hidden";
    case TextOverflow.ellipsis:
      return "ellipsis";
    case TextOverflow.visible:
      return "visible";
    case TextOverflow.fade:
      console.warn("[TextOverflow] - TextOverflow.fade is not yet implemented.");
      return undefined;
  }
};

const useStyles = createUseStyles({
  /**
   * Creates styles for main element.
   *
   * @param   {TextStylesProps} args Used to build the styles.
   * @example
   * elm({ style: Typography.blackMountainView.headline1 })
   * @returns {CSSProperties}        The final styles.
   */
  elm: ({ style }: TextStylesProps) => ({
    backgroundColor: style.backgroundColor?.toRGBA(),
    color: style.color?.toRGBA(),
    fontFamily: style.fontFamily,
    fontSize: style.fontSize ?? 16,
    fontWeight: style.fontWeight,
    letterSpacing: style.letterSpacing,
    lineHeight: style.height,
    overflow: getCSSOverflow(style.overflow),
    // TODO: overflow
    // TODO: shadows
    wordSpacing: style.wordSpacing,
  }),
});

/** Defines Text component */
export type TextComponent = ForwardRefExoticComponent<TextProps & RefAttributes<HTMLHeadingElement>> & {
  /** Defines Text as `h1` with correct style. */
  H1: ComponentType<TextWithoutAsProps>;
  /** Defines Text as `h2` with correct style. */
  H2: ComponentType<TextWithoutAsProps>;
  /** Defines Text as `h3` with correct style. */
  H3: ComponentType<TextWithoutAsProps>;
  /** Defines Text as `h4` with correct style. */
  H4: ComponentType<TextWithoutAsProps>;
  /** Defines Text as `h5` with correct style. */
  H5: ComponentType<TextWithoutAsProps>;
  /** Defines Text as `h6` with correct style. */
  H6: ComponentType<TextWithoutAsProps>;
  /** Defines Text as `span` with correct style. */
  Span: ComponentType<TextWithoutAsProps>;
  /** Defines Text as `p` with correct style. */
  P: ComponentType<TextWithoutAsProps>;
};

export const Text = forwardRef(
  (
    // FIXME: should not use `as TextStyle` since it IS a TextStyle. Check typings.
    {
      as: AsElement = "span",
      style = Typography.blackMountainView.bodyText1 as TextStyle,
      children,
      className,
    }: TextProps,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => {
    const styles = useStyles({ style });

    return (
      <AsElement data-testid="text-elm" ref={ref} className={classNames(styles.elm, className)}>
        {children}
      </AsElement>
    );
  },
) as TextComponent;
Text.displayName = COMPONENT_NAME;
Text.defaultProps = DEFAULT_PROPS;

/**
 * Defines Text as `h1` with correct style.
 *
 * @param   {TextWithoutAsProps} props The props
 * @returns {JSX.Element}              The Text component
 * @example
 * <Text.H1>Example</Text.H1>
 */
Text.H1 = (props) => <Text as="h1" style={Typography.blackMountainView.headline1} {...props} />;
/**
 * Defines Text as `h2` with correct style.
 *
 * @param   {TextWithoutAsProps} props The props
 * @returns {JSX.Element}              The Text component
 * @example
 * <Text.H2>Example</Text.H2>
 */
Text.H2 = (props) => <Text as="h2" style={Typography.blackMountainView.headline2} {...props} />;
/**
 * Defines Text as `h3` with correct style.
 *
 * @param   {TextWithoutAsProps} props The props
 * @returns {JSX.Element}              The Text component
 * @example
 * <Text.H3>Example</Text.H3>
 */
Text.H3 = (props) => <Text as="h3" style={Typography.blackMountainView.headline3} {...props} />;
/**
 * Defines Text as `h4` with correct style.
 *
 * @param   {TextWithoutAsProps} props The props
 * @returns {JSX.Element}              The Text component
 * @example
 * <Text.H4>Example</Text.H4>
 */
Text.H4 = (props) => <Text as="h4" style={Typography.blackMountainView.headline4} {...props} />;
/**
 * Defines Text as `h5` with correct style.
 *
 * @param   {TextWithoutAsProps} props The props
 * @returns {JSX.Element}              The Text component
 * @example
 * <Text.H5>Example</Text.H5>
 */
Text.H5 = (props) => <Text as="h5" style={Typography.blackMountainView.headline5} {...props} />;
/**
 * Defines Text as `h6` with correct style.
 *
 * @param   {TextWithoutAsProps} props The props
 * @returns {JSX.Element}              The Text component
 * @example
 * <Text.H6>Example</Text.H6>
 */
Text.H6 = (props) => <Text as="h6" style={Typography.blackMountainView.headline6} {...props} />;
/**
 * Defines Text as `span` with correct style.
 *
 * @param   {TextWithoutAsProps} props The props
 * @returns {JSX.Element}              The Text component
 * @example
 * <Text.Span>Example</Text.Span>
 */
Text.Span = (props) => <Text as="span" style={Typography.blackMountainView.bodyText1} {...props} />;
/**
 * Defines Text as `p` with correct style.
 *
 * @param   {TextWithoutAsProps} props The props
 * @returns {JSX.Element}              The Text component
 * @example
 * <Text.P>Example</Text.P>
 */
Text.P = (props) => <Text as="p" style={Typography.blackMountainView.bodyText1} {...props} />;

export default Text;
