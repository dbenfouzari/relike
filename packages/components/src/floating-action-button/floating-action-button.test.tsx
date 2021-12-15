import { render, screen } from "@testing-library/react";

import Icons from "../icons";
import FloatingActionButton, { Emphasis, FloatingActionButtonProps } from "./floating-action-button";

const setup = (outerProps?: Partial<FloatingActionButtonProps>) => {
  const props: FloatingActionButtonProps = {
    icon: Icons.add,
  };

  const mergedProps = { ...props, ...outerProps };

  return render(<FloatingActionButton {...mergedProps} />);
};

describe("Button", () => {
  it("should render successfully with high emphasis", () => {
    setup({ emphasis: Emphasis.high });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully when extended", () => {
    setup({ icon: Icons.check, label: "See all results" });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });
});
