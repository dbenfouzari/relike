import { render, screen } from "@testing-library/react";

import Color from "../color";
import { Emphasis } from "../emphasis";
import Icons from "../icons";
import FloatingActionButton, { FloatingActionButtonProps } from "./floating-action-button";

/**
 * Set up the tests
 *
 * @param   {Partial<FloatingActionButtonProps>} props The override props
 * @example
 * setup({ emphasis: Emphasis.high })
 * @returns {any}                                      The result
 */
const setup = (props?: Partial<FloatingActionButtonProps>) => {
  const baseProps: FloatingActionButtonProps = {
    icon: Icons.add,
  };

  const mergedProps = { ...baseProps, ...props };

  return render(<FloatingActionButton {...mergedProps} />);
};

describe("Button", () => {
  it("should render successfully with high emphasis", () => {
    setup({ emphasis: Emphasis.high });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully with medium emphasis", () => {
    setup({ emphasis: Emphasis.medium });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully with low emphasis", () => {
    setup({ emphasis: Emphasis.low });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully when extended", () => {
    setup({ icon: Icons.check, label: "See all results" });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully when disabled", () => {
    setup({ disabled: true });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully with low lightness color", () => {
    setup({ color: Color.fromHSLA(100, 50, 5) });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully with high emphasis and high lightness color", () => {
    setup({ color: Color.fromHSLA(100, 50, 100), emphasis: Emphasis.high });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });
});
