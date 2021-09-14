import { Colors } from "@hastics/utils";
import { render } from "@testing-library/react";

import CrossAxisAlignment from "../cross-axis-alignment";
import Flex from "../flex";
import MainAxisAlignment from "../main-axis-alignment";
import Text from "../text";
import Typography from "../typography";
import ListItem from "./list-item";
import classes from "./list-item.stories.module.scss";

describe("ListItem", () => {
  it("should render successfully", () => {
    const { container } = render(
      <ListItem>
        <Flex.Column
          mainAxisAlignment={MainAxisAlignment.spaceEvenly}
          crossAxisAlignment={CrossAxisAlignment.start}
          className={classes.content}
        >
          <Text>John Doe</Text>
          <Text style={Typography.blackMountainView.bodyText2?.copyWith({ color: Colors.black54 })}>
            Hey Storybook !
          </Text>
        </Flex.Column>
      </ListItem>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
