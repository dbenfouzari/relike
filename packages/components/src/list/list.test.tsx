import { render, screen } from "@testing-library/react";

import List from "./list";

describe("List", () => {
  it("should render successfully", () => {
    render(
      <List>
        <List.Item>Hello</List.Item>
        <List.Item>Tests</List.Item>
      </List>,
    );

    expect(screen.getByRole("list")).toMatchSnapshot();
  });
});
