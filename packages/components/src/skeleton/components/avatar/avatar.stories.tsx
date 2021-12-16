import { Meta, Story } from "@storybook/react";

import SkeletonContext from "../../context/skeleton-context";
import SkeletonAvatar, { SkeletonAvatarProps } from "./avatar";

export default {
  title: "Skeleton.Avatar",
  component: SkeletonAvatar,
  argTypes: {
    size: {
      options: ["small", "default", "large", undefined],
      control: { type: "radio" },
    },
    color: { control: { disable: true } },
  },
} as Meta<SkeletonAvatarProps>;

/**
 * Default SkeletonAvatar template
 *
 * @param {SkeletonAvatarProps} args The props
 * @example
 * <Template />
 * @returns {JSX.Element} The JSX element.
 */
const Template: Story<SkeletonAvatarProps> = (args) => <SkeletonAvatar {...args} />;

/**
 * Active SkeletonAvatar template
 *
 * @param {SkeletonAvatarProps} args The props
 * @example
 * <Template />
 * @returns {JSX.Element} The JSX element.
 */
const ActiveTemplate: Story<SkeletonAvatarProps> = (args) => (
  <SkeletonContext.Provider value={{ active: true }}>
    <SkeletonAvatar {...args} />
  </SkeletonContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
  shape: "circle",
  size: "default",
};

export const Active = ActiveTemplate.bind({});
Active.args = {
  shape: "circle",
  size: "default",
};

export const WithAnotherColor = Template.bind({});
WithAnotherColor.args = {
  shape: "circle",
  size: "default",
};

export const WithCustomSizes = Template.bind({});
WithCustomSizes.args = {
  shape: "circle",
  size: "default",
  sizes: {
    small: 124,
    default: 132,
    large: 140,
  },
};
