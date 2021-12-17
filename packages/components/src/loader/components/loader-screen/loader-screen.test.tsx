import { render, screen } from "@testing-library/react";

import LoaderScreen from "./loader-screen";

it("should render successfully", () => {
  render(<LoaderScreen />);

  expect(screen.getByTestId("loader-screen")).toMatchSnapshot();
});
