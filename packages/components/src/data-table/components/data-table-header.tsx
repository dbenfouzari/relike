import classnames from "classnames";
import { Children, ReactElement } from "react";

import classes from "../data-table.module.scss";
import { DataTableClassNames, DataTableColumnProps } from "../types";
import { filterChildren } from "../utils";

/** Defines DataTableHeader props */
export interface DataTableHeaderProps<C> {
  /** The children */
  children: ReactElement<C>[];
  /** Override classNames */
  classNames?: DataTableClassNames;
}

/**
 * Display the DataTable header
 *
 * @param   {DataTableHeaderProps} props The props
 * @example
 * <DataTableHeader {...} />
 * @returns {JSX.Element}                The JSX Element.
 */
const DataTableHeader = <C extends DataTableColumnProps>({ children, classNames }: DataTableHeaderProps<C>) => {
  const mandatoryColumns = filterChildren(children);

  return (
    <div role="columnheader" className={classnames(classes.header, classes.row, classNames?.header, classNames?.row)}>
      {Children.map(mandatoryColumns, (child) => {
        const { flex = 1, label, value } = child.props;

        return (
          <div role="cell" key={value} className={classes.cell} style={{ flex }}>
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default DataTableHeader;
