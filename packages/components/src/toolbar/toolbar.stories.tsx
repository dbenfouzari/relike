import { Meta, Story } from "@storybook/react";

import Icon from "../icon";
import Icons from "../icons";
import Toolbar, { ToolbarProps } from "./toolbar";

export default {
  title: "Toolbar",
  component: Toolbar,
  argTypes: {
    before: { control: { disable: true } },
    after: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as Meta<ToolbarProps>;

/**
 * Default template
 *
 * @param {ToolbarProps} args The toolbar props
 * @example
 * <Template children={<span>Hello</span>} />
 * @returns {JSX.Element} The Toolbar component.
 */
const Template: Story<ToolbarProps> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  before: <Icon icon={Icons.arrow_back_outlined} />,
  after: <Icon icon={Icons.person_search_rounded} />,
  children: <span>Hello Test World!</span>,
};
