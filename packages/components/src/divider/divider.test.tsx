import { render, screen } from "@testing-library/react";

import Divider from "./divider";

describe("Divider", () => {
  it("should render successfully", () => {
    render(<Divider />);

    expect(screen.getByTestId("divider")).toMatchSnapshot();
  });
});
