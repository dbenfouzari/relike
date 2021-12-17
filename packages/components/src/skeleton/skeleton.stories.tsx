import { Meta, Story } from "@storybook/react";

import Colors from "../colors";
import Skeleton, { SkeletonProps } from "./skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
  argTypes: {
    children: { control: { disable: true } },
    color: { control: { disable: true } },
  },
} as Meta<SkeletonProps>;

/**
 * Default Skeleton template.
 *
 * @param   {SkeletonProps} args The Skeleton props.
 * @example
 * <Template {...skeletonProps} />
 * @returns {JSX.Element}        The JSX element.
 */
const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

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
