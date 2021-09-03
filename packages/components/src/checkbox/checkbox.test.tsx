import { act, fireEvent, render } from "@testing-library/react";

import Checkbox from "./checkbox";

describe("Checkbox", () => {
  it("should render successfully", () => {
    const { container } = render(<Checkbox />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully when default checked", () => {
    const { container } = render(<Checkbox defaultChecked />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should handle click", () => {
    const { getByTestId } = render(<Checkbox defaultChecked />);

    const input = getByTestId("input");

    act(() => {
      fireEvent.click(input);
    });
  });
});
