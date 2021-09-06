import { ComponentMeta, ComponentStory } from "@storybook/react";

import CrossAxisAlignment from "../cross-axis-alignment";
import Flex from "../flex";
import FontWeight from "../font-weight";
import Text from "../text";
import Typography from "../typography";
import Alert from "./alert";
import { AlertSeverities } from "./constants";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

// const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

const MultipleTemplate: ComponentStory<typeof Alert> = (args) => (
  <Flex.Column gap={8} crossAxisAlignment={CrossAxisAlignment.stretch}>
    {[AlertSeverities.info, AlertSeverities.error, AlertSeverities.warning, AlertSeverities.success].map((severity) => {
      return (
        <Alert {...args} key={severity} severity={severity} title={args.title ?? severity.toString()}>
          {({ color }) => {
            const aOrAn = severity.match(/^[aeiouyAEIOUY].*/) ? "an" : "a";
            return (
              <Text style={Typography.blackMountainView.bodyText2?.copyWith({ color })}>
                This is {aOrAn} {severity} alert —{" "}
                <Text style={Typography.blackMountainView.bodyText2?.copyWith({ color, fontWeight: FontWeight.bold })}>
                  check it out!
                </Text>
              </Text>
            );
          }}
        </Alert>
      );
    })}
  </Flex.Column>
);

export const Basic = MultipleTemplate.bind({});
Basic.args = {};
