import { render, screen } from "@testing-library/react";

import TextOverflow from "../text-overflow";
import TextStyle from "../text-style";
import Typography from "../typography";
import Text, { getCSSOverflow } from "./text";

describe("Text", () => {
  it("getCSSOverflow should return correct value", () => {
    expect(getCSSOverflow(TextOverflow.fade)).toEqual(undefined);
    expect(getCSSOverflow(TextOverflow.clip)).toEqual("hidden");
    expect(getCSSOverflow(TextOverflow.ellipsis)).toEqual("ellipsis");
    expect(getCSSOverflow(TextOverflow.visible)).toEqual("visible");
  });

  it("should render successfully", () => {
    render(<Text>Hello Testing World</Text>);

    expect(screen.getByText("Hello Testing World")).toMatchSnapshot();
  });

  it("theme should correctly get font-size", () => {
    render(<Text style={Typography.blackMountainView.headline1}>Hello Testing World</Text>);

    const style = window.getComputedStyle(screen.getByTestId("text-elm"));
    expect(style.fontSize).toBe("96px");
  });

  it("should be 16px font-size by default", () => {
    render(<Text style={new TextStyle({})}>Hello Testing World</Text>);

    const style = window.getComputedStyle(screen.getByTestId("text-elm"));
    expect(style.fontSize).toBe("16px");
  });
});
