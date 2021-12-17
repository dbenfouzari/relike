import DataTableBody from "./components/data-table-body";
import DataTableHeader from "./components/data-table-header";
import { DataTableColumnProps, DataTableData, DataTableProps } from "./types";

/**
 * A method to build strongly typed DataTableColumn
 *
 * @example
 * const data = [{ name: "John Doe", age: 23, gender: "male" }] as const;
 * type Data = typeof data;
 * const DataColumn = buildDataColumn<Data>();
 * @returns {null} Nothing because DataTable handles rendering
 */
export const buildDataColumn =
  <T extends DataTableData>() =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <K extends keyof T[number]>(props: DataTableColumnProps<T, K>) =>
    null;

/**
 * Display a data table
 *
 * @param   {DataTableProps} props The props
 * @example
 * const data = [{ name: "John Doe", age: 23, gender: "male" }] as const;
 * type Data = typeof data;
 * const DataColumn = buildDataColumn<Data>();
 *
 * <DataTable data={data}>
 *   <DataColumn value="age" label="Age" />
 * </DataTable>
 * @returns {JSX.Element}          The JSX Element
 */
export const DataTable = <D extends DataTableData>({ data, children, renderRow, classNames }: DataTableProps<D>) => (
  <div role="table">
    <DataTableHeader children={children} classNames={classNames} />
    <DataTableBody data={data} renderRow={renderRow} classNames={classNames}>
      {children}
    </DataTableBody>
  </div>
);

export default DataTable;
