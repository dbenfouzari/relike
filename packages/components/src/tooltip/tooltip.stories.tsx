import "./tooltip.stories.module.scss";

import { Colors } from "@hastics/utils";
import { Duration } from "@hastics/utils";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Container from "../container";
import Padding from "../padding";
import Tooltip, { TooltipPlacement } from "./tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    children: { control: { disable: true } },
    closeAfter: { control: { disable: true } },
    delay: { control: { disable: true } },
  },
  decorators: [(story) => <Container padding={Padding.all(96)}>{story()}</Container>],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Container width={200} height={200} color={Colors.blueGrey[400]} />,
  label: "Hello, Storybook",
  forceOpen: true,
  placement: TooltipPlacement.bottom,
  delay: Duration.milliseconds(500),
};

export const Right = Template.bind({});
Right.args = {
  children: <Container width={200} height={200} color={Colors.blueGrey[400]} />,
  label: "Hello, Storybook",
  forceOpen: true,
  placement: TooltipPlacement.right,
};

export const Top = Template.bind({});
Top.args = {
  children: <Container width={200} height={200} color={Colors.blueGrey[400]} />,
  label: "Hello, Storybook",
  forceOpen: true,
  placement: TooltipPlacement.top,
};

export const Left = Template.bind({});
Left.args = {
  children: <Container width={200} height={200} color={Colors.blueGrey[400]} />,
  label: "Hello, Storybook",
  forceOpen: true,
  placement: TooltipPlacement.left,
};

export const AutomaticallyClose = Template.bind({});
AutomaticallyClose.args = {
  children: <Container width={200} height={200} color={Colors.blueGrey[400]} />,
  label: "Hello, Storybook",
  forceOpen: false,
  placement: TooltipPlacement.bottom,
  closeAfter: Duration.seconds(1.5),
};
