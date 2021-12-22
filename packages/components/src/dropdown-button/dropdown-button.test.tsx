import { fireEvent, render, screen } from "@testing-library/react";
import classNames from "classnames";

import DropdownButton, { getMaxChildrenWidth } from "./dropdown-button";
import classes from "./dropdown-button.module.scss";

/**
 * Helper to generate dropdown items.
 *
 * @param   {number}                            [n = 100] Number of items to generate
 * @example
 * generateItems() // generates 100 items
 * generateItems(5) // generates 5 items
 * @returns {{ value: number, text: string }[]}           The items.
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

  it("should render successfully with initial value", () => {
    render(<DropdownButton items={generateItems()} value="2" />);

    expect(screen.getByTestId("dropdown-button")).toMatchSnapshot();
  });

  it("should open", () => {
    render(<DropdownButton items={generateItems()} />);
    const button = screen.getByTestId("dropdown-button");

    fireEvent.click(button);

    const elm = screen.getByTestId(2);

    fireEvent.click(elm);
  });

  it("should render successfully when allow empty value", () => {
    render(<DropdownButton items={generateItems()} allowEmpty />);

    expect(screen.getByTestId("empty-placeholder")).toBeInTheDocument();
  });

  it("should handle selection", () => {
    const onSelect = jest.fn();

    render(<DropdownButton items={generateItems()} onChange={onSelect} />);
    const button = screen.getByTestId("dropdown-button");

    fireEvent.click(button);
    fireEvent.click(screen.getByTestId("button-4"));

    expect(onSelect).toHaveBeenCalledWith("4");
  });

  it("should close on click outside", () => {
    /**
     * Dumb component, just to be able to click outside the dropdown button
     *
     * @returns {JSX.Element} The DropdownButton component
     * @example
     * <Component />
     */
    const Component = () => (
      <div data-testid="dumb-wrapper">
        <DropdownButton items={generateItems()} />
      </div>
    );

    render(<Component />);

    const button = screen.getByTestId("dropdown-button");

    // Dropdown button should NOT be open
    expect(button.className).not.toEqual(classNames(classes.wrapper, classes.wrapper__open));

    fireEvent.click(button);
    // Dropdown button should be open
    expect(button.className).toEqual(classNames(classes.wrapper, classes.wrapper__open));
    // Click outside the dropdown button
    fireEvent.click(screen.getByTestId("dumb-wrapper"));
    // Dropdown button should NOT be open
    expect(button.className).not.toEqual(classNames(classes.wrapper, classes.wrapper__open));
  });

  it("should show value label when value is passed", () => {
    render(<DropdownButton items={generateItems()} value="2" />);

    expect(screen.getAllByText("Item 2")).toHaveLength(2);
  });

  it("getMaxChildrenWidth should return nothing when no parent given", () => {
    expect(getMaxChildrenWidth(null)).toBe(undefined);
  });
});
