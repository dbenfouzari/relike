import { render, screen } from "@testing-library/react";

import Colors from "../../../colors";
import { InternalStepperItem } from "./stepper-item";

it("should render successfully", () => {
  render(
    <InternalStepperItem
      title="Test"
      isCurrent
      isPast={false}
      titleColor={Colors.blue}
      primaryColor={Colors.blue}
      secondaryColor={Colors.red}
      disabledColor={Colors.grey}
      index={1}
    />,
  );

  expect(screen.getByRole("listitem")).toMatchSnapshot();
});
