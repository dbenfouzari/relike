import { render } from "@testing-library/react";

import Toolbar from "./toolbar";

describe("Toolbar", () => {
  it("should render successfully", () => {
    const { container } = render(<Toolbar />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
