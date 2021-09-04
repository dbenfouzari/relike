import { ComponentMeta, ComponentStory } from "@storybook/react";

import Divider from "./divider";

export default {
  title: "Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

const CompleteTemplate: ComponentStory<typeof Divider> = (args) => (
  <ul>
    <li>List item 1</li>
    <Divider {...args} />
    <li>List item 2</li>
    <Divider {...args} />
    <li>List item 3</li>
    <Divider {...args} />
    <li>List item 4</li>
    <Divider {...args} />
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
