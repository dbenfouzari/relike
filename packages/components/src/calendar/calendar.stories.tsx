import { ComponentMeta, ComponentStory } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";

import DateTime from "../date-time";
import Duration from "../duration";
import Calendar from "./calendar";
import classes from "./calendar.stories.module.scss";
import { SupportedLocales } from "./constants";

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
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

const now = isChromatic() ? new DateTime({ year: 2021, month: DateTime.august, day: 26 }) : DateTime.now();

export const Default = Template.bind({});
Default.args = {
  locale: SupportedLocales.FR,
  initialValue: now,
};

export const WithEvents = Template.bind({});
WithEvents.args = {
  locale: SupportedLocales.FR,
  initialValue: now,
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
  locale: SupportedLocales.FR,
  initialValue: now,
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
