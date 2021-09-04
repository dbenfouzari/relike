import classNames from "classnames";
import { createElement, forwardRef, MouseEvent, ReactHTML, ReactNode } from "react";

import classes from "./list-item.module.scss";

export interface ListItemProps {
  /** This prop is used to override the style */
  className?: string;

  /**
   * @default li
   */
  as?: keyof ReactHTML;

  children: ReactNode;

  left?: ReactNode;
  right?: ReactNode;

  onPress?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "ListItem";

const ListItem = forwardRef<unknown, ListItemProps>(
  ({ className, as, left, onPress, right, children, ...props }, ref) => {
    const defaultAs = as ?? onPress ? "a" : "li";

    return createElement(defaultAs, {
      ref,
      className: classNames(
        classes.list_item,
        {
          [classes.list_item__clickable]: !!onPress,
        },
        className,
      ),
      children: (
        <>
          {left && <div className={classes.left}>{left}</div>}
          {children && <div className={classes.content}>{children}</div>}
          {right}
        </>
      ),
      ...props,
    });
  },
);
ListItem.displayName = COMPONENT_NAME;

export default ListItem;
