import { render } from "@testing-library/react";

import Alert from "./alert";

describe("Alert", () => {
  it("should render successfully", () => {
    const { container } = render(<Alert />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
