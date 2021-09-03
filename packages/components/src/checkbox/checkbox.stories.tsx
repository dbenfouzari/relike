import { ComponentMeta, ComponentStory } from "@storybook/react";

import Colors from "../colors";
import Checkbox from "./checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    color: { control: { disable: true } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: Colors.blue[400],
  defaultChecked: false,
  disabled: false,
  label: "",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  color: Colors.blue[400],
  defaultChecked: false,
  disabled: false,
  label: "Checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: Colors.blue[400],
  defaultChecked: false,
  disabled: true,
  label: "Checkbox",
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  color: Colors.blue[400],
  defaultChecked: true,
  disabled: true,
  label: "Checkbox",
};
