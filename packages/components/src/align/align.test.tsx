import { render, screen } from "@testing-library/react";

import Alignment from "../alignment";
import Align from "./align";

/** Defines direction */
type Direction = "flex-start" | "flex-end" | "center";

/**
 * Generates tests
 *
 * @param {HTMLElement}    elm            The element to test
 * @param {Direction | ""} justifyContent The justifyContent expected.
 * @param {Direction | ""} alignItems     The alignItems expected.
 * @example
 * expectDirections(divElement, "flex-start", "flex-start");
 */
const expectDirections = (elm: HTMLElement, justifyContent: Direction | "", alignItems: Direction | "") => {
  const headerClass = elm.className;
  // Because I have to get inner styles, I have to use direct node access.
  // eslint-disable-next-line testing-library/no-node-access
  const headerRoot = document.getElementsByClassName(headerClass);
  const style = window.getComputedStyle(headerRoot[0]);

  expect(style.justifyContent).toBe(justifyContent);
  expect(style.alignItems).toBe(alignItems);
};

describe("Align", () => {
  it("should render successfully with top left", () => {
    render(
      <Align alignment={Alignment.topLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "flex-start", "flex-start");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with top center", () => {
    render(
      <Align alignment={Alignment.topCenter}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "center", "flex-start");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with top right", () => {
    render(
      <Align alignment={Alignment.topRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "flex-end", "flex-start");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with center left", () => {
    render(
      <Align alignment={Alignment.centerLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "flex-start", "center");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with center", () => {
    render(
      <Align alignment={Alignment.center}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "center", "center");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with center right", () => {
    render(
      <Align alignment={Alignment.centerRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "flex-end", "center");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with bottom left", () => {
    render(
      <Align alignment={Alignment.bottomLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "flex-start", "flex-end");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with bottom center", () => {
    render(
      <Align alignment={Alignment.bottomCenter}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "center", "flex-end");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with bottom right", () => {
    render(
      <Align alignment={Alignment.bottomRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "flex-end", "flex-end");
    expect(divElement).toMatchSnapshot();
  });

  it("should render successfully with bad alignment", () => {
    render(
      // @ts-expect-error `alignment` must be an Alignment, not `undefined`.
      <Align alignment={undefined}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = screen.getByTestId("align");

    expectDirections(divElement, "", "");
    expect(divElement).toMatchSnapshot();
  });
});
