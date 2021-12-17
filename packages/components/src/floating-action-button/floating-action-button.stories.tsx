import { Meta, Story } from "@storybook/react";

import Colors from "../colors";
import { Emphasis } from "../emphasis";
import Icons from "../icons";
import FloatingActionButton, { FloatingActionButtonProps } from "./floating-action-button";

export default {
  title: "FloatingActionButton",
  component: FloatingActionButton,
  argTypes: {
    color: { control: { disable: true } },
    icon: { control: { disable: true } },
  },
} as Meta<FloatingActionButtonProps>;

/**
 * Default FAB template
 *
 * @param   {FloatingActionButtonProps} args The props
 * @example
 * <Template {...args} />
 * @returns {JSX.Element}                    The FAB
 */
const Template: Story<FloatingActionButtonProps> = (args) => <FloatingActionButton {...args} />;

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
