import { render, screen } from "@testing-library/react";

import Avatar from "./avatar";

describe("Avatar", () => {
  it("should render successfully", () => {
    render(
      <Avatar>
        <span>M</span>
      </Avatar>,
    );

    expect(screen.getByTestId("avatar")).toMatchSnapshot();
  });

  it("should render successfully with an image", () => {
    render(<Avatar src="https://fakeimg.pl/250x100/" />);

    expect(screen.getByTestId("avatar")).toMatchSnapshot();
  });
});
