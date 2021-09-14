import { Colors } from "@hastics/utils";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Icons from "../icons";
import FloatingActionButton, { Emphasis, FloatingActionButtonProps } from "./floating-action-button";

export default {
  title: "FloatingActionButton",
  component: FloatingActionButton,
  argTypes: {
    color: { control: { disable: true } },
    icon: { control: { disable: true } },
  },
} as ComponentMeta<typeof FloatingActionButton>;

const Template: ComponentStory<typeof FloatingActionButton> = (args) => <FloatingActionButton {...args} />;

const defaultProps: Partial<FloatingActionButtonProps> = {
  emphasis: Emphasis.high,
  label: "",
  disabled: false,
  mini: false,
  icon: Icons.add,
  color: Colors.blue[500],
  className: "",
  block: false,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Extended = Template.bind({});
Extended.args = {
  emphasis: Emphasis.high,
  disabled: false,
  mini: true,
  icon: Icons.check,
  color: Colors.black87,
  label: "See all results",
};
