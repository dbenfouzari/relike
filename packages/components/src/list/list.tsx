import classNames from "classnames";
import { forwardRef, ForwardRefExoticComponent, ReactElement, RefAttributes } from "react";

import ListItem from "../list-item";
import { ListItemProps } from "../list-item/list-item";
import { ExtendedHTMLProps } from "../types";
import classes from "./list.module.scss";

/** Defines List props */
export interface ListProps extends ExtendedHTMLProps<HTMLUListElement> {
  /** This prop is used to override the style */
  className?: string;
  /** The list items */
  children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
}

/** Component display name. */
const COMPONENT_NAME = "List";

/** Defines List component */
export type ListComponent = ForwardRefExoticComponent<ListProps & RefAttributes<HTMLUListElement>> & {
  /** Can call `List.Item` */
  Item: typeof ListItem;
};

/**
 * Displays a list of items.
 *
 * @todo Add contextual size.
 * @todo Add global click handler.
 * @todo Maybe add a way to create a list builder
 * @todo Colors alternate ?
 */
export const List = forwardRef<HTMLUListElement, ListProps>(({ className, children, ...props }, ref) => (
  <ul ref={ref} className={classNames(classes.list, className)} {...props}>
    {children}
  </ul>
)) as ListComponent;

List.displayName = COMPONENT_NAME;
List.Item = ListItem;

export default List;
