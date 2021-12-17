import classNames from "classnames";
import { forwardRef, ForwardRefExoticComponent, HTMLProps, ReactNode } from "react";
import { createUseStyles } from "react-jss";

import Axis from "../axis";
import CrossAxisAlignment from "../cross-axis-alignment";
import MainAxisAlignment from "../main-axis-alignment";
import TextDirection from "../text-direction";
import VerticalDirection from "../vertical-direction";
import FlexColumn from "./components/flex-column";
import FlexRow from "./components/flex-row";
import classes from "./flex.module.scss";
import { getAlignItems, getFlexDirection, getJustifyContent } from "./utils";

/** Defines gap property */
export type GapProperty = string | number;
/** Defines Flex gap property */
export type FlexGap = GapProperty | [horizontal: GapProperty, vertical: GapProperty];

/** Defines Flex props. */
export interface FlexProps {
  /** This prop is used to override the style */
  className?: string;

  /**
   * Flex direction
   *
   * @default Axis.horizontal
   * @see Flex.Row
   */
  direction?: Axis;

  /**
   * How the children should be placed along the cross axis.
   *
   * For example, CrossAxisAlignment.center, the default, centers the children in the cross axis
   * (e.g., horizontally for a Column).
   *
   * @default CrossAxisAlignment.center
   */
  crossAxisAlignment?: CrossAxisAlignment;

  /**
   * How the children should be placed along the main axis.
   *
   * For example, MainAxisAlignment.start, the default, places the children at the start
   * (i.e., the left for a Row or the top for a Column) of the main axis.
   *
   * @default MainAxisAlignment.start
   */
  mainAxisAlignment?: MainAxisAlignment;

  /**
   * Determines the order to lay children out vertically and how to interpret start and end in the vertical direction.
   *
   * Defaults to VerticalDirection.down.
   *
   * If the direction is Axis.vertical, this controls which order children are painted in (down or up), the meaning of
   * the mainAxisAlignment property's MainAxisAlignment.start and MainAxisAlignment.end values.
   *
   * If the direction is Axis.vertical, and either the mainAxisAlignment is either MainAxisAlignment.start or MainAxisAlignment.end,
   * or there's more than one child, then the verticalDirection must not be null.
   *
   * If the direction is Axis.horizontal, this controls the meaning of the crossAxisAlignment property's
   * CrossAxisAlignment.start and CrossAxisAlignment.end values.
   *
   * If the direction is Axis.horizontal, and the crossAxisAlignment is either CrossAxisAlignment.start or CrossAxisAlignment.end,
   * then the verticalDirection must not be null.
   *
   * @default VerticalDirection.down
   */
  verticalDirection?: VerticalDirection;

  /**
   * Determines the order to lay children out horizontally and how to interpret start and end in the horizontal direction.
   *
   * Defaults to the ambient TextDirection.ltr.
   *
   * If textDirection is TextDirection.rtl, then the direction in which text flows starts from right to left.
   * Otherwise, if textDirection is TextDirection.ltr, then the direction in which text flows starts from left to right.
   *
   * If the direction is Axis.horizontal, this controls the order in which the children are positioned
   * (left-to-right or right-to-left), and the meaning of the mainAxisAlignment property's
   * MainAxisAlignment.start and MainAxisAlignment.end values.
   *
   * If the direction is Axis.horizontal, and either the mainAxisAlignment is either MainAxisAlignment.start or MainAxisAlignment.end,
   * or there's more than one child, then the textDirection (or the ambient Directionality) must not be null.
   *
   * If the direction is Axis.vertical, this controls the meaning of the crossAxisAlignment property's
   * CrossAxisAlignment.start and CrossAxisAlignment.end values.
   *
   * If the direction is Axis.vertical, and the crossAxisAlignment is either CrossAxisAlignment.start or CrossAxisAlignment.end,
   * then the textDirection (or the ambient Directionality) must not be null.
   *
   * @default TextDirection.ltr
   */
  textDirection?: TextDirection;

