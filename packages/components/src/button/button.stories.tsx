import { Meta, Story } from "@storybook/react";

import Colors from "../colors";
import { Emphasis } from "../emphasis";
import Flex from "../flex";
import Icons from "../icons";
import ThemeData from "../theme-data";
import ThemeProvider from "../theme-provider";
import Typography from "../typography";
import Button, { ButtonProps } from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: { control: { disable: true } },
    icon: { control: { disable: true } },
  },
} as Meta<ButtonProps>;

/**
 * Template that exposes 3 emphasis button
 *
 * @param   {ButtonProps} args The props
 * @example
 * <ExpoTemplate {...args} />
 * @returns {JSX.Element}      The row of Buttons
 */
const ExpoTemplate: Story<ButtonProps> = (args) => (
  <Flex.Row gap={8}>
    <Button {...args} emphasis={Emphasis.low} />
    <Button {...args} emphasis={Emphasis.medium} />
    <Button {...args} emphasis={Emphasis.high} />
  </Flex.Row>
);

/**
 * Default Button template
 *
 * @param   {ButtonProps} args The props
 * @example
 * <Template {...args} />
 * @returns {JSX.Element}      The Button component
 */
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const defaultProps: Partial<ButtonProps> = {
  disabled: false,
  block: false,
  className: "",
};

export const Default = ExpoTemplate.bind({});
Default.args = {
  ...defaultProps,
  children: "Button",
};
Default.argTypes = {
  emphasis: { control: { disable: true } },
};

export const WithThemeProvider = Template.bind({});
WithThemeProvider.args = {
  ...defaultProps,
  children: "Button",
};
WithThemeProvider.decorators = [
  (story) => (
    <ThemeProvider value={new ThemeData({ primarySwatch: Colors.green, textTheme: Typography.blackMountainView })}>
      {story()}
    </ThemeProvider>
  ),
];

export const LowEmphasis = Template.bind({});
LowEmphasis.args = {
  ...defaultProps,
  children: "Button",
  emphasis: Emphasis.low,
};
LowEmphasis.parameters = {
  docs: {
    description: {
      story: "Text buttons are typically used for less important actions.",
    },
  },
};

export const MediumEmphasis = Template.bind({});
MediumEmphasis.args = {
  ...defaultProps,
  children: "Button",
  emphasis: Emphasis.medium,
};
MediumEmphasis.parameters = {
  docs: {
    description: {
      story: "Outlined buttons are used for more emphasis than text buttons due to the stroke.",
    },
  },
};

export const HighEmphasis = Template.bind({});
HighEmphasis.args = {
  ...defaultProps,
  children: "Button",
  emphasis: Emphasis.high,
};
HighEmphasis.parameters = {
  docs: {
    description: {
      story: "Contained buttons have more emphasis, as they use a color fill and shadow.",
    },
  },
};

export const WithWhiteColor = Template.bind({});
WithWhiteColor.args = {
  ...defaultProps,
  children: "Button",
  color: Colors.white,
  emphasis: Emphasis.high,
};

export const WithBrightColor = Template.bind({});
WithBrightColor.args = {
  ...defaultProps,
  children: "Button",
  color: Colors.pink[200],
  emphasis: Emphasis.high,
};

export const WithIcon = ExpoTemplate.bind({});
WithIcon.args = {
  ...defaultProps,
  children: "Button",
  emphasis: Emphasis.high,
  icon: Icons.star,
};
WithIcon.argTypes = {
  emphasis: { control: { disable: true } },
};

export const Block = Template.bind({});
Block.args = {
  ...defaultProps,
  children: "Button",
  emphasis: Emphasis.high,
  icon: Icons.star,
  block: true,
};
