import { Colors } from "@hastics/utils";
import { render } from "@testing-library/react";

import Container from "../../../container";
import CrossAxisAlignment from "../../../cross-axis-alignment";
import MainAxisAlignment from "../../../main-axis-alignment";
import TextDirection from "../../../text-direction";
import FlexRow, { FlexRowProps } from "./flex-row";

const defaultProps: Partial<FlexRowProps> = {
  className: "",
  crossAxisAlignment: CrossAxisAlignment.center,
  mainAxisAlignment: MainAxisAlignment.start,
  textDirection: TextDirection.ltr,
  gap: 0,
};

describe("FlexRow", () => {
  it("should render successfully", () => {
    const { container } = render(
      <FlexRow {...defaultProps}>
        <Container width={100} height={100} color={Colors.red[300]} />
        <Container width={80} height={80} color={Colors.green[300]} />
        <Container width={60} height={60} color={Colors.blue[300]} />
      </FlexRow>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
