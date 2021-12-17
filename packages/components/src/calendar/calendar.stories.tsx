import { Meta, Story } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";

import DateTime from "../date-time";
import Duration from "../duration";
import Calendar, { CalendarProps } from "./calendar";
import classes from "./calendar.stories.module.scss";
import { SupportedCalendarLocales } from "./constants";

export default {
  title: "Calendar",
  component: Calendar,
  argTypes: {
    initialValue: { control: { type: "date" } },
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(story) => <div className={classes.wrapper}>{story()}</div>],
} as Meta<CalendarProps>;

/**
 * Default Calendar template
 *
 * @param {CalendarProps} args The props
 * @example
 * <Template />
 * @returns {JSX.Element} The Calendar component
 */
const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

const now = isChromatic() ? new DateTime({ year: 2021, month: DateTime.august, day: 26 }) : DateTime.now();

const defaultProps: CalendarProps = {
  locale: SupportedCalendarLocales.EN,
  initialValue: now,
  dark: false,
  events: [],
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
Default.argTypes = {
  events: { control: { disable: true } },
};

export const WithEvents = Template.bind({});
WithEvents.args = {
  ...defaultProps,
  events: [
    {
      date: now.subtract(Duration.days(60)),
      title: "Past Event",
    },
    {
      date: now,
      title: "Storybook Event That Rocks !",
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  ...defaultProps,
  dark: true,
  events: [
    {
      date: now.subtract(Duration.days(60)),
      title: "Past Event",
    },
    {
      date: now,
      title: "Storybook Event That Rocks !",
    },
  ],
};
