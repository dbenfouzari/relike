import "./tooltip.stories.module.scss";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Colors from "../colors";
import Container from "../container";
import Duration from "../duration";
import Tooltip, { TooltipPlacement } from "./tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    children: { control: { disable: true } },
    closeAfter: { control: { disable: true } },
    delay: { control: { disable: true } },
  },
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
