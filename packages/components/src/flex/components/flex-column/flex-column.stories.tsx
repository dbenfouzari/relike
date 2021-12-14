import { ComponentMeta, ComponentStory } from "@storybook/react";

import Colors from "../../../colors";
import Container from "../../../container";
import CrossAxisAlignment from "../../../cross-axis-alignment";
import MainAxisAlignment from "../../../main-axis-alignment";
import VerticalDirection from "../../../vertical-direction";
import FlexColumn, { FlexColumnProps } from "./flex-column";

export default {
  title: "Flex.Column",
  component: FlexColumn,
  argTypes: {
    children: { control: { disable: true } },
    crossAxisAlignment: { control: { type: "radio" } },
    mainAxisAlignment: { control: { type: "radio" } },
  },
} as ComponentMeta<typeof FlexColumn>;

const Template: ComponentStory<typeof FlexColumn> = (args) => (
  <Container width={500} height={500} color={Colors.grey[100]}>
    <FlexColumn {...args} />
  </Container>
);

const defaultProps: Partial<FlexColumnProps> = {
  className: "",
  crossAxisAlignment: CrossAxisAlignment.center,
  mainAxisAlignment: MainAxisAlignment.start,
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
};
