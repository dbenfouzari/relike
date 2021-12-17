import { Meta, Story } from "@storybook/react";

import Duration from "../../../duration";
import LoaderScreen, { LoaderScreenProps } from "./loader-screen";

export default {
  title: "Loader.Screen",
  component: LoaderScreen,
  argTypes: {
    color1: { control: false },
    color2: { control: false },
    color3: { control: false },
    color4: { control: false },
  },
} as Meta<LoaderScreenProps>;

/**
 * Default LoaderScreen template.
 *
 * @param   {LoaderScreenProps} args The props
 * @example
 * <Template />
 * @returns {JSX.Element}            The LoaderScreen component
 */
const Template: Story<LoaderScreenProps> = (args) => <LoaderScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  animationDuration: new Duration({ seconds: 1 }),
};
