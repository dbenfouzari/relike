import { Children, useEffect, useMemo, useRef, useState } from "react";

import { scrollLeftToStep, scrollRightToStep, scrollToStep, showHideIndicator, THRESHOLD } from "./utils";

/**
 * Automatically apply attributes on visible target
 *
 * @param {Element} target The target
 * @example
 * handleTargetVisible(entry.target)
 */
const handleTargetVisible = (target: Element) => {
  target.setAttribute("visible", "true");
  target.setAttribute("tabIndex", "0");
  target.removeAttribute("aria-hidden");
};

/**
 * Automatically apply attributes on hidden target
 *
 * @param {Element} target The target
 * @example
 * handleTargetHidden(entry.target)
 */
const handleTargetHidden = (target: Element) => {
  target.removeAttribute("visible");
  target.removeAttribute("tabIndex");
  target.setAttribute("aria-hidden", "true");
};

/**
 * Use this hook to get carousel logic.
 *
 * @param   {JSX.Element[]} children The carousel children
 * @example
 * const { leftIndicator, rightIndicator, listRef, scrollLeft, scrollRight, itemRef } = useCarousel(children);
 * @returns {any}                    Handlers
 */
const useCarousel = (children: JSX.Element | JSX.Element[]) => {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useMemo<HTMLElement[]>(() => Array.from({ length: Children.toArray(children).length }), [children]);
  const [leftIndicator, setLeftIndicator] = useState(false);
  const [rightIndicator, setRightIndicator] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.intersectionRatio >= THRESHOLD ? handleTargetVisible(entry.target) : handleTargetHidden(entry.target);

          showHideIndicator(itemRefs, setLeftIndicator, setRightIndicator);
        });
      },
      {
        root: listRef.current,
        threshold: THRESHOLD,
      },
    );

    itemRefs.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [itemRefs]);

  /**
   * Scroll to left
   *
   * @param {number} step The step
   * @example
   * scrollToLeft(2)
   */
  const scrollLeft = (step: number) => {
    scrollLeftToStep(step, itemRefs);
  };

  /**
   * Scroll to right
   *
   * @param {number} step The step
   * @example
   * scrollToRight(2)
   */
  const scrollRight = (step: number) => {
    scrollRightToStep(step, itemRefs);
  };

  /**
   * Scroll to index directly
   *
   * @param {number} index The carousel item index
   * @example
   * scrollTo(2)
   */
  const scrollTo = (index: number) => {
    scrollToStep(index, itemRefs);
  };

  /**
   * Ref generator. It stores a single item ref into refs storage.
   *
   * @param   {number} index The item index
   * @example
   * <div ref={itemRef(0)} />
   * @returns {void}         Nothing
   */
  const itemRef = (index: number) => (elm: HTMLElement | null) => {
    if (elm) itemRefs[index] = elm;
  };

  return {
    leftIndicator,
    rightIndicator,
    listRef,
    scrollLeft,
    scrollRight,
    scrollTo,
    itemRef,
  };
};

export default useCarousel;
