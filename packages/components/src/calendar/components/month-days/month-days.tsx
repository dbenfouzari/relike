import { DateTime } from "@hastics/utils";
import isChromatic from "chromatic/isChromatic";
import classnames from "classnames";
import { FC } from "react";

import { CalendarEvent } from "../../types";
import { getEventsThatDay } from "../../utils";
import Event from "../event";
import classes from "./month-days.module.scss";

export interface MonthDaysProps {
  currentDate: DateTime;
  events?: CalendarEvent[];
}

/**
 * Since we don't want Chromatic to update every day when no change is made,
 * I just define today to a defined date.
 */
const getIsToday = (dateTime: DateTime) => {
  if (isChromatic()) return dateTime.isAtSameMomentAs(new DateTime({ year: 2021, month: DateTime.august, day: 26 }));
  return dateTime.getIsToday();
};

const MonthDays: FC<MonthDaysProps> = ({ currentDate, events }) => (
  <>
    {currentDate.getDaysInMonth().map((dateTime) => {
      const eventsThatDay = events && getEventsThatDay(dateTime, events);

      return (
        <span
          key={dateTime.millisecondsSinceEpoch}
          className={classnames(classes.cell, {
            [classes.cell__out_of_range]: !dateTime.getIsInSameMonth(currentDate),
          })}
        >
          <span
            className={classnames(classes.day_number, {
              [classes.day_number__current]: getIsToday(dateTime),
            })}
          >
            {dateTime.day}
          </span>

          <div className={classes.events}>
            {eventsThatDay?.map((event) => (
              <Event key={event.date.millisecondsSinceEpoch} event={event} />
            ))}
          </div>
        </span>
      );
    })}
  </>
);

export default MonthDays;
