import { render, screen } from "@testing-library/react";

import Alert from "./alert";
import { AlertSeverities } from "./constants";

describe("Alert", () => {
  it("should render successfully", () => {
    render(<Alert />);

    expect(screen.getByRole("alert")).toMatchSnapshot();
  });

  it("should render with function children", () => {
    render(
      <Alert severity={AlertSeverities.error} title="Test">
        {({ color }) => (
          <div data-testid="content" style={{ backgroundColor: color.toRGB() }}>
            <h1>Hello World</h1>
          </div>
        )}
      </Alert>,
    );

    const style = window.getComputedStyle(screen.getByTestId("content"));

    expect(style.backgroundColor).toEqual("rgb(95, 33, 32)");
  });
});
