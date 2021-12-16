import { render, screen } from "@testing-library/react";

import SkeletonAvatar from "./avatar";

it("should render successfully", () => {
  render(<SkeletonAvatar />);

  expect(screen.getByTestId("skeleton-avatar")).toMatchSnapshot();
});
