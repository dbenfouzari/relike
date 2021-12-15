import { Meta, Story } from "@storybook/react";

import TextButton, { TextButtonProps } from "./text-button";
import styles from "./text-button.stories.module.scss";

export default {
  title: "TextButton",
  component: TextButton,
  argTypes: {
    onPress: { control: { disable: true } },
    className: { control: { disable: true } },
  },
} as Meta<TextButtonProps>;

/**
 * Default TextButton template.
 *
 * @param {TextButtonProps} args The TextButton props.
 * @example
 * <Template>Hello</Template>
 * @returns {JSX.Element} The TextButton component.
 */
const Template: Story<TextButtonProps> = (args) => <TextButton {...args} />;
/**
 * Template with text content on both sides.
 *
 * @param {TextButtonProps} args The TextButton props.
 * @example
 * <Template>Hello</Template>
 * @returns {JSX.Element} The TextButton component.
 */
const WithContentTemplate: Story<TextButtonProps> = (args) => (
  <div>
    <span>Toto</span>
    <TextButton {...args} />
    <span>Tata</span>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello World",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  onPress: null,
};

export const WithContent = WithContentTemplate.bind({});
WithContent.args = {
  children: "Hello",
};

export const WithContentDisabled = WithContentTemplate.bind({});
WithContentDisabled.args = {
  children: "Hello",
  onPress: null,
};

export const WithCustomStyle = WithContentTemplate.bind({});
WithCustomStyle.args = {
  children: "Hello",
  className: styles.wrapper,
};

export const WithCustomStyleDisabled = WithContentTemplate.bind({});
WithCustomStyleDisabled.args = {
  children: "Hello",
  className: styles.wrapper,
  onPress: null,
};
