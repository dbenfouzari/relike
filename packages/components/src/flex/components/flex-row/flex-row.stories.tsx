import { Meta, Story } from "@storybook/react";

import Colors from "../../../colors";
import Container from "../../../container";
import CrossAxisAlignment from "../../../cross-axis-alignment";
import MainAxisAlignment from "../../../main-axis-alignment";
import TextDirection from "../../../text-direction";
import FlexRow, { FlexRowProps } from "./flex-row";

export default {
  title: "Flex.Row",
  component: FlexRow,
  argTypes: {
    children: { control: { disable: true } },
    crossAxisAlignment: { control: { type: "radio" } },
    mainAxisAlignment: { control: { type: "radio" } },
  },
} as Meta<FlexRowProps>;

/**
 * Default FlexRow template
 *
 * @param {FlexRowProps} args The props
 * @example
 * <Template {...args} />
 * @returns {JSX.Element} The FlexRow component
 */
const Template: Story<FlexRowProps> = (args) => (
  <Container width={500} height={500} color={Colors.grey[100]}>
    <FlexRow {...args} />
  </Container>
);

const defaultProps: Partial<FlexRowProps> = {
  className: "",
  crossAxisAlignment: CrossAxisAlignment.center,
  mainAxisAlignment: MainAxisAlignment.start,
  textDirection: TextDirection.ltr,
  gap: 0,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  children: (
    <>
      <Container width={100} height={100} color={Colors.red[300]} />
      <Container width={80} height={80} color={Colors.green[300]} />
      <Container width={60} height={60} color={Colors.blue[300]} />
    </>
  ),
};

export const WithGap = Template.bind({});
WithGap.args = {
  ...defaultProps,
  children: (
    <>
      <Container width={100} height={100} color={Colors.red[300]} />
      <Container width={80} height={80} color={Colors.green[300]} />
      <Container width={60} height={60} color={Colors.blue[300]} />
    </>
  ),
  gap: 10,
};

export const WithTupleGap = Template.bind({});
WithTupleGap.args = {
  ...defaultProps,
  children: (
    <>
      <Container width={100} height={100} color={Colors.red[300]} />
      <Container width={80} height={80} color={Colors.green[300]} />
      <Container width={60} height={60} color={Colors.blue[300]} />
    </>
  ),
  gap: [20, "20%"],
};
