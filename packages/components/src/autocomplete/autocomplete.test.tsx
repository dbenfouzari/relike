import { fireEvent, render, screen } from "@testing-library/react";
import { useRef } from "react";

import Autocomplete from "./autocomplete";

const CITIES = [
  {
    value: "losangeles",
    label: "Los Angeles",
  },
  {
    value: "sanfrancisco",
    label: "San Francisco",
  },
  {
    value: "paris",
    label: "Paris",
  },
  {
    value: "montpellier",
    label: "Montpellier",
  },
  {
    value: "bordeaux",
    label: "Bordeaux",
  },
  {
    value: "toulouse",
    label: "Toulouse",
  },
  {
    value: "lyon",
    label: "Lyon",
  },
  {
    value: "montevideo",
    label: "Montevideo",
  },
];

describe("Autocomplete", () => {
  it("should render successfully", () => {
    render(<Autocomplete options={CITIES} onItemSelect={jest.fn()} />);

    expect(screen.getByTestId("autocomplete")).toMatchSnapshot();
  });

  it("should allow selection", () => {
    const handleSelect = jest.fn();

    render(<Autocomplete options={CITIES} onItemSelect={handleSelect} />);

    const textField = screen.getByTestId("text-field");

    fireEvent.focus(textField);
    fireEvent.change(textField, { target: { value: "an" } });

    expect(screen.getByTestId("autocomplete-list")).toBeInTheDocument();
    expect(screen.getByTestId("autocomplete-list-item-losangeles")).toBeInTheDocument();

    expect(screen.getByTestId("autocomplete")).toMatchSnapshot();

    fireEvent.click(screen.getByTestId("autocomplete-list-item-losangeles"));

    expect(handleSelect).toHaveBeenCalledWith("losangeles");
  });

  it("should handle click outside", () => {
    const { container } = render(<Autocomplete options={CITIES} onItemSelect={jest.fn()} />);

    const textField = screen.getByTestId("text-field");

    fireEvent.focus(textField);
    fireEvent.change(textField, { target: { value: "an" } });

    expect(screen.getByTestId("autocomplete-list")).toBeInTheDocument();

    fireEvent.click(container);

    expect(screen.queryByTestId("autocomplete-list")).not.toBeInTheDocument();
  });

  it("should pass ref (used for coverage)", () => {
    /**
     * Dumb component, just to give ref to Autocomplete
     *
     * @returns {JSX.Element} The Autocomplete component
     * @example
     * <Component />
     */
    const Component = () => {
      const ref = useRef<HTMLDivElement>(null);

      return <Autocomplete ref={ref} options={CITIES} onItemSelect={jest.fn()} />;
    };

    render(<Component />);
  });
});
