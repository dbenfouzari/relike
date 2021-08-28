import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button, { Emphasis } from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: { control: { disable: true } },
  },
} as ComponentMeta<typeof Button>;

const ExpoTemplate: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args} emphasis={Emphasis.low} />
    <Button {...args} emphasis={Emphasis.medium} />
    <Button {...args} emphasis={Emphasis.high} />
  </div>
);
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = ExpoTemplate.bind({});
Default.args = {
  children: "Button",
};
Default.argTypes = {
  emphasis: { control: { disable: true } },
};

export const LowEmphasis = Template.bind({});
LowEmphasis.args = {
  children: "Button",
  emphasis: Emphasis.low,
};

export const MediumEmphasis = Template.bind({});
MediumEmphasis.args = {
  children: "Button",
  emphasis: Emphasis.medium,
};

export const HighEmphasis = Template.bind({});
HighEmphasis.args = {
  children: "Button",
  emphasis: Emphasis.high,
};
