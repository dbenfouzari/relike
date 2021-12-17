import { render, screen } from "@testing-library/react";

import Loader from "./loader";

it("should render successfully", () => {
  render(<Loader />);

  expect(screen.getByTestId("loader")).toMatchSnapshot();
});
