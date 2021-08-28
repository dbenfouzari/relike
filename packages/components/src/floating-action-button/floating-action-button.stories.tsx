import { ComponentMeta, ComponentStory } from "@storybook/react";

import Colors from "../colors";
import Icons from "../icons";
import FloatingActionButton, { Emphasis } from "./floating-action-button";

export default {
  title: "FloatingActionButton",
  component: FloatingActionButton,
} as ComponentMeta<typeof FloatingActionButton>;

const Template: ComponentStory<typeof FloatingActionButton> = (args) => <FloatingActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  emphasis: Emphasis.high,
  label: "",
  disabled: false,
  mini: false,
  icon: Icons.add,
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
