import { render } from "@testing-library/react";

import { SupportedLocales } from "../../constants";
import Days, { threeFirstLetters } from "./days";

describe("Calendar/Days", () => {
  it("default formatter should work properly", () => {
    expect(threeFirstLetters("monday")).toEqual("mon");
  });

  it("days component should use default formatter", () => {
    const { getByTestId } = render(<Days locale={SupportedLocales.EN} />);

    expect(getByTestId("monday").textContent).toEqual("mon");
  });

  it("days component should use custom formatter", () => {
    const { getByTestId } = render(<Days locale={SupportedLocales.EN} formatDay={(day) => day.substr(0, 4)} />);

    expect(getByTestId("monday").textContent).toEqual("mond");
  });
});
