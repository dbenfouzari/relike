import "./text.stories.module.scss";

import { Colors } from "@hastics/utils";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import FontWeight from "../font-weight";
import TextOverflow from "../text-overflow";
import TextStyle from "../text-style";
import Typography from "../typography";
import Text from "./text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello, Storybook!",
};

export const Headline1 = Template.bind({});
Headline1.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.headline1,
};

export const Headline2 = Template.bind({});
Headline2.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.headline2,
};

export const Headline3 = Template.bind({});
Headline3.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.headline3,
};

export const Headline4 = Template.bind({});
Headline4.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.headline4,
};

export const Headline5 = Template.bind({});
Headline5.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.headline5,
};

export const Headline6 = Template.bind({});
Headline6.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.headline6,
};

export const BodyText1 = Template.bind({});
BodyText1.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.bodyText1,
};

export const BodyText2 = Template.bind({});
BodyText2.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.bodyText2,
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.subtitle1,
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.subtitle2,
};

export const Button = Template.bind({});
Button.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.button,
};

export const Caption = Template.bind({});
Caption.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.caption,
};

export const Overline = Template.bind({});
Overline.args = {
  children: "Hello, Storybook!",
  style: Typography.blackMountainView.overline,
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  children: "Hello, Storybook!",
  style: new TextStyle({
    backgroundColor: Colors.black12,
    color: Colors.grey[800],
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: FontWeight.bold,
    height: 2,
    letterSpacing: -2,
    overflow: TextOverflow.clip,
    wordSpacing: 30,
  }),
};
