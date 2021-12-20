import { fireEvent, render, screen } from "@testing-library/react";

import Colors from "../colors";
import Chip from "./chip";

describe("Chip", () => {
  it("should render successfully", () => {
    render(<Chip>Hello</Chip>);

    expect(screen.getByTestId("chip")).toMatchSnapshot();
  });

  it("should render successfully with dark background", () => {
    render(<Chip color={Colors.blue[900]}>Hello</Chip>);

    expect(screen.getByTestId("chip")).toMatchSnapshot();
  });

  it("should render successfully with avatar", () => {
    render(
      <Chip
        avatar={
          <img alt="avatar" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />
        }
      >
        Hello
      </Chip>,
    );

    expect(screen.getByTestId("chip")).toMatchSnapshot();
    expect(screen.getByTestId("chip-avatar")).toBeInTheDocument();
  });

  it("should handle click", () => {
    const onClick = jest.fn();

    render(<Chip onPress={onClick}>Hello</Chip>);

    fireEvent.click(screen.getByTestId("chip"));

    expect(onClick).toHaveBeenCalled();
  });

  it("should handle disabled click", () => {
    const onClick = jest.fn();

    render(
      <Chip disabled onPress={onClick}>
        Hello
      </Chip>,
    );

    fireEvent.click(screen.getByTestId("chip"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should handle deletion", () => {
    const onDelete = jest.fn();

    render(<Chip onDeletePress={onDelete}>Hello</Chip>);

    const deleteIcon = screen.getByTestId("delete-icon");

    fireEvent.click(deleteIcon);

    expect(onDelete).toHaveBeenCalled();
  });
});
