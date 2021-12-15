import { fireEvent, render, screen } from "@testing-library/react";

import Checkbox from "./checkbox";

describe("Checkbox", () => {
  it("should render successfully", () => {
    render(<Checkbox />);

    expect(screen.getByTestId("checkbox-wrapper")).toMatchSnapshot();
  });

  it("should render successfully when default checked", () => {
    render(<Checkbox defaultChecked />);

    expect(screen.getByTestId("checkbox-wrapper")).toMatchSnapshot();
  });

  it("should handle click", () => {
    render(<Checkbox defaultChecked />);

    const input = screen.getByTestId("input");

    fireEvent.click(input);
  });
});
