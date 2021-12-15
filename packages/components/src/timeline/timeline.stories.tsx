import { Meta, Story } from "@storybook/react";

import Colors from "../colors";
import Icon from "../icon";
import Icons from "../icons";
import Timeline, { TimelineProps } from "./timeline";

export default {
  title: "Timeline",
  component: Timeline,
  subcomponents: { "Timeline.Item": Timeline.Item },
  argTypes: {
    children: { control: { disable: true } },
  },
} as Meta<TimelineProps>;

/**
 * Default template for Timeline component.
 *
 * @param {TimelineProps} args The timeline props.
 * @example
 * <Template mode="left">
 *   <Template.Item>Toto</Template.Item>
 * </Template>
 * @returns {JSX.Element} The Timeline component.
 */
const Template: Story<TimelineProps> = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: "left",
  children: (
    <>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color={Colors.yellow[600]}>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color={Colors.purple[300]}>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3</p>
      </Timeline.Item>
      <Timeline.Item color={Colors.black54}>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3</p>
      </Timeline.Item>
    </>
  ),
};

export const CustomDot = Template.bind({});
CustomDot.args = {
  mode: "left",
  children: (
    <>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color={Colors.yellow[600]}>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color={Colors.purple[300]}>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3</p>
      </Timeline.Item>
      <Timeline.Item dot={<Icon icon={Icons.check_box} color={Colors.cyan[300]} />}>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3</p>
      </Timeline.Item>
    </>
  ),
};
