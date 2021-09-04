import classNames from "classnames";
import { forwardRef, ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { createUseStyles } from "react-jss";

import Axis from "../axis";
import CrossAxisAlignment from "../cross-axis-alignment";
import MainAxisAlignment from "../main-axis-alignment";
import TextDirection from "../text-direction";
import VerticalDirection from "../vertical-direction";
import FlexColumn from "./components/flex-column";
import FlexRow from "./components/flex-row";
import classes from "./flex.module.scss";

export type GapProperty = string | number;
export type FlexGap = GapProperty | [horizontal: GapProperty, vertical: GapProperty];

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

  children: ReactNode | ReactNode[];
}

type FlexStyleProps = Pick<FlexProps, "gap">;

/**
 * Component display name.
 */
const COMPONENT_NAME = "Flex";

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

const useStyles = createUseStyles({
  flex: ({ gap }: FlexStyleProps) => ({
    gap: computeGap(gap),
  }),
});

type FlexComponent = ForwardRefExoticComponent<FlexProps & RefAttributes<HTMLDivElement>> & {
  Row: typeof FlexRow;
  Column: typeof FlexColumn;
};

export const Flex: FlexComponent = forwardRef<HTMLDivElement, FlexProps>(
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
    const styles = useStyles({ gap });

    return (
      <div
        ref={ref}
        className={classNames(
          classes.flex,
          styles.flex,
          {
            // Axis
            [classes.flex__horizontal]: direction === Axis.horizontal,
            [classes.flex__vertical]: direction === Axis.vertical,

            // CrossAxisAlignment
            [classes.flex__cross_center]: crossAxisAlignment === CrossAxisAlignment.center,
            [classes.flex__cross_start]: crossAxisAlignment === CrossAxisAlignment.start,
            [classes.flex__cross_end]: crossAxisAlignment === CrossAxisAlignment.end,
            [classes.flex__cross_stretch]: crossAxisAlignment === CrossAxisAlignment.stretch,

            // MainAxisAlignment
            [classes.flex__main_center]: mainAxisAlignment === MainAxisAlignment.center,
            [classes.flex__main_end]: mainAxisAlignment === MainAxisAlignment.end,
            [classes.flex__main_start]: mainAxisAlignment === MainAxisAlignment.start,
            [classes.flex__main_spaceAround]: mainAxisAlignment === MainAxisAlignment.spaceAround,
            [classes.flex__main_spaceBetween]: mainAxisAlignment === MainAxisAlignment.spaceBetween,
            [classes.flex__main_spaceEvenly]: mainAxisAlignment === MainAxisAlignment.spaceEvenly,

            // TextDirection
            [classes.flex__text_ltr]: textDirection === TextDirection.ltr,
            [classes.flex__text_rtl]: textDirection === TextDirection.rtl,

            // VerticalDirection
            [classes.flex__vertical_down]: verticalDirection === VerticalDirection.down,
            [classes.flex__vertical_up]: verticalDirection === VerticalDirection.up,
          },
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
) as FlexComponent;
Flex.displayName = COMPONENT_NAME;
Flex.Row = FlexRow;
Flex.Column = FlexColumn;

export default Flex;
