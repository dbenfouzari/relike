import { fireEvent, render, screen } from "@testing-library/react";

import Chip from "./chip";

describe("Chip", () => {
  it("should render successfully", () => {
    render(<Chip>Hello</Chip>);

    expect(screen.getByTestId("chip")).toMatchSnapshot();
  });

  it("should handle click", () => {
    const onClick = jest.fn();

    render(<Chip onPress={onClick}>Hello</Chip>);

    fireEvent.click(screen.getByTestId("chip"));

    expect(onClick).toHaveBeenCalled();
  });

  it("should handle deletion", () => {
    const onDelete = jest.fn();

    render(<Chip onDeletePress={onDelete}>Hello</Chip>);

    const deleteIcon = screen.getByTestId("delete-icon");

    fireEvent.click(deleteIcon);

    expect(onDelete).toHaveBeenCalled();
  });
});
