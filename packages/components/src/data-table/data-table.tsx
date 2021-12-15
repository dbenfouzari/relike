import DataTableBody from "./components/data-table-body";
import DataTableHeader from "./components/data-table-header";
import { DataTableColumnProps, DataTableData, DataTableProps } from "./types";

export const buildDataColumn =
  <T extends DataTableData>() =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <K extends keyof T[number]>(props: DataTableColumnProps<T, K>) =>
    null;

export const DataTable = <D extends DataTableData>({ data, children, renderRow, classNames }: DataTableProps<D>) => (
  <div role="table">
    <DataTableHeader children={children} classNames={classNames} />
    <DataTableBody data={data} renderRow={renderRow} classNames={classNames}>
      {children}
    </DataTableBody>
  </div>
);

export default DataTable;
