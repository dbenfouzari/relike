import { Meta, Story } from "@storybook/react";

import SkeletonTitle from "./title";

export default {
  title: "Skeleton.Title",
  component: SkeletonTitle,
} as Meta;

/**
 * Default SkeletonTitle template.
 *
 * @example
 * <Template />
 * @returns {JSX.Element} The JSX element.
 */
const Template: Story = () => <SkeletonTitle />;

export const Default = Template.bind({});
Default.args = {};
