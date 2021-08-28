import { render } from "@testing-library/react";

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
    const { container } = setup({ emphasis: Emphasis.high });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully when extended", () => {
    const { container } = setup({ icon: Icons.check, label: "See all results" });

    expect(container.firstChild).toMatchSnapshot();
  });
});
