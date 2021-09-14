import { Colors } from "@hastics/utils";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Skeleton, { SkeletonProps } from "./skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
  argTypes: {
    children: { control: { disable: true } },
    color: { control: { disable: true } },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

const defaultProps: Partial<SkeletonProps> = {
  active: false,
  color: Colors.grey[200],
  avatar: false,
  paragraph: true,
};

export const Default = Template.bind({});
Default.args = defaultProps;

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  ...defaultProps,
  children: undefined,
  active: true,
  avatar: true,
  color: Colors.red[200],
  paragraph: {
    rows: 3,
  },
};

export const WithCustomChildren = Template.bind({});
WithCustomChildren.args = {
  ...defaultProps,
  children: (
    <>
      <Skeleton.Avatar />
      <Skeleton.Title />
      <Skeleton.Paragraph rows={1} />
    </>
  ),
  active: true,
};
