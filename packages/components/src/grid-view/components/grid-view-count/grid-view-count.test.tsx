import { render, screen } from "@testing-library/react";

import Axis from "../../../axis";
import Colors from "../../../colors";
import GridViewCount from "./grid-view-count";

const items = Array.from({ length: 16 }, (_, index) => (
  <div key={index} style={{ backgroundColor: Colors.blue[400].toRGBA() }}>
    Item {index}
  </div>
));

describe("GridView.Count", () => {
  it("should render successfully", () => {
    render(<GridViewCount crossAxisCount={4}>{items}</GridViewCount>);

    expect(screen.getByTestId("grid-view-count")).toMatchSnapshot();
  });

  it("should render successfully with horizontal scroll", () => {
    const consoleWarnMock = jest.spyOn(console, "warn").mockImplementation();

    render(
      <GridViewCount scrollDirection={Axis.horizontal} crossAxisCount={4}>
        {items}
      </GridViewCount>,
    );

    expect(screen.getByTestId("grid-view-count")).toMatchSnapshot();

    expect(consoleWarnMock).toHaveBeenCalledWith(
      "[GridView.Count] You used Axis.horizontal as scrollDirection. Be warned that strange behaviour may occur with this.",
    );
  });
});
