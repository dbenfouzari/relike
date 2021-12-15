import { fireEvent, render, screen } from "@testing-library/react";

import DropdownButton from "./dropdown-button";

const generateItems = (n = 5) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push({ value: i.toString(), text: `Item ${i}` });
  }
  return result;
};

describe("DropdownButton", () => {
  it("should render successfully", () => {
    render(<DropdownButton items={generateItems()} />);

    expect(screen.getByTestId("dropdown-button")).toMatchSnapshot();
  });

  it("should open", () => {
    const { rerender } = render(<DropdownButton items={generateItems()} />);
    const button = screen.getByTestId("dropdown-button");

    fireEvent.click(button);

    rerender(<DropdownButton items={generateItems()} />);

    const elm = screen.getByTestId(2);

    fireEvent.click(elm);
  });
});
