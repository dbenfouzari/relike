import classNames from "classnames";
import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from "react";
import { createUseStyles } from "react-jss";

import TextOverflow from "../text-overflow";
import TextStyle from "../text-style";
import Typography from "../typography";

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

export interface TextStylesProps {
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

export const Text = forwardRef(
  (
    // FIXME: should not use `as TextStyle` since it IS a TextStyle. Check typings.
    {
      as: AsElement = "span",
      style = Typography.blackMountainView.bodyText1 as TextStyle,
      children,
      className,
    }: TextProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const styles = useStyles({ style });

    return (
      <AsElement data-testid="text-elm" ref={ref as any} className={classNames(styles.elm, className)}>
        {children}
      </AsElement>
    );
  },
);
Text.displayName = COMPONENT_NAME;
Text.defaultProps = DEFAULT_PROPS;

export default Text;
