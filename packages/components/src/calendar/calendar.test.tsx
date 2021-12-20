import { fireEvent, render, screen } from "@testing-library/react";

import DateTime from "../date-time";
import Duration from "../duration";
import Calendar from "./calendar";
import { MONTHS } from "./constants";

const currDateTime = new DateTime({ year: 2021, month: DateTime.august, day: 26, hour: 21, minute: 14 });

describe("Calendar", () => {
  jest.spyOn(Date, "now").mockImplementation(() => new Date("2021-08-26T21:14:00.000Z").valueOf());

  it("should render successfully", () => {
    render(<Calendar />);
    expect(screen.getByTestId("calendar")).toMatchSnapshot();
  });

  it("should parse date when initialValue is a Date object", () => {
    // @ts-expect-error Because `DateTime.date` is private
    const dateNumber = currDateTime.date.valueOf();
    render(<Calendar initialValue={dateNumber} />);
    expect(screen.getByTestId("calendar")).toMatchSnapshot();
  });

  it("should handle previous month", async () => {
    render(
      <Calendar
        initialValue={currDateTime}
        events={[
          { date: currDateTime.subtract(Duration.days(60)), title: "Past Event" },
          { date: currDateTime, title: "Storybook Event That Rocks !" },
        ]}
      />,
    );

    const currentMonth = currDateTime.month;
    const currentMonthIndex = currentMonth - 1;

    const month = screen.getByTestId("month");
    const currMonth = MONTHS.en[currentMonthIndex];
    const prevCurrMonth = MONTHS.en[currentMonthIndex - 1];
    const nextCurrMonth = MONTHS.en[currentMonthIndex + 1];

    expect(month.textContent).toEqual(currMonth);
    expect(screen.getByTestId("calendar")).toMatchSnapshot();

    const prevMonth = screen.getByTestId("prev-month");
    const nextMonth = screen.getByTestId("next-month");

    fireEvent.click(prevMonth);

    expect(month.textContent).toEqual(prevCurrMonth);
    expect(screen.getByTestId("calendar")).toMatchSnapshot();

    fireEvent.click(nextMonth);
    fireEvent.click(nextMonth);

    expect(month.textContent).toEqual(nextCurrMonth);
    expect(screen.getByTestId("calendar")).toMatchSnapshot();
  });
});
