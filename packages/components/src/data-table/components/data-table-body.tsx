import classnames from "classnames";
import { ReactElement } from "react";

import classes from "../data-table.module.scss";
import { DataTableClassNames, DataTableColumnProps, DataTableData, DataTableProps } from "../types";
import { filterChildren } from "../utils";

/** Defines DataTableBody props */
export interface DataTableBodyProps<D extends DataTableData> {
  /** The data to display */
  data: D;
  /** The children */
  children: ReactElement<DataTableColumnProps>[];
  /** Custom row rendering */
  renderRow?: DataTableProps<D>["renderRow"];
  /** Override classNames */
  classNames?: DataTableClassNames;
}

/**
 * Display DataTableBody
 *
 * @param {DataTableBodyProps} props The props
 * @example
 * <DataTableBody {...} />
 * @returns {JSX.Element} The JSX element
 */
const DataTableBody = <D extends DataTableData>({ data, children, renderRow, classNames }: DataTableBodyProps<D>) => {
  const mandatoryColumns = filterChildren(children);

  const Wrapper =
    renderRow ??
    (({ children }) => (
      <div role="row" className={classnames(classes.row, classNames?.row)}>
        {children}
      </div>
    ));

  return (
    <div className={classes.content}>
      {data.map((item, index) => (
        <Wrapper key={index}>
          {mandatoryColumns.map((child) => {
            const { flex, formatValue, value, renderCell: RenderCell, className } = child.props;

            /**
             * Callback format method if none is provided
             *
             * @param {string | number} v Data value
             * @example
             * formatCallback(4) // 4
             * @returns {string | number} Original value
             * @todo It's useless and does computation for nothing. Find a way to remove it.
             */
            const formatCallback = (v: string | number) => v;
            const format = formatValue ?? formatCallback;

            return RenderCell ? (
              <RenderCell key={value} value={format(item[value], item)} />
            ) : (
              <div
                role="cell"
                key={value}
                className={classnames(classes.cell, classNames?.cell, className)}
                style={{ flex }}
              >
                {format(item[value], item)}
              </div>
            );
          })}
        </Wrapper>
      ))}
    </div>
  );
};

export default DataTableBody;
