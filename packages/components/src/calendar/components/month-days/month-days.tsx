import isChromatic from "chromatic/isChromatic";
import classnames from "classnames";
import { FC } from "react";

import DateTime from "../../../date-time";
import { CalendarEvent } from "../../types";
import { getEventsThatDay } from "../../utils";
import Event from "../event";
import classes from "./month-days.module.scss";

/** Defines MonthDays props */
export interface MonthDaysProps {
  /** Current calendar date */
  currentDate: DateTime;
  /** Calendar events */
  events?: CalendarEvent[];
}

/**
 * Since we don't want Chromatic to update every day when no change is made,
 * I just define today to a defined date.
 *
 * @param   {DateTime} dateTime The date to compare
 * @example
 * getIsToday(DateTime.now())
 * @returns {boolean}           Result
 */
export const getIsToday = (dateTime: DateTime) => {
  if (isChromatic()) return dateTime.isAtSameMomentAs(new DateTime({ year: 2021, month: DateTime.august, day: 26 }));
  return dateTime.getIsToday();
};

/**
 * MonthDays component
 *
 * @param   {MonthDaysProps} props The props
 * @example
 * <MonthDays currentDate={DateTime.now()} events={[]} />
 * @returns {JSX.Element}          The MonthDays component
 */
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
