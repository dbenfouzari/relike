import { Colors } from "@hastics/utils";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkbox, { CheckboxProps } from "./checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    color: { control: { disable: true } },
    classNames: { control: { disable: true } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

const defaultProps: Partial<CheckboxProps> = {
  color: Colors.blue[400],
  defaultChecked: false,
  disabled: false,
  label: "",
  className: "",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...defaultProps,
  label: "Checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultProps,
  disabled: true,
  label: "Checkbox",
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  ...defaultProps,
  defaultChecked: true,
  disabled: true,
  label: "Checkbox",
};
