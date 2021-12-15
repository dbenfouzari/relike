import classnames from "classnames";
import type { CSSProperties, FC, ReactElement, ReactNode } from "react";
import { cloneElement } from "react";
import { createUseStyles } from "react-jss";

import Color from "../../../color";
import Colors from "../../../colors";
import { IconProps } from "../../../icon";
import classes from "./timeline-item.module.scss";

/**
 * Defines the TimelineItem props without dot.
 */
export interface TimelineItemPropsWithoutDot {
  /**
   * What's the dot color ?
   *
   * @default Colors.blue[500]
   */
  color?: Color;
  /** The dot component. */
  dot?: undefined;
  /** The TimelineItem content that will be shown. */
  children: ReactNode;
}

/**
 * Defines the TimelineItem props when dot is declared.
 */
export interface TimelineItemPropsWithDot {
  /**
   * What's the dot color ?
   *
   * @default Colors.blue[500]
   */
  color?: undefined;
  /** The dot component. */
  dot?: ReactElement<IconProps>;
  /** The TimelineItem content that will be shown. */
  children: ReactNode;
}

/** Defines TimelineItem props. */
export type TimelineItemProps = TimelineItemPropsWithoutDot | TimelineItemPropsWithDot;

/** Types for TimelineItem styles props */
interface TimelineItemStylesProps {
  /** TimelineItem base color */
  color: Color;
}

const useStyles = createUseStyles({
  /**
   * Generate styles for TimelineItem
   *
   * @param {TimelineItemStylesProps} props The props.
   * @example
   * item({ color: Colors.blue };
   * @returns {CSSProperties} The styles.
   */
  item: (props: TimelineItemStylesProps) =>
    ({
      "--dot-color": props.color.toRGBA(),
    } as CSSProperties),
});

/**
 * The TimelineItem component.
 *
 * @param {TimelineItemProps} props The TimelineItem props.
 * @example
 * <TimelineItem>Hello</TimelineItem>
 * @returns {JSX.Element} the JSX element.
 */
export const TimelineItem: FC<TimelineItemProps> = ({ children, color = Colors.blue[500], dot }) => {
  const styles = useStyles({ color });

  return (
    <li className={classnames(classes.item, styles.item, { [classes.with_custom_dot]: !!dot })}>
      {dot
        ? cloneElement(dot, {
            className: classes.dot,
          })
        : null}
      <div className={classes.content}>{children}</div>
    </li>
  );
};

export default TimelineItem;
