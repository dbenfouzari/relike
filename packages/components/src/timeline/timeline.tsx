import classnames from "classnames";
import { FC, ReactElement } from "react";

import TimelineItem from "./components/timeline-item";
import classes from "./timeline.module.scss";
import { TimelineMode } from "./types";

/**
 * Defines Timeline props.
 */
export interface TimelineProps {
  /**
   * Choose at which side of the text the line should be.
   *
   * - **left**: As default, text is on the right
   * - **right**: Text is on the left
   * - **alternate**: Text starts on the right, then next element on the left, etc.
   *
   * @default left
   */
  mode?: TimelineMode;

  /**
   * Children components are **[Timeline.Item]**s. This is where magic happens.
   */
  children: ReactElement<typeof TimelineItem> | ReactElement<typeof TimelineItem>[];
}

/**
 * Defines the Timeline component.
 */
export type TimelineComponent = FC<TimelineProps> & {
  /** TimelineItem component */
  Item: typeof TimelineItem;
};

/**
 * Vertical display timeline.
 * You can limit the **[TimeLine]** space by wrapping it with a div.
 *
 * ### When To Use
 * - When a series of information need to be ordered by time (ascending or descending).
 * - When you need a timeline to make a visual connection.
 *
 * @param   {TimelineProps} props The Timeline props.
 * @see TimelineItem
 * @example
 * <Timeline>
 *   <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
 * </Timeline>
 * @returns {JSX.Element}         The JSX element.
 */
export const Timeline: TimelineComponent = ({ children, mode = "left" }) => (
  <ul
    className={classnames(classes.timeline, {
      timeline__left: mode === "left",
      timeline__right: mode === "right",
      timeline__alternate: mode === "alternate",
    })}
  >
    {children}
  </ul>
);

Timeline.Item = TimelineItem;

export default Timeline;
