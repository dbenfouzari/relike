import { Meta, Story } from "@storybook/react";

import Divider, { DividerProps } from "./divider";

export default {
  title: "Divider",
  component: Divider,
} as Meta<DividerProps>;

/**
 * Default Divider template.
 *
 * @param {DividerProps} args The props
 * @example
 * <Template />
 * @returns {JSX.Element} The Divider component.
 */
const Template: Story<DividerProps> = (args) => <Divider {...args} />;

/**
 * Complete Divider template.
 *
 * @param {DividerProps} args The props
 * @example
 * <Template />
 * @returns {JSX.Element} The Divider component.
 */
const CompleteTemplate: Story<DividerProps> = (args) => (
  <ul>
    <li>
      List item 1 <Divider {...args} />
    </li>
    <li>
      List item 2 <Divider {...args} />
    </li>
    <li>
      List item 3 <Divider {...args} />
    </li>
    <li>
      List item 4 <Divider {...args} />
    </li>
    <li>List item 5</li>
  </ul>
);

export const DarkVariant = Template.bind({});
DarkVariant.args = {
  variant: "dark",
};

export const LightVariant = Template.bind({});
LightVariant.args = {
  variant: "light",
};
LightVariant.parameters = {
  backgrounds: {
    default: "dark",
  },
};

export const WithContent = CompleteTemplate.bind({});
WithContent.args = {
  variant: "dark",
};
