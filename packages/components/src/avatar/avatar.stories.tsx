import { ComponentMeta, ComponentStory } from "@storybook/react";

import Colors from "../colors";
import Icon from "../icon";
import Icons from "../icons";
import Avatar, { AvatarProps } from "./avatar";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const defaultProps: Partial<AvatarProps> = {
  src: undefined,
  children: undefined,
  alt: undefined,
  className: "",
  size: "m",
  sizes: undefined,
  srcSet: undefined,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  src: "https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg",
  alt: "Someone",
  children: undefined,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultProps,
  src: undefined,
  sizes: undefined,
  srcSet: undefined,
  alt: undefined,
  children: <Icon icon={Icons.folder} color={Colors.white} />,
  color: Colors.black87,
};

export const WithText = Template.bind({});
WithText.args = {
  ...defaultProps,
  src: undefined,
  sizes: undefined,
  srcSet: undefined,
  alt: undefined,
  children: <span>D</span>,
};
