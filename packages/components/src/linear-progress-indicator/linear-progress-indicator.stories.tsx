import { Meta, Story } from "@storybook/react";
import { animated, config, useSpring } from "react-spring";

import Duration from "../duration";
import LinearProgressIndicator, { LinearProgressIndicatorProps } from "./linear-progress-indicator";

export default {
  title: "LinearProgressIndicator",
  component: LinearProgressIndicator,
  argTypes: {
    backgroundColor: { control: { disable: true } },
    color: { control: { disable: true } },
  },
} as Meta<LinearProgressIndicatorProps>;

const AnimatedLinearProgressIndicator = animated(LinearProgressIndicator);

/**
 * This is a simple animated component.
 * It uses `react-spring` to handle animation.
 *
 * @param   {LinearProgressIndicatorProps} props The props.
 * @example
 * <AnimatedComponent {...props} />
 * @returns {JSX.Element}                        An animated LinearProgressIndicator
 */
const AnimatedComponent = (props: LinearProgressIndicatorProps) => {
  const { value } = useSpring({
    from: { value: 0 },
    to: { value: 100 },
    loop: true,
    config: { ...config.molasses, duration: Duration.seconds(5).inMilliseconds },
  });

  return <AnimatedLinearProgressIndicator {...props} value={value.to((x) => x)} />;
};

/**
 * Default LinearProgressIndicator template
 *
 * @param   {LinearProgressIndicatorProps} args The props.
 * @example
 * <Template {...props} />
 * @returns {JSX.Element}                       The LinearProgressIndicator component
 */
const Template: Story<LinearProgressIndicatorProps> = (args) => <LinearProgressIndicator {...args} />;

/**
 * AnimatedLinearProgressIndicator template
 *
 * @param   {LinearProgressIndicatorProps} args The props.
 * @example
 * <AnimatedTemplate {...props} />
 * @returns {JSX.Element}                       The AnimatedLinearProgressIndicator component
 */
const AnimatedTemplate: Story<LinearProgressIndicatorProps> = (args) => <AnimatedComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 40,
  height: 4,
};

export const Animated = AnimatedTemplate.bind({});
Animated.args = {
  height: 4,
};
Animated.argTypes = {
  value: { control: { disable: true } },
};
Animated.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true },
};
