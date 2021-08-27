import { render } from "@testing-library/react";

import Text from "./text";

describe("Text", () => {
  it("should render successfully", () => {
    const { container } = render(<Text>Hello Testing World</Text>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
