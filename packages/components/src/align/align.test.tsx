import { render } from "@testing-library/react";

import Alignment from "../alignment";
import Align from "./align";

type Direction = "flex-start" | "flex-end" | "center";

const expectDirections = (elm: HTMLElement, justifyContent: Direction | "", alignItems: Direction | "") => {
  const headerClass = elm.className;
  const headerRoot = document.getElementsByClassName(headerClass);
  const style = window.getComputedStyle(headerRoot[0]);

  expect(style.justifyContent).toBe(justifyContent);
  expect(style.alignItems).toBe(alignItems);
};

describe("Align", () => {
  it("should render successfully with top left", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.topLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "flex-start", "flex-start");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with top center", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.topCenter}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "center", "flex-start");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with top right", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.topRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "flex-end", "flex-start");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with center left", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.centerLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "flex-start", "center");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with center", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.center}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "center", "center");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with center right", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.centerRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "flex-end", "center");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with bottom left", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.bottomLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "flex-start", "flex-end");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with bottom center", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.bottomCenter}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "center", "flex-end");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with bottom right", () => {
    const { container, getByTestId } = render(
      <Align alignment={Alignment.bottomRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "flex-end", "flex-end");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render successfully with bad alignment", () => {
    const { container, getByTestId } = render(
      // @ts-expect-error
      <Align alignment={undefined}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId("align");

    expectDirections(divElement, "", "");
    expect(container.firstChild).toMatchSnapshot();
  });
});
