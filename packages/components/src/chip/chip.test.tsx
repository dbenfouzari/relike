import { render } from "@testing-library/react";

import Chip from "./chip";

describe("Chip", () => {
  it("should render successfully", () => {
    const { container } = render(<Chip />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
