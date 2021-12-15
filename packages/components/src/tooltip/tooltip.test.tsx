import { render, screen } from "@testing-library/react";
import { createRef } from "react";

import Colors from "../colors";
import Container from "../container";
import Tooltip from "./tooltip";

const ref = createRef<HTMLDivElement>();

jest.mock("uid", () => ({
  /**
   * Returns a mocked unique ID
   *
   * @example
   * uid(); // 123456
   * @returns {string} a string
   */
  uid: () => "123456",
}));

describe("Tooltip", () => {
  it("should render successfully", () => {
    render(
      <Tooltip ref={ref} label="Hello Testing World" forceOpen>
        <Container width={200} height={200} color={Colors.blueGrey[400]} />
      </Tooltip>,
    );

    expect(screen.getByRole("tooltip")).toMatchSnapshot();
  });
});
