import { Meta, Story } from "@storybook/react";

import TextField, { TextFieldProps } from "./text-field";

export default {
  title: "TextField",
  component: TextField,
  args: {
    obscureText: false,
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<TextFieldProps>;

/**
 * Default TextField template.
 *
 * @param   {TextFieldProps} args The TextField props
 * @example
 * <Template obscureText />
 * @returns {JSX.Element}         The TextField component.
 */
const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Hello Storybook",
};
