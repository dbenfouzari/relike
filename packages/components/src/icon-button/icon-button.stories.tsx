import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import Icon from "../icon";
import Icons from "../icons";
import Padding from "../padding";
import IconButton, { IconButtonProps } from "./icon-button";

export default {
  title: "IconButton",
  component: IconButton,
  subcomponents: { Icon },
  argTypes: {
    icon: { control: { disable: true } },
    onPress: { control: { disable: true } },
    padding: { control: { disable: true } },
    className: { control: { disable: true } },
  },
  parameters: {
    // Below is a hack to override default call to `action` on the `onChange` handler
    actions: { argTypesRegex: "^toto.*" },
  },
} as Meta<IconButtonProps>;

/**
 * Default IconButton template
 *
 * @param   {IconButtonProps} args The props
 * @example
 * <Template {...iconButtonProps} />
 * @returns {JSX.Element}          The IconButton
 */
const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Icon icon={Icons.ring_volume} />,
  onPress: action("Press icon"),
  padding: Padding.all(8),
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <Icon icon={Icons.ring_volume} />,
  onPress: undefined,
  padding: Padding.all(8),
};
