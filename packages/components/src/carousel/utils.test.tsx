import {
  findFirstVisibleIndex,
  findLastVisibleIndex,
  scrollLeftToStep,
  scrollRightToStep,
  scrollToStep,
  showHideIndicator,
} from "./utils";

describe("Carousel/utils", () => {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  div1.id = "1";
  div2.id = "2";
  div3.id = "3";
  div2.setAttribute("visible", "true");
  div3.setAttribute("visible", "true");

  const elms = [div1, div2, div3];

  it("findFirstVisibleIndex should return correct element", () => {
    expect(findFirstVisibleIndex(elms)).toBe(1);
  });

  it("findLastVisibleIndex should return correct element", () => {
    expect(findLastVisibleIndex(elms)).toBe(2);
  });

  it("scrollLeftToStep should work", () => {
    const mockScroll = jest.fn();

    const originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
    window.HTMLElement.prototype.scrollIntoView = mockScroll;

    scrollLeftToStep(0, elms);

    expect(mockScroll).toHaveBeenCalledWith({ behavior: "smooth" });

    window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
  });

  it("scrollRightToStep should work", () => {
    const mockScroll = jest.fn();

    const originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
    window.HTMLElement.prototype.scrollIntoView = mockScroll;

    scrollRightToStep(2, elms);

    expect(mockScroll).toHaveBeenCalledWith({ behavior: "smooth" });

    window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
  });

  it("scrollToStep should work", () => {
    const mockScroll = jest.fn();

    const originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
    window.HTMLElement.prototype.scrollIntoView = mockScroll;

    scrollToStep(2, elms);

    expect(mockScroll).toHaveBeenCalledWith({ behavior: "smooth" });

    window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
  });

  it("showHideIndicator should work with left", () => {
    const setLeftIndicator = jest.fn();
    const setRightIndicator = jest.fn();

    div2.setAttribute("visible", "true");
    div3.setAttribute("visible", "true");

    showHideIndicator(elms, setLeftIndicator, setRightIndicator);

    expect(setLeftIndicator).toHaveBeenCalledWith(true);
    expect(setRightIndicator).toHaveBeenCalledWith(false);
  });

  it("showHideIndicator should work with right", () => {
    const setLeftIndicator = jest.fn();
    const setRightIndicator = jest.fn();

    div1.setAttribute("visible", "true");
    div2.removeAttribute("visible");
    div3.removeAttribute("visible");

    showHideIndicator(elms, setLeftIndicator, setRightIndicator);

    expect(setLeftIndicator).toHaveBeenCalledWith(false);
    expect(setRightIndicator).toHaveBeenCalledWith(true);
  });

  it("showHideIndicator should work with nothing", () => {
    const setLeftIndicator = jest.fn();
    const setRightIndicator = jest.fn();

    div1.removeAttribute("visible");
    div2.removeAttribute("visible");
    div3.removeAttribute("visible");

    showHideIndicator(elms, setLeftIndicator, setRightIndicator);

    expect(setLeftIndicator).toHaveBeenCalledWith(false);
    expect(setRightIndicator).toHaveBeenCalledWith(false);
  });
});
