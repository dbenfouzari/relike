import { CSSProperties } from "react";

import Axis from "../axis";
import CrossAxisAlignment from "../cross-axis-alignment";
import MainAxisAlignment from "../main-axis-alignment";
import TextDirection from "../text-direction";
import VerticalDirection from "../vertical-direction";

/**
 * Helper to get CSS property `align-items`
 *
 * @param   {CrossAxisAlignment}       crossAxisAlignment The cross axis alignment (horizontal when parent is vertical, vice versa)
 * @example
 * getAlignItems(CrossAxisAlignment.center)
 * @returns {CSSProperties.alignItems}                    The CSS property value.
 */
export const getAlignItems = (crossAxisAlignment: CrossAxisAlignment): NonNullable<CSSProperties["alignItems"]> => {
  switch (crossAxisAlignment) {
    case CrossAxisAlignment.center:
    default:
      return "center";
    case CrossAxisAlignment.start:
      return "flex-start";
    case CrossAxisAlignment.end:
      return "flex-end";
    case CrossAxisAlignment.stretch:
      return "stretch";
  }
};

/**
 * Helper to get CSS property `justify-content`
 *
 * @param   {MainAxisAlignment}            mainAxisAlignment The main axis alignment.
 * @example
 * getJustifyContent(MainAxisAlignment.start)
 * @returns {CSSProperties.justifyContent}                   The CSS property value.
 */
export const getJustifyContent = (
  mainAxisAlignment: MainAxisAlignment,
): NonNullable<CSSProperties["justifyContent"]> => {
  switch (mainAxisAlignment) {
    case MainAxisAlignment.start:
    default:
      return "flex-start";
    case MainAxisAlignment.center:
      return "center";
    case MainAxisAlignment.end:
      return "flex-end";
    case MainAxisAlignment.spaceAround:
      return "space-around";
    case MainAxisAlignment.spaceEvenly:
      return "space-evenly";
    case MainAxisAlignment.spaceBetween:
      return "space-between";
  }
};

/**
 * Helper to get CSS property `flex-direction`
 *
 * @param   {TextDirection}               textDirection     The text direction.
 * @param   {VerticalDirection}           verticalDirection The vertical direction.
 * @param   {Axis}                        direction         The axis.
 * @example
 * getFlexDirection(TextDirection.ltr, VerticalDirection.down, Axis.horizontal) // row
 * @returns {CSSProperties.flexDirection}                   The CSS property value.
 */
export const getFlexDirection = (
  textDirection: TextDirection,
  verticalDirection: VerticalDirection,
  direction: Axis,
): NonNullable<CSSProperties["flexDirection"]> => {
  if (textDirection === TextDirection.ltr && direction === Axis.horizontal) return "row";
  if (textDirection === TextDirection.rtl && direction === Axis.horizontal) return "row-reverse";
  if (verticalDirection === VerticalDirection.down && direction === Axis.vertical) return "column";
  if (verticalDirection === VerticalDirection.up && direction === Axis.vertical) return "column-reverse";
  return "row";
};
