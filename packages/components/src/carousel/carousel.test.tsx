import "intersection-observer";

import { fireEvent, render, screen } from "@testing-library/react";
import { CSSProperties } from "react";

import Colors from "../colors";
import Carousel from "./carousel";

const styles: Record<string, CSSProperties> = {
  element: {
    width: "20rem",
    height: "12rem",
    borderRadius: 4,
    backgroundColor: Colors.grey[200].toRGBA(),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const mockScrollLeft = jest.fn();
const mockScrollRight = jest.fn();

jest.mock("./useCarousel", () =>
  jest.fn(() => ({
    leftIndicator: true,
    rightIndicator: true,
    /**
     * Component ref creator.
     *
     * @returns {any} The ref
     * @example
     * <div ref={itemRef} />
     */
    itemRef: () => jest.fn(),
    scrollLeft: mockScrollLeft,
    scrollRight: mockScrollRight,
  })),
);

/**
 * Set up tests
 *
 * @returns {any} The result
 * @example
 * setup()
 */
const setup = () => {
  return render(
    <Carousel>
      <div key={1} style={styles.element}>
        Example 1
      </div>
      <div key={2} style={styles.element}>
        Example 2
      </div>
      <div key={3} style={styles.element}>
        Example 3
      </div>
      <div key={4} style={styles.element}>
        Example 4
      </div>
      <div key={5} style={styles.element}>
        Example 5
      </div>
      <div key={6} style={styles.element}>
        Example 6
      </div>
      <div key={7} style={styles.element}>
        Example 7
      </div>
    </Carousel>,
  );
};

describe("Carousel", function () {
  it("should render successfully", () => {
    setup();

    expect(screen.getByTestId("carousel")).toMatchSnapshot();
  });

  it("should handle next click", () => {
    setup();

    const rightIndicator = screen.getByTestId("right");
    fireEvent.click(rightIndicator);

    expect(mockScrollRight).toHaveBeenCalled();
  });

  it("should handle prev click", () => {
    setup();

    const leftIndicator = screen.getByTestId("left");
    fireEvent.click(leftIndicator);

    expect(mockScrollLeft).toHaveBeenCalled();
  });
});
