import { Meta, Story } from "@storybook/react";

import Colors from "../../../colors";
import Skeleton from "../../skeleton";
import SkeletonParagraph, { SkeletonParagraphProps } from "./paragraph";

export default {
  title: "Skeleton.Paragraph",
  component: SkeletonParagraph,
} as Meta<SkeletonParagraphProps<number>>;

/**
 * Default SkeletonParagraph template
 *
 * @param   {SkeletonParagraphProps<number>} args
 *                                                The props
 * @example
 * <Template />
 * @returns {JSX.Element}                         The JSX element
 */
const Template: Story<SkeletonParagraphProps<number>> = (args) => <SkeletonParagraph {...args} />;

/**
 * Template with active Skeleton. It animates the children.
 *
 * @param   {SkeletonParagraphProps<number>} args
 *                                                The props
 * @example
 * <Template />
 * @returns {JSX.Element}                         The JSX element
 */
const ActiveTemplate: Story<SkeletonParagraphProps<number>> = (args) => (
  <Skeleton active>
    <SkeletonParagraph {...args} />
  </Skeleton>
);

/**
 * Template with active Skeleton and custom color.
 *
 * @param   {SkeletonParagraphProps<number>} args
 *                                                The props
 * @example
 * <Template />
 * @returns {JSX.Element}                         The JSX element
 */
const CustomColorTemplate: Story<SkeletonParagraphProps<number>> = (args) => (
  <Skeleton active color={Colors.red[200]}>
    <SkeletonParagraph {...args} />
  </Skeleton>
);

export const Default = Template.bind({});
Default.args = {
  rows: 1,
};

export const Active = ActiveTemplate.bind({});
Active.args = {
  rows: 1,
};

export const WithAnotherColor = CustomColorTemplate.bind({});
WithAnotherColor.args = {
  rows: 1,
};