  /**
   * The gap property sets the gaps (gutters) between rows and columns.
   *
   * It can be a number (gap: 10) or string (gap: "10%") or a tuple (gap: [10, "20%"]).
   */
  gap?: FlexGap;

  /** The content inside the Flex */
  children: ReactNode | ReactNode[];
}

/** Defines Flex styles props. */
type FlexStyleProps = Pick<FlexProps, "gap"> & {
  /***/
  crossAxisAlignment: CrossAxisAlignment;
  /***/
  mainAxisAlignment: MainAxisAlignment;
  /***/
  textDirection: TextDirection;
  /***/
  direction: Axis;
  /***/
  verticalDirection: VerticalDirection;
};

/**
 * Component display name.
 */
const COMPONENT_NAME = "Flex";

/**
 * Takes a `gap` and returns correct CSS property value.
 *
 * @param   {FlexStyleProps.gap} gap The gap.
 * @example
 * computeGap([32, "12px"])
 * @returns {any}                    The final gap
 */
const computeGap = (gap?: FlexStyleProps["gap"]) => {
  if (!gap) return null;

  if (Array.isArray(gap))
    return gap
      .map((g) => {
        if (typeof g === "number") return `${g}px`;
        return g;
      })
      .join(" ");

  return gap;
};

/**
 * I do not do it with CSS since it compiles so much classes.
 * This way, it only generates one className that changes.
 *
 * Does it really lighten the final bundle size ?
 */
const useStyles = createUseStyles({
  /**
   * Generates flex styles
   *
   * @param   {FlexStyleProps} props The props
   * @example
   * flex({ crossAxisAlignment: CrossAxisAlignment.center, ... })
   * @returns {CSSProperties}        The styles
   */
  flex: ({
    crossAxisAlignment,
    gap,
    mainAxisAlignment,
    textDirection,
    verticalDirection,
    direction,
  }: FlexStyleProps) => ({
    gap: computeGap(gap),
    alignItems: getAlignItems(crossAxisAlignment),
    justifyContent: getJustifyContent(mainAxisAlignment),
    flexDirection: getFlexDirection(textDirection, verticalDirection, direction),
  }),
});

/** Defines Flex component */
type FlexComponent = ForwardRefExoticComponent<FlexProps & HTMLProps<HTMLDivElement>> & {
  /** Allows `<Flex.Row />` */
  Row: typeof FlexRow;
  /** Allows `<Flex.Column />` */
  Column: typeof FlexColumn;
};

/**
 * A widget that displays its children in a one-dimensional array.
 *
 * The Flex widget allows you to control the axis along which the children are placed (horizontal or vertical).
 * This is referred to as the main axis. If you know the main axis in advance, then consider using a
 * Flex.Row (if it's horizontal) or Flex.Column (if it's vertical) instead, because that will be less verbose.
 *
 * If you only have one child, then rather than using Flex, Flex.Row, or Flex.Column, consider using Align
 * to position the child.
 *
 * @see {@link Flex.Row} for a version of this widget that is always horizontal.
 * @see {@link Flex.Column} for a version of this widget that is always vertical.
 * @see {@link Align} if you only have one child.
 */
export const Flex: FlexComponent = forwardRef<HTMLDivElement, FlexProps & HTMLProps<HTMLDivElement>>(
  (
    {
      className,
      direction = Axis.horizontal,
      crossAxisAlignment = CrossAxisAlignment.center,
      mainAxisAlignment = MainAxisAlignment.start,
      textDirection = TextDirection.ltr,
      verticalDirection = VerticalDirection.down,
      gap,
      children,
      ...props
    },
    ref,
  ) => {
    const styles = useStyles({
      gap,
      crossAxisAlignment,
      mainAxisAlignment,
      textDirection,
      verticalDirection,
      direction,
    });

    return (
      <div data-testid="flex-item" ref={ref} className={classNames(classes.flex, styles.flex, className)} {...props}>
        {children}
      </div>
    );
  },
) as FlexComponent;
Flex.displayName = COMPONENT_NAME;
Flex.Row = FlexRow;
Flex.Column = FlexColumn;

export default Flex;
