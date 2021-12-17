import { Meta, Story } from "@storybook/react";

import { EXCLUDED_CONTROLS } from "../../.storybook/constants";
import Colors from "../colors";
import Icons, { IconData } from "../icons";
import Icon, { IconProps } from "./icon";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(Icons),
      control: { type: "select" },
    },
  },
  parameters: {
    controls: {
      exclude: [...EXCLUDED_CONTROLS, "color"],
    },
  },
} as Meta<IconProps>;

/** Defines default template args */
type TemplateArgs = Omit<IconProps, "icon"> & {
  /** The icon name */
  icon: IconData["name"];
};

/**
 * Default Icon template.
 *
 * We pass icon name instead of icon to be able to work with Storybook controls.
 *
 * @param   {TemplateArgs} props The props
 * @example
 * <Template icon={Icons.access_time.name} />
 * @returns {JSX.Element}        The Icon component
 */
const Template: Story<TemplateArgs> = ({ icon, ...args }) => {
  const originalIcon = Icons[icon as keyof Icons];

  return <Icon icon={originalIcon} {...args} />;
};

/**
 * Icon template with custom red color.
 *
 * We pass icon name instead of icon to be able to work with Storybook controls.
 *
 * @param   {TemplateArgs} props The props
 * @example
 * <WithCustomColorTemplate icon={Icons.access_time.name} />
 * @returns {JSX.Element}        The Icon component
 */
const WithCustomColorTemplate: Story<TemplateArgs> = ({ icon, ...args }) => {
  const originalIcon = Icons[icon as keyof Icons];

  return <Icon color={Colors.red[500]} icon={originalIcon} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  icon: Icons.access_time.name,
  size: 140,
};

export const WithCustomColor = WithCustomColorTemplate.bind({});
WithCustomColor.args = {
  disabled: false,
  icon: Icons.access_time.name,
  size: 140,
};
