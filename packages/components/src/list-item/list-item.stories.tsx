import { Colors } from "@hastics/utils";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Avatar from "../avatar";
import CrossAxisAlignment from "../cross-axis-alignment";
import Flex from "../flex";
import Icon from "../icon";
import Icons from "../icons";
import MainAxisAlignment from "../main-axis-alignment";
import Text from "../text";
import Typography from "../typography";
import ListItem from "./list-item";
import classes from "./list-item.stories.module.scss";

export default {
  title: "ListItem",
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "List Item",
};

export const WithContent = Template.bind({});
WithContent.args = {
  children: "List Item",
  left: <Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />,
  right: <Icon icon={Icons.chat_bubble} color={Colors.black26} />,
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: "List Item",
  left: <Avatar src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />,
  right: <Icon icon={Icons.chat_bubble} color={Colors.black26} />,
  onPress: action("click"),
};

export const WithMultipleLines = Template.bind({});
WithMultipleLines.args = {
  children: (
    <Flex.Column
      mainAxisAlignment={MainAxisAlignment.spaceEvenly}
      crossAxisAlignment={CrossAxisAlignment.start}
      className={classes.content}
    >
      <Text>John Doe</Text>
      <Text style={Typography.blackMountainView.bodyText2?.copyWith({ color: Colors.black54 })}>Hey Storybook !</Text>
    </Flex.Column>
  ),
  left: <Avatar src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />,
  right: <Icon icon={Icons.chat_bubble} color={Colors.black26} />,
  onPress: action("click"),
};
