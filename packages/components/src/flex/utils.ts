import { CSSProperties } from "react";

import Axis from "../axis";
import CrossAxisAlignment from "../cross-axis-alignment";
import MainAxisAlignment from "../main-axis-alignment";
import TextDirection from "../text-direction";
import VerticalDirection from "../vertical-direction";

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
