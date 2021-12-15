import { render, screen } from "@testing-library/react";

import LinearProgressIndicator from "./linear-progress-indicator";

describe("LinearProgressIndicator", () => {
  it("should render successfully", () => {
    render(<LinearProgressIndicator value={40} />);

    expect(screen.getByTestId("linear-progress")).toMatchSnapshot();
  });

  it("should throw when value > 100", () => {
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();

    expect(() => {
      render(<LinearProgressIndicator value={140} />);
    }).toThrow("[LinearProgressIndicator] - The value should not exceed 100");

    expect(consoleErrorMock).toHaveBeenCalled();
  });
});
