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

  it("should render successfully with an image", () => {
    const { container } = render(<Avatar src="https://fakeimg.pl/250x100/" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
