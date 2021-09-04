import { act, fireEvent, render } from "@testing-library/react";

import Chip from "./chip";

describe("Chip", () => {
  it("should render successfully", () => {
    const { container } = render(<Chip>Hello</Chip>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should handle click", () => {
    const onClick = jest.fn();

    const { container } = render(<Chip onPress={onClick}>Hello</Chip>);

    act(() => {
      fireEvent.click(container.firstChild as ChildNode);
    });

    expect(onClick).toHaveBeenCalled();
  });

  it("should handle deletion", () => {
    const onDelete = jest.fn();

    const { getByTestId } = render(<Chip onDeletePress={onDelete}>Hello</Chip>);

    const deleteIcon = getByTestId("delete-icon");

    act(() => {
      fireEvent.click(deleteIcon);
    });

    expect(onDelete).toHaveBeenCalled();
  });
});
