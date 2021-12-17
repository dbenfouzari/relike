import { render } from "@testing-library/react";

import GridView from "./grid-view";

it("should render nothing", () => {
  const { container } = render(<GridView />);

  // Disable ESLint because I want to test that it renders nothing.
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toBe(null);
});
