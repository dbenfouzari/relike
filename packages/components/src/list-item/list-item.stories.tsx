import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import Avatar from "../avatar";
import Colors from "../colors";
import CrossAxisAlignment from "../cross-axis-alignment";
import Flex from "../flex";
import Icon from "../icon";
import Icons from "../icons";
import List from "../list";
import MainAxisAlignment from "../main-axis-alignment";
import Text from "../text";
import Typography from "../typography";
import ListItem, { ListItemProps } from "./list-item";
import classes from "./list-item.stories.module.scss";

export default {
  title: "ListItem",
  component: ListItem,
  parameters: {
    actions: { argTypesRegex: "^toto.*" },
  },
  argTypes: {
    children: { control: { disable: true } },
    onPress: { control: { disable: true } },
    left: { control: { disable: true } },
    right: { control: { disable: true } },
  },
  subcomponents: { List },
} as Meta<ListItemProps>;

/**
 * Default ListItem template
 *
 * @param {ListItemProps} args The props
 * @example
 * <Template {...listItemProps} />
 * @returns {JSX.Element} The JSX element
 */
const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Text>List Item</Text>,
};

export const WithContent = Template.bind({});
WithContent.args = {
  children: <Text>List Item</Text>,
  left: <Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />,
  right: <Icon icon={Icons.chat_bubble} color={Colors.black26} />,
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: <Text>List Item</Text>,
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
