import { render } from "@testing-library/react";

import Axis from "../axis";
import Colors from "../colors";
import Container from "../container";
import CrossAxisAlignment from "../cross-axis-alignment";
import MainAxisAlignment from "../main-axis-alignment";
import TextDirection from "../text-direction";
import VerticalDirection from "../vertical-direction";
import Flex, { FlexProps } from "./flex";

const defaultProps: Partial<FlexProps> = {
  className: "",
  direction: Axis.horizontal,
  crossAxisAlignment: CrossAxisAlignment.center,
  mainAxisAlignment: MainAxisAlignment.start,
  textDirection: TextDirection.ltr,
  verticalDirection: VerticalDirection.down,
  gap: 10,
};

describe("Flex", () => {
  it("should render successfully", () => {
    const { container } = render(
      <Flex {...defaultProps}>
        <Container width={100} height={100} color={Colors.red[300]} />
        <Container width={80} height={80} color={Colors.green[300]} />
        <Container width={60} height={60} color={Colors.blue[300]} />
      </Flex>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with array gap", () => {
    const { container } = render(
      <Flex {...defaultProps} gap={[30, "20%"]}>
        <Container width={100} height={100} color={Colors.red[300]} />
        <Container width={80} height={80} color={Colors.green[300]} />
        <Container width={60} height={60} color={Colors.blue[300]} />
      </Flex>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
