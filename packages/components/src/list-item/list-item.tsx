import classNames from "classnames";
import { forwardRef, MouseEvent, ReactNode } from "react";

import { Size } from "../size";
import classes from "./list-item.module.scss";

/** Defines ListItem props */
export interface ListItemProps {
  /** This prop is used to override the style */
  className?: string;
  /** The rendered content */
  children: ReactNode;
  /** Show something on the left side */
  left?: ReactNode;
  /** Show something on the right side */
  right?: ReactNode;
  /** Callback called when pressing on a list item. */
  onPress?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * ListItem size.
   *
   * @default Size.regular
   */
  size?: Size;
}

/** Component display name. */
const COMPONENT_NAME = "ListItem";

/**
 * Use `ListItem` inside a `List` to render the items.
 *
 * When `onPress` is given, it adds a className that handles `hover` and `active` states.
 *
 * When `onPress` is given, it displays as a `a` element by default. Else, it displays as a `li` element.
 *
 * @example
 * <List>
 *   <ListItem>Hello</ListItem>
 * </List>
 * @returns {JSX.Element} The JSX element.
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, size = Size.regular, left, onPress, right, children, ...props }, ref) => {
    /**
     * Defines the inner wrapper element
     *
     * @example
     * <Wrapper />
     * @returns {JSX.Element} The wrapper
     */
    const Wrapper = () => {
      if (onPress)
        return (
          <button onClick={onPress} className={classes.wrapper} {...props}>
            {left && <div className={classes.left}>{left}</div>}
            {children && <div className={classes.content}>{children}</div>}
            {right}
          </button>
        );

      return (
        <div className={classes.wrapper}>
          {left && <div className={classes.left}>{left}</div>}
          {children && <div className={classes.content}>{children}</div>}
          {right}
        </div>
      );
    };

    return (
      <li
        ref={ref}
        className={classNames(
          classes.list_item,
          {
            [classes.list_item__clickable]: !!onPress,
            [classes.size_tiny]: size === Size.tiny,
            [classes.size_regular]: size === Size.regular,
            [classes.size_big]: size === Size.big,
            [classes.size_huge]: size === Size.huge,
          },
          className,
        )}
      >
        <Wrapper />
      </li>
    );
  },
);
ListItem.displayName = COMPONENT_NAME;

export default ListItem;
