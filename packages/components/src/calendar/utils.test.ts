import { DateTime } from "@hastics/utils";
import { Duration } from "@hastics/utils";

import { filterCalendarEvents, getEventsThatDay } from "./utils";

describe("Calendar Utils", function () {
  it("`filterCalendarEvents` should return correct value", () => {
    const date = DateTime.now();

    const events = [
      { date: DateTime.now().subtract(Duration.days(60)), title: "Past Event" },
      { date: DateTime.now(), title: "Storybook Event That Rocks !" },
    ];

    const expectedResult = [{ date: DateTime.now(), title: "Storybook Event That Rocks !" }];

    expect(JSON.stringify(filterCalendarEvents(date, events))).toEqual(JSON.stringify(expectedResult));
  });

  it("`getEventsThatDay` should return correct value", () => {
    const date = DateTime.now();

    const events = [
      { date: DateTime.now().subtract(Duration.days(60)), title: "Past Event" },
      { date: DateTime.now(), title: "Storybook Event That Rocks !" },
    ];

    const expectedResult = [{ date: DateTime.now(), title: "Storybook Event That Rocks !" }];

    expect(JSON.stringify(getEventsThatDay(date, events))).toEqual(JSON.stringify(expectedResult));
  });
});
