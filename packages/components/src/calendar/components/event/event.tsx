import { FC } from "react";

import { CalendarEvent } from "../../types";
import classes from "./event.module.scss";

/** Defines Event props */
export interface EventProps {
  /** The event itself */
  event: CalendarEvent;
}

/**
 * Renders Event component
 *
 * @param {EventProps} props The props
 * @example
 * <Event event={{...}} />
 * @returns {JSX.Element} The Event component
 */
const Event: FC<EventProps> = ({ event }) => (
  <div className={classes.wrapper}>
    <span>{event.title}</span>
    <span className={classes.hour}>
      {event.date.hour.toString().padStart(2, "0")}:{event.date.minute.toString().padStart(2, "0")}
    </span>
  </div>
);

export default Event;
