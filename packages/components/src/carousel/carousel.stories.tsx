import { Meta, Story } from "@storybook/react";
import { CSSProperties } from "react";

import Colors from "../colors";
import Carousel, { CarouselProps } from "./carousel";

export default {
  title: "Carousel",
  component: Carousel,
  decorators: [(story) => <div style={{ maxWidth: 600 }}>{story()}</div>],
  argTypes: {
    children: { control: { disable: true } },
  },
} as Meta<CarouselProps>;

/**
 * Default Carousel template.
 *
 * @param {CarouselProps} args The props
 * @example
 * <Template {...} />
 * @returns {JSX.Element} The Carousel component
 */
const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

const styles: Record<string, CSSProperties> = {
  element: {
    width: "20rem",
    height: "12rem",
    borderRadius: 4,
    backgroundColor: Colors.grey[200].toRGBA(),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const Default = Template.bind({});
Default.args = {
  children: [
    <div key={1} style={styles.element}>
      Example 1
    </div>,
    <div key={2} style={styles.element}>
      Example 2
    </div>,
    <div key={3} style={styles.element}>
      Example 3
    </div>,
    <div key={4} style={styles.element}>
      Example 4
    </div>,
    <div key={5} style={styles.element}>
      Example 5
    </div>,
    <div key={6} style={styles.element}>
      Example 6
    </div>,
    <div key={7} style={styles.element}>
      Example 7
    </div>,
  ],
  gap: 12,
};

export const WithSingleChild = Template.bind({});
WithSingleChild.args = {
  children: (
    <div key={1} style={styles.element}>
      Example 1
    </div>
  ),
};
