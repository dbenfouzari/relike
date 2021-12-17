import { Meta, Story } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";

import Axis from "../../../axis";
import Colors from "../../../colors";
import Icon from "../../../icon";
import Icons from "../../../icons";
import Padding from "../../../padding";
import GridViewCount, { GridViewCountProps } from "./grid-view-count";

/**
 * Helper to generate grid view items.
 *
 * @param {number} n Number of items to generate.
 * @example
 * generateItems(32)
 * @returns {JSX.Element[]} The items.
 */
const generateItems = (n: number) =>
  Array.from({ length: n }, (_, index) => {
    const color = isChromatic() ? Colors.grey : Colors.primaries[Math.floor(Math.random() * Colors.primaries.length)];

    return (
      <div key={index} style={{ backgroundColor: color["400"].toRGBA() }}>
        <div>
          <Icon icon={Icons.person} />
          Item {index}
        </div>
      </div>
    );
  });

export default {
  title: "GridView.Count",
  component: GridViewCount,
  parameters: {
    layout: "fullscreen",
    viewport: {
      /**
       * Large mobile
       *
       * @see https://github.com/storybookjs/storybook/blob/main/addons/viewport/src/defaults.ts#L176
       */
      defaultViewport: "mobile2",
    },
  },
  argTypes: {
    padding: { control: { disable: true } },
    className: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as Meta<GridViewCountProps>;

/**
 * Default GridViewCount template
 *
 * @param {GridViewCountProps} args The props
 * @example
 * <Template {...args} />
 * @returns {JSX.Element} The GridViewCount
 */
const Template: Story<GridViewCountProps> = (args) => <GridViewCount {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: generateItems(4),
  crossAxisCount: 4,
  crossAxisSpacing: 10,
  mainAxisSpacing: 10,
  padding: Padding.all(20),
  scrollDirection: Axis.vertical,
};

export const WithMultipleElements = Template.bind({});
WithMultipleElements.args = {
  children: generateItems(32),
  crossAxisCount: 4,
  crossAxisSpacing: 10,
  mainAxisSpacing: 10,
  padding: Padding.all(20),
  scrollDirection: Axis.vertical,
};
