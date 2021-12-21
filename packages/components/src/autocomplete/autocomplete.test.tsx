import { render, screen } from "@testing-library/react";

import Autocomplete from "./autocomplete";

describe("Autocomplete", () => {
  it("should render successfully", () => {
    render(<Autocomplete />);

    expect(screen.getByTestId("autocomplete")).toMatchSnapshot();
  });
});
