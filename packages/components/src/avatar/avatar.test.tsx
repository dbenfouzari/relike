import { render } from "@testing-library/react";

import Avatar from "./avatar";

describe("Avatar", () => {
  it("should render successfully", () => {
    const { container } = render(
      <Avatar>
        <span>M</span>
      </Avatar>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
