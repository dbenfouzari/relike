import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from "../icon";
import Icons from "../icons";
import Toolbar from "./toolbar";

export default {
  title: "Toolbar",
  component: Toolbar,
  argTypes: {
    before: { control: { disable: true } },
    after: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  before: <Icon icon={Icons.arrow_back_outlined} />,
  after: <Icon icon={Icons.person_search_rounded} />,
  children: <span>Hello Test World!</span>,
};
