import { Colors, Margin, Padding } from "@hastics/utils";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Alignment from "../alignment";
import Container, { ContainerProps } from "./container";

export default {
  title: "Container",
  component: Container,
  argTypes: {
    color: { control: { disable: true } },
    margin: { control: { disable: true } },
    padding: { control: { disable: true } },
    children: { control: { disable: true } },
    width: { control: { type: "text" } },
    height: { control: { type: "text" } },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

const defaultProps: Partial<ContainerProps> = {
  color: Colors.blueGrey[200],
  children: <span>Hello, World !</span>,
  className: "",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
Default.argTypes = {
  alignment: { control: { disable: true } },
};

export const AsButton = Template.bind({});
AsButton.args = {
  ...defaultProps,
  padding: Padding.symmetric({ horizontal: 24, vertical: 12 }),
  as: "button",
};

export const WithFixedSize = Template.bind({});
WithFixedSize.args = {
  ...defaultProps,
  height: 200,
  width: 200,
  margin: Margin.all(24),
  padding: Padding.all(12),
};
WithFixedSize.argTypes = {
  alignment: { control: { disable: true } },
};

export const WithAlignment = Template.bind({});
WithAlignment.args = {
  ...defaultProps,
  height: 200,
  width: 200,
  margin: Margin.all(24),
  padding: Padding.all(12),
  alignment: Alignment.topRight,
};
