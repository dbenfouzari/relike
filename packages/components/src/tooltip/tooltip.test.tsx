import { Colors } from "@hastics/utils";
import { render } from "@testing-library/react";
import { createRef } from "react";

import Container from "../container";
import Tooltip from "./tooltip";

const ref = createRef<HTMLDivElement>();

describe("Tooltip", () => {
  it("should render successfully", () => {
    const { container } = render(
      <Tooltip ref={ref} label="Hello Testing World" forceOpen>
        <Container width={200} height={200} color={Colors.blueGrey[400]} />
      </Tooltip>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
