import { ComponentMeta, ComponentStory } from "@storybook/react";

import Colors from "../colors";
import Loader, { LoaderProps } from "./loader";

export default {
  title: "Loader",
  component: Loader,
  argTypes: {
    color: {
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

const defaultProps: Partial<LoaderProps> = {
  color: Colors.blue[500],
  size: 16,
  thickness: 2,
  className: "",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const WithAnotherColor = Template.bind({});
WithAnotherColor.args = {
  ...defaultProps,
  color: Colors.blueGrey[500],
};

export const WithAnotherSize = Template.bind({});
WithAnotherSize.args = {
  ...defaultProps,
  size: 62,
  thickness: 8,
};
