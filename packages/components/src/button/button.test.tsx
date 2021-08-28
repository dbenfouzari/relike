import { render } from "@testing-library/react";

import Button, { ButtonProps, Emphasis } from "./button";

const setup = (outerProps?: Partial<ButtonProps>) => {
  const props: ButtonProps = {
    children: "Hello Test",
  };

  const mergedProps = { ...props, ...outerProps };

  return render(<Button {...mergedProps} />);
};

describe("Button", () => {
  it("should render successfully with low emphasis", () => {
    const { container } = setup({ emphasis: Emphasis.low });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with medium emphasis", () => {
    const { container } = setup({ emphasis: Emphasis.medium });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with high emphasis", () => {
    const { container } = setup({ emphasis: Emphasis.high });

    expect(container.firstChild).toMatchSnapshot();
  });
});
