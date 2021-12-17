import { fireEvent, render, screen } from "@testing-library/react";

import DropdownButton from "./dropdown-button";

/**
 * Helper to generate dropdown items.
 *
 * @param {number} [n = 100] Number of items to generate
 * @example
 * generateItems() // generates 100 items
 * generateItems(5) // generates 5 items
 * @returns {{ value: number, text: string }[]} The items.
 */
const generateItems = (n = 5) => {
  const result = [];
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
