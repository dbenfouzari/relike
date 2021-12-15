import { render, screen } from "@testing-library/react";

import Toolbar from "./toolbar";

describe("Toolbar", () => {
  it("should render successfully", () => {
    render(<Toolbar />);

    expect(screen.getByRole("toolbar")).toMatchSnapshot();
  });
});
