import DateTime from "../date-time";
import { DAYS, MONTHS, SupportedCalendarLocales } from "./constants";

/** Defines days type */
export type DaysType = typeof DAYS;
/** Defines months type */
export type MonthsType = typeof MONTHS;

/** Defines day type */
export type Day = DaysType[SupportedCalendarLocales][number];
/** Defines month type */
export type Month = MonthsType[SupportedCalendarLocales][number];

/** Define calendar event type */
export interface CalendarEvent {
  /** Date event occurs */
  date: DateTime;
  /** Event title */
  title: string;
  /** Event end date */
  endDate?: DateTime;
}
