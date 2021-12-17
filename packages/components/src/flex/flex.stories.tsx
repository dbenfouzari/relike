import { Meta, Story } from "@storybook/react";

import Axis from "../axis";
import Colors from "../colors";
import Container from "../container";
import CrossAxisAlignment from "../cross-axis-alignment";
import MainAxisAlignment from "../main-axis-alignment";
import TextDirection from "../text-direction";
import VerticalDirection from "../vertical-direction";
import Flex, { FlexProps } from "./flex";

export default {
  title: "Flex",
  component: Flex,
  argTypes: {
    children: { control: { disable: true } },
    crossAxisAlignment: { control: { type: "radio" } },
    mainAxisAlignment: { control: { type: "radio" } },
  },
} as Meta<FlexProps>;

/**
 * Default Flex template
 *
 * @param   {FlexProps}   args The props
 * @example
 * <Template {...args} />
 * @returns {JSX.Element}      The Flex component
 */
const Template: Story<FlexProps> = (args) => (
  <Container width={500} height={500} color={Colors.grey[100]}>
    <Flex {...args} />
  </Container>
);

const defaultProps: Partial<FlexProps> = {
  className: "",
  direction: Axis.horizontal,
  crossAxisAlignment: CrossAxisAlignment.center,
  mainAxisAlignment: MainAxisAlignment.start,
  textDirection: TextDirection.ltr,
  verticalDirection: VerticalDirection.down,
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
  className: undefined,
};
