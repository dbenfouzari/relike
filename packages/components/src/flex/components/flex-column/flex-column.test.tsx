import { render, screen } from "@testing-library/react";

import Colors from "../../../colors";
import Container from "../../../container";
import CrossAxisAlignment from "../../../cross-axis-alignment";
import MainAxisAlignment from "../../../main-axis-alignment";
import VerticalDirection from "../../../vertical-direction";
import FlexColumn, { FlexColumnProps } from "./flex-column";

const defaultProps: Partial<FlexColumnProps> = {
  className: "",
  crossAxisAlignment: CrossAxisAlignment.center,
  mainAxisAlignment: MainAxisAlignment.start,
  verticalDirection: VerticalDirection.down,
  gap: 0,
};

describe("FlexColumn", () => {
  it("should render successfully", () => {
    render(
      <FlexColumn {...defaultProps}>
        <Container width={100} height={100} color={Colors.red[300]} />
        <Container width={80} height={80} color={Colors.green[300]} />
        <Container width={60} height={60} color={Colors.blue[300]} />
      </FlexColumn>,
    );

    expect(screen.getByTestId("flex-item")).toMatchSnapshot();
  });
});
