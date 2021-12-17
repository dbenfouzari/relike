import { Children, ReactElement } from "react";

import { DataTableColumnProps } from "./types";

/**
 * Filters DataTable children by `optional` prop.
 *
 * @param   {ReactElement[]} children The children to filter
 * @example
 * filterChildren(...)
 * @returns {ReactElement[]}          The filtered children
 */
export const filterChildren = <C extends DataTableColumnProps>(children: ReactElement<C>[]) => {
  return Children.map(children, (child) => {
    if (!child) return null;
    if (child.props.optional) return null;
    return child;
  });
};
