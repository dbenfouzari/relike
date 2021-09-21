import { render } from "@testing-library/react";

import Alert from "./alert";
import { AlertSeverities } from "./constants";

describe("Alert", () => {
  it("should render successfully", () => {
    const { container } = render(<Alert />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with function children", () => {
    const { getByTestId } = render(
      <Alert severity={AlertSeverities.error} title="Test">
        {({ color }) => (
          <div data-testid="content" style={{ backgroundColor: color.toRGB() }}>
            <h1>Hello World</h1>
          </div>
        )}
      </Alert>,
    );

    const style = window.getComputedStyle(getByTestId("content"));

    expect(style.backgroundColor).toEqual("rgb(95, 33, 32)");
  });
});
