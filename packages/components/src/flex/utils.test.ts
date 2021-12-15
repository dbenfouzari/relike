import Axis from "../axis";
import CrossAxisAlignment from "../cross-axis-alignment";
import MainAxisAlignment from "../main-axis-alignment";
import TextDirection from "../text-direction";
import VerticalDirection from "../vertical-direction";
import { getAlignItems, getFlexDirection, getJustifyContent } from "./utils";

describe("Flex/utils", () => {
  it("getAlignItems should return correct value", () => {
    expect(getAlignItems(CrossAxisAlignment.end)).toBe("flex-end");
    expect(getAlignItems(CrossAxisAlignment.start)).toBe("flex-start");
    expect(getAlignItems(CrossAxisAlignment.center)).toBe("center");
    expect(getAlignItems(CrossAxisAlignment.stretch)).toBe("stretch");
    expect(getAlignItems(CrossAxisAlignment.baseline)).toBe("center");
  });

  it("getJustifyContent should return correct value", () => {
    expect(getJustifyContent(MainAxisAlignment.end)).toBe("flex-end");
    expect(getJustifyContent(MainAxisAlignment.start)).toBe("flex-start");
    expect(getJustifyContent(MainAxisAlignment.center)).toBe("center");
    expect(getJustifyContent(MainAxisAlignment.spaceAround)).toBe("space-around");
    expect(getJustifyContent(MainAxisAlignment.spaceBetween)).toBe("space-between");
    expect(getJustifyContent(MainAxisAlignment.spaceEvenly)).toBe("space-evenly");
  });

  it("getFlexDirection should return correct value", () => {
    expect(getFlexDirection(TextDirection.ltr, VerticalDirection.down, Axis.horizontal)).toEqual("row");
    expect(getFlexDirection(TextDirection.rtl, VerticalDirection.down, Axis.horizontal)).toEqual("row-reverse");

    expect(getFlexDirection(TextDirection.ltr, VerticalDirection.down, Axis.vertical)).toEqual("column");
    expect(getFlexDirection(TextDirection.ltr, VerticalDirection.up, Axis.vertical)).toEqual("column-reverse");

    // @ts-expect-error Function takes arguments.
    expect(getFlexDirection()).toEqual("row");
  });
});
