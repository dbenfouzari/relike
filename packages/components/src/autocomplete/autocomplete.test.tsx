import { render, screen } from "@testing-library/react";

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

  it.todo("should allow selection");
});
