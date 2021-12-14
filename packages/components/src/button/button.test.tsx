import { render } from "@testing-library/react";

import Colors from "../colors";
import Icons from "../icons";
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

  it("should render successfully when disabled", () => {
    const { container } = setup({ disabled: true });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully when lightness is low", () => {
    const { container } = setup({ color: Colors.black });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully when lightness is high", () => {
    const { container } = setup({ color: Colors.white, emphasis: Emphasis.high });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with icon", () => {
    const { container } = setup({ icon: Icons.access_time });

    expect(container.firstChild).toMatchSnapshot();
  });
});
