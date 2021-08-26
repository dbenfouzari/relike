import { render } from "@testing-library/react";

import TextField from "./text-field";

it("should render successfully", () => {
  render(<TextField />);
});

it("matches snapshot", () => {
  const { container } = render(<TextField onChange={console.log} />);

  expect(container.firstChild).toMatchSnapshot();
});
