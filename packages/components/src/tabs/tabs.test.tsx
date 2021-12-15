import { fireEvent, render, screen } from "@testing-library/react";

import Tabs from "./tabs";

const children = [
  <Tabs.Item key="1" name="Tab 1">
    Content of Tab 1
  </Tabs.Item>,
  <Tabs.Item key="2" name="Tab 2">
    Content of Tab 2
  </Tabs.Item>,
  <Tabs.Item key="3" name="Tab il était un petit navire">
    Content of Tab 3
  </Tabs.Item>,
  <Tabs.Item key="4" name="Tab 4">
    Content of Tab 4
  </Tabs.Item>,
];

describe("Tabs", () => {
  it("should render successfully", () => {
    render(<Tabs>{children}</Tabs>);

    expect(screen.getByRole("tablist")).toMatchSnapshot();
  });

  it("should work with defaultActiveKey", () => {
    render(<Tabs defaultActiveKey="3">{children}</Tabs>);

    expect(screen.getByRole("tablist")).toMatchSnapshot();
  });

  it("should handle click", () => {
    render(<Tabs defaultActiveKey="3">{children}</Tabs>);

    fireEvent.click(screen.getByTestId(2));
  });
});
