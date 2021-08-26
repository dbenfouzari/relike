import { act, fireEvent, render } from "@testing-library/react";

import DateTime from "../date-time";
import Duration from "../duration";
import Calendar from "./calendar";
import { MONTHS } from "./constants";

const currDate = new Date(2021, 7, 26);

describe("Calendar", () => {
  it("should render successfully", () => {
    const { container } = render(<Calendar />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should handle previous month", async () => {
    const { container, getByTestId } = render(
      <Calendar
        events={[
          { date: DateTime.now().subtract(Duration.days(60)), title: "Past Event" },
          { date: DateTime.now(), title: "Storybook Event That Rocks !" },
        ]}
      />,
    );

    const month = getByTestId("month");
    const currMonth = MONTHS.en[currDate.getMonth()];
    const prevCurrMonth = MONTHS.en[currDate.getMonth() - 1];
    const nextCurrMonth = MONTHS.en[currDate.getMonth() + 1];

    expect(month.textContent).toEqual(currMonth);
    expect(container.firstChild).toMatchSnapshot();

    const prevMonth = getByTestId("prev-month");
    const nextMonth = getByTestId("next-month");

    act(() => {
      fireEvent.click(prevMonth);
    });

    expect(month.textContent).toEqual(prevCurrMonth);
    expect(container.firstChild).toMatchSnapshot();

    act(() => {
      fireEvent.click(nextMonth);
      fireEvent.click(nextMonth);
    });

    expect(month.textContent).toEqual(nextCurrMonth);
    expect(container.firstChild).toMatchSnapshot();
  });
});
