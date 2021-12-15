import { render } from "@testing-library/react";

import Axis from "../../../axis";
import Colors from "../../../colors";
import GridViewCount from "./grid-view-count";

const items = Array.from({ length: 32 }, (_, index) => {
  const color = Colors.primaries[Math.floor(Math.random() * Colors.primaries.length)];

  return (
    <div key={index} style={{ backgroundColor: color["400"].toRGBA() }}>
      Item {index}
    </div>
  );
});

describe("GridView.Count", () => {
  it("should render successfully", () => {
    render(<GridViewCount crossAxisCount={4}>{items}</GridViewCount>);
  });

  it("should render successfully with horizontal scroll", () => {
    const consoleWarnMock = jest.spyOn(console, "warn").mockImplementation();

    render(
      <GridViewCount scrollDirection={Axis.horizontal} crossAxisCount={4}>
        {items}
      </GridViewCount>,
    );

    expect(consoleWarnMock).toHaveBeenCalledWith(
      "[GridView.Count] You used Axis.horizontal as scrollDirection. Be warned that strange behaviour may occur with this.",
    );
  });
});
