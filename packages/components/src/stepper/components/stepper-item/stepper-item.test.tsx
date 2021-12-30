import { render, screen } from "@testing-library/react";

import Colors from "../../../colors";
import { InternalStepperItem, InternalStepperItemProps, StepperItem } from "./stepper-item";

/**
 * Set up InternalStepperItem tests
 *
 * @param   {Partial<InternalStepperItemProps>} props The props
 * @returns {void}                                    The result
 * @example
 * setup()
 */
const setup = (props: Partial<InternalStepperItemProps> = {}) => {
  const mergedProps: InternalStepperItemProps = {
    title: "Test",
    isCurrent: true,
    isPast: false,
    titleColor: Colors.blue,
    primaryColor: Colors.blue,
    secondaryColor: Colors.red,
    disabledColor: Colors.grey,
    index: 1,
    ...props,
  };

  render(<InternalStepperItem {...mergedProps} />);
};

describe("Components/StepperItem", () => {
  it("StepperItem should render null", () => {
    const { container } = render(<StepperItem title="Zbra" />);

    // Disable ESLint because I want to test that it renders nothing.
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBe(null);
  });

  it("should render successfully", () => {
    setup();

    expect(screen.getByRole("listitem")).toMatchSnapshot();
  });

  it("should render successfully when is past", () => {
    setup({ isPast: true });

    expect(screen.getByRole("listitem")).toMatchSnapshot();
  });
});
