import { render, screen } from "@testing-library/react";

import Skeleton from "./skeleton";

it("should render successfully", () => {
  render(<Skeleton />);

  expect(screen.getByTestId("skeleton")).toMatchSnapshot();
});
