import { Color } from "@hastics/utils";
import { Colors } from "@hastics/utils";
import classnames from "classnames";
import { cloneElement, FC, ReactElement, ReactNode } from "react";
import { createUseStyles } from "react-jss";

import { IconProps } from "../../../icon";
import classes from "./timeline-item.module.scss";

export interface TimelineItemPropsWithoutDot {
  /**
   * What's the dot color ?
   *
   * @default Colors.blue[500]
   */
  color?: Color;

  dot?: undefined;

  children: ReactNode;
}

export interface TimelineItemPropsWithDot {
  /**
   * What's the dot color ?
   *
   * @default Colors.blue[500]
   */
  color?: undefined;

  dot?: ReactElement<IconProps>;

  children: ReactNode;
}

export type TimelineItemProps = TimelineItemPropsWithoutDot | TimelineItemPropsWithDot;

interface TimelineItemStylesProps {
  color: Color;
}

const useStyles = createUseStyles({
  item: (props: TimelineItemStylesProps) => ({
    "--dot-color": props.color.toRGBA(),
  }),
});

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
