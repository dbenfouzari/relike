export const THRESHOLD = 0.75;

/**
 * Find the first visible carousel item index.
 *
 * @param   {HTMLElement[]} childRefs The child refs
 * @example
 * findFirstVisibleIndex(...)
 * @returns {number}                  First index
 */
export const findFirstVisibleIndex = (childRefs: HTMLElement[]) =>
  childRefs.findIndex((child) => child.getAttribute("visible"));

/**
 * Find the last visible carousel item index.
 *
 * @param   {HTMLElement[]} childRefs The child refs
 * @example
 * findLastVisibleIndex(...)
 * @returns {number}                  Last index
 */
export const findLastVisibleIndex = (childRefs: HTMLElement[]) => {
  const reversedIndex = childRefs
    // "reverse" mutates existing array, that's why we copy it via "slice"
    .slice()
    .reverse()
    .findIndex((child) => child.getAttribute("visible"));
  const count = childRefs.length - 1;
  return reversedIndex >= 0 ? count - reversedIndex : reversedIndex;
};

/**
 * Scrolls the carousel to left until it gets to defined step.
 *
 * @param {number}        scrollStep The step to go
 * @param {HTMLElement[]} itemRefs   The item refs.
 * @example
 * scrollLeftToStep(0, elms);
 */
export const scrollLeftToStep = (scrollStep: number, itemRefs: HTMLElement[]) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const actualScrollForIndex = firstVisibleIndex < scrollStep ? 0 : firstVisibleIndex - scrollStep;

  itemRefs[actualScrollForIndex].scrollIntoView({ behavior: "smooth" });
};

/**
 * Scrolls the carousel to right until it gets to defined step.
 *
 * @param {number}        scrollStep The step to go
 * @param {HTMLElement[]} itemRefs   The item refs.
 * @example
 * scrollRightToStep(0, elms);
 */
export const scrollRightToStep = (scrollStep: number, itemRefs: HTMLElement[]) => {
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  const lastIndex = itemRefs.length - 1;
  const actualScrollForIndex = lastIndex - lastVisibleIndex < scrollStep ? lastIndex : lastVisibleIndex + scrollStep;
  itemRefs[actualScrollForIndex].scrollIntoView({ behavior: "smooth" });
};

/**
 * Scrolls the carousel until it gets to defined step.
 *
 * @param {number}        scrollStep The step to go
 * @param {HTMLElement[]} itemRefs   The item refs.
 * @example
 * scrollToStep(0, elms);
 */
export const scrollToStep = (scrollStep: number, itemRefs: HTMLElement[]) => {
  itemRefs[scrollStep].scrollIntoView({ behavior: "smooth" });
};

/**
 * Automatically shows or hide indicator.
 *
 * @param {HTMLElement[]} itemRefs          The item refs
 * @param {Function}      setLeftIndicator  Handler to set left indicator visibility
 * @param {Function}      setRightIndicator Handler to set right indicator visibility
 * @example
 * showHideIndicator(itemRefs, setLeftIndicator, setRightIndicator);
 */
export const showHideIndicator = (
  itemRefs: HTMLElement[],
  setLeftIndicator: (isShow: boolean) => void,
  setRightIndicator: (isShow: boolean) => void,
) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  if (lastVisibleIndex === -1 && firstVisibleIndex === -1) {
    setLeftIndicator(false);
    setRightIndicator(false);
  }
  lastVisibleIndex < itemRefs.length - 1 ? setRightIndicator(true) : setRightIndicator(false);
  firstVisibleIndex > 0 ? setLeftIndicator(true) : setLeftIndicator(false);
};
