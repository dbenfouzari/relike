import { Meta, Story } from "@storybook/react";

import Avatar from "../avatar";
import Colors from "../colors";
import Icon from "../icon";
import Icons from "../icons";
import { Size } from "../size";
import Text from "../text";
import List, { ListProps } from "./list";

export default {
  title: "List",
  component: List,
  argTypes: {
    children: { control: { disable: true } },
  },
  subcomponents: {
    ListItem: List.Item,
  },
} as Meta<ListProps>;

/**
 * Default List template.
 *
 * @param   {ListProps}   args The props
 * @example
 * <Template {...listProps} />
 * @returns {JSX.Element}      The JSX element
 */
const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<List.Item>Hello</List.Item>, <List.Item>Storybook</List.Item>],
};

export const WithComplexItems = Template.bind({});
WithComplexItems.args = {
  children: [
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
  ],
};

export const WithSizeTiny = Template.bind({});
WithSizeTiny.args = {
  children: [
    <List.Item size={Size.tiny} right={<Icon icon={Icons.chat_bubble} color={Colors.black26} size={18} />}>
      <Text>List Item</Text>
    </List.Item>,
    <List.Item size={Size.tiny} right={<Icon icon={Icons.chat_bubble} color={Colors.black26} size={18} />}>
      <Text>List Item</Text>
    </List.Item>,
    <List.Item size={Size.tiny} right={<Icon icon={Icons.chat_bubble} color={Colors.black26} size={18} />}>
      <Text>List Item</Text>
    </List.Item>,
  ],
};

export const WithSizeRegular = Template.bind({});
WithSizeRegular.args = {
  children: [
    <List.Item size={Size.regular} right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}>
      <Text>List Item</Text>
    </List.Item>,
    <List.Item size={Size.regular} right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}>
      <Text>List Item</Text>
    </List.Item>,
    <List.Item size={Size.regular} right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}>
      <Text>List Item</Text>
    </List.Item>,
  ],
};

export const WithSizeBig = Template.bind({});
WithSizeBig.args = {
  children: [
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      size={Size.big}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      size={Size.big}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      size={Size.big}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
  ],
};

export const WithSizeHuge = Template.bind({});
WithSizeHuge.args = {
  children: [
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      size={Size.huge}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      size={Size.huge}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
    <List.Item
      left={<Avatar size="m" src="https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" />}
      size={Size.huge}
      right={<Icon icon={Icons.chat_bubble} color={Colors.black26} />}
    >
      <Text>List Item</Text>
    </List.Item>,
  ],
};
