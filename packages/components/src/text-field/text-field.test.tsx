import { render, screen } from "@testing-library/react";

import TextField from "./text-field";

it("should render successfully", () => {
  render(<TextField />);

  expect(screen.getByRole("textbox")).toMatchSnapshot();
});
