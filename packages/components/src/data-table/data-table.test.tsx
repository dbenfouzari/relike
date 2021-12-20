import { render, screen } from "@testing-library/react";

import Icon from "../icon";
import Icons from "../icons";
import DataTable, { buildDataColumn } from "./data-table";

const data = [{ name: "John Doe", age: 23, gender: "male" }] as const;

/** Defines data type */
type Data = typeof data;

describe("DataTable", () => {
  it("should render successfully", () => {
    const DataColumn = buildDataColumn<Data>();

    render(
      <DataTable data={data}>
        <DataColumn
          value="name"
          label="Name"
          formatValue={(value) => (
            <>
              <Icon icon={Icons.person} />
              <span>{value}</span>
            </>
          )}
        />
        <DataColumn renderCell={({ value }) => <h3>{value}</h3>} value="age" label="Age" />
        <DataColumn value="gender" label="Gender" />
      </DataTable>,
    );

    expect(screen.getByRole("table")).toMatchSnapshot();
  });

  it("buildDataColumn should render nothing", () => {
    const DataColumn = buildDataColumn<Data>();
    const { container } = render(<DataColumn label="Name" value="name" />);

    // Disable ESLint because I want to test that it renders nothing.
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBe(null);
  });
});
