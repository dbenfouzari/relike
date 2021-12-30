import { fireEvent, render, screen } from "@testing-library/react";

import Toggle from "./toggle";

describe("toggle", () => {
  it("should render successfully", () => {
    render(<Toggle />);

    expect(screen.getByRole("switch")).toMatchSnapshot();
  });

  it("should handle click when disabled", () => {
    const onChange = jest.fn();

    render(<Toggle onChange={onChange} checked={false} disabled />);

    fireEvent.click(screen.getByRole("switch"));

    expect(onChange).not.toHaveBeenCalled();
  });

  it("should handle click when no onChange handler given", () => {
    render(<Toggle />);

    fireEvent.click(screen.getByRole("switch"));
  });

  it("should handle click when checked is false", () => {
    const onChange = jest.fn();

    render(<Toggle onChange={onChange} checked={false} />);

    fireEvent.click(screen.getByRole("switch"));

    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should handle click when checked is true", () => {
    const onChange = jest.fn();

    render(<Toggle onChange={onChange} checked={true} />);

    fireEvent.click(screen.getByRole("switch"));

    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("should render successfully when disabled", () => {
    render(<Toggle disabled />);

    expect(screen.getByRole("switch")).toMatchSnapshot();
  });

  it("should render successfully when loading and small and checked", () => {
    render(<Toggle loading size="small" checked onChange={jest.fn()} />);

    expect(screen.getByRole("switch")).toMatchSnapshot();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render successfully when loading and size is normal and unchecked", () => {
    render(<Toggle loading checked={false} onChange={jest.fn()} />);

    expect(screen.getByRole("switch")).toMatchSnapshot();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
