import { render } from "@testing-library/react";

import Colors from "../colors";
import Container from "../container";
import Tooltip from "./tooltip";

describe("Tooltip", () => {
  it("should render successfully", () => {
    const { container } = render(
      <Tooltip label="Hello Testing World">
        <Container width={200} height={200} color={Colors.blueGrey[400]} />
      </Tooltip>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
