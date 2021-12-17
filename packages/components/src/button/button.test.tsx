import { render, screen } from "@testing-library/react";

import Colors from "../colors";
import { Emphasis } from "../emphasis";
import Icons from "../icons";
import Button, { ButtonProps } from "./button";

const setup = (outerProps?: Partial<ButtonProps>) => {
  const props: ButtonProps = {
    children: "Hello Test",
  };

  const mergedProps = { ...props, ...outerProps };

  return render(<Button {...mergedProps} />);
};

describe("Button", () => {
  it("should render successfully with low emphasis", () => {
    setup({ emphasis: Emphasis.low });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully with medium emphasis", () => {
    setup({ emphasis: Emphasis.medium });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully with high emphasis", () => {
    setup({ emphasis: Emphasis.high });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully when disabled", () => {
    setup({ disabled: true });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully when lightness is low", () => {
    setup({ color: Colors.black });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully when lightness is high", () => {
    setup({ color: Colors.white, emphasis: Emphasis.high });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render successfully with icon", () => {
    setup({ icon: Icons.access_time });

    expect(screen.getByRole("button")).toMatchSnapshot();
  });
});
