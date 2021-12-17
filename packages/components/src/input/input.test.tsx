import { render, screen } from "@testing-library/react";

import Input from "./input";

it("should render successfully", () => {
  render(<Input />);

  expect(screen.getByTestId("text-field")).toMatchSnapshot();
});
