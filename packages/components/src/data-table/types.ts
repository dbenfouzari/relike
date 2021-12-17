import { ComponentType, ReactElement, ReactText } from "react";

/** Defines DataTable data */
export type DataTableData = Readonly<Array<{ [k: string]: string | number }>>;

/** Defines DataTable overridable classNames */
export type DataTableClassNames = {
  /** Header className */
  header?: string;
  /** Row className */
  row?: string;
  /** Cell className */
  cell?: string;
};

/** Defines DataTableColumn props */
export interface DataTableColumnProps<
  D extends DataTableData = DataTableData,
  K extends keyof D[number] = keyof D[number],
> {
  /** The column label */
  label: string;
  /** The data value to get */
  value: K;
  /** Value formatter if you want to format the output */
  formatValue?: (value: D[number][K], item: D[number]) => JSX.Element | ReactText;
  /**
   * How much space the column takes compared to other columns.
   *
   * @default 1
   */
  flex?: number;
  /** Is the column optional? Hide it if true */
  optional?: boolean;
  /** Custom cell rendering */
  renderCell?: ComponentType<{ /** Data value */ value: D[number][K] | JSX.Element }>;
  /** Override className */
  className?: string;
}

/** Defines DataTable props */
export interface DataTableProps<D extends DataTableData> {
  /** Data to display */
  data: D;
  /** DataTableColumn */
  children: ReactElement<DataTableColumnProps>[];
  /** Custom method to render result row */
  renderRow?: ComponentType;
  /** Override classNames */
  classNames?: DataTableClassNames;
}

/** Defines sort direction */
export type SortDirection = "asc" | "desc";
