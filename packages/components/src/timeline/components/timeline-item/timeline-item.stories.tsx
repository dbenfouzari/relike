import { Meta, Story } from "@storybook/react";

import TimelineItem, { TimelineItemProps } from "./timeline-item";

export default {
  title: "Timeline.Item",
  component: TimelineItem,
} as Meta<TimelineItemProps>;

/**
 * Default TimelineItem template.
 *
 * @param {TimelineItemProps} args The TimelineItem props.
 * @example
 * <Template>Hello</Template>
 * @returns {JSX.Element} the TimelineItem
 */
const Template: Story<TimelineItemProps> = (args) => <TimelineItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>Hello, World !</p>,
};
Default.parameters = {
  a11y: {
    // Instead, override rules 👇
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {
      rules: [
        {
          // Since it's a story only for the `li` element, we can disable this rule.
          id: "listitem",
          enabled: false,
        },
      ],
    },
  },
};
