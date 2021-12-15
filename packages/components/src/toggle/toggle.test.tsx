import { fireEvent, render, screen } from "@testing-library/react";

import Toggle from "./toggle";

describe("toggle", () => {
  it("should render successfully", () => {
    render(<Toggle />);

    expect(screen.getByRole("switch")).toMatchSnapshot();
  });

  it("should handle click with false", () => {
    const onChange = jest.fn();

    render(<Toggle onChange={onChange} checked={false} />);

    fireEvent.click(screen.getByTestId("toggle"));

    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should handle click with true", () => {
    const onChange = jest.fn();

    render(<Toggle onChange={onChange} checked={true} />);

    fireEvent.click(screen.getByTestId("toggle"));

    expect(onChange).toHaveBeenCalledWith(false);
  });
});
