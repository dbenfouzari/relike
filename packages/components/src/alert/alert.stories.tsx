import { Meta, Story } from "@storybook/react";

import CrossAxisAlignment from "../cross-axis-alignment";
import Flex from "../flex";
import FontWeight from "../font-weight";
import Text from "../text";
import Typography from "../typography";
import Alert, { AlertProps } from "./alert";
import { AlertSeverities } from "./constants";

export default {
  title: "Alert",
  component: Alert,
} as Meta<AlertProps>;

/**
 * Default Alert template
 *
 * @param   {AlertProps}  args The props
 * @example
 * <Template />
 * @returns {JSX.Element}      The Alert component
 */
const Template: Story<AlertProps> = (args) => <Alert {...args} />;

/**
 * Template that displays all alerts.
 *
 * @param   {AlertProps}  args The props
 * @example
 * <MultipleTemplate />
 * @returns {JSX.Element}      Multiple Alerts
 */
const MultipleTemplate: Story<AlertProps> = (args) => (
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

export const Info = Template.bind({});
Info.args = {
  severity: AlertSeverities.info,
  title: "Info traffic",
  children: "This is an info",
};

export const Error = Template.bind({});
Error.args = {
  severity: AlertSeverities.error,
  children: "You are en panne",
};

export const Warning = Template.bind({});
Warning.args = {
  severity: AlertSeverities.warning,
  children: "An accident is on your trajet",
};

export const Success = Template.bind({});
Success.args = {
  severity: AlertSeverities.success,
  children: "Congrats! You are à bon port",
};

export const All = MultipleTemplate.bind({});
All.args = {};
