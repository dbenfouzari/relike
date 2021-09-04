import { render } from "@testing-library/react";

import Divider from "./divider";

describe("Divider", () => {
  it("should render successfully", () => {
    const { container } = render(<Divider />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
