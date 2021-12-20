import { FC } from "react";

import { buildDataColumn } from "./data-table";
import { DataTableColumnProps } from "./types";
import { filterChildren } from "./utils";

const data = [{ name: "John Doe", age: 23, gender: "male" }] as const;

/** Defines data type */
type Data = typeof data;

describe("DataTable utils", () => {
  it("filterChildren should filter correctly when NO optional prop passed", () => {
    const DataColumn = buildDataColumn<Data>();

    const children = [<DataColumn label="Name" value="name" />];
    const result = filterChildren(children);

    expect(result).toHaveLength(1);
  });

  it("filterChildren should filter correctly when optional prop passed", () => {
    const DataColumn = buildDataColumn<Data>();

    const children = [<DataColumn label="Name" value="name" optional />];
    const result = filterChildren(children);

    expect(result).toHaveLength(0);
  });

  it("filterChildren should filter correctly when child is null", () => {
    const children = [null];
    // @ts-expect-error Children should be an array of ReactElement, not null.
    const result = filterChildren(children);

    expect(result).toHaveLength(0);
  });
});
