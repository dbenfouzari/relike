import { Colors, Margin, Padding } from "@hastics/utils";
import { render } from "@testing-library/react";

import Container from "./container";

it("should render successfully without props", () => {
  render(<Container />);
});

it("should render successfully with all props", () => {
  render(
    <Container color={Colors.blueGrey[300]} height={100} width={100} padding={Padding.all(12)} margin={Margin.all(24)}>
      <p>Hello, Test</p>
    </Container>,
  );
});
