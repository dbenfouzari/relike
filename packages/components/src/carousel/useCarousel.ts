import { Children, useEffect, useMemo, useRef, useState } from "react";

import { scrollLeftToStep, scrollRightToStep, scrollToStep, showHideIndicator, THRESHOLD } from "./utils";

const handleTargetVisible = (target: Element) => {
  target.setAttribute("visible", "true");
  target.setAttribute("tabIndex", "0");
  target.removeAttribute("aria-hidden");
};
const handleTargetHidden = (target: Element) => {
  target.removeAttribute("visible");
  target.removeAttribute("tabIndex");
  target.setAttribute("aria-hidden", "true");
};

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

  const scrollLeft = (step: number) => {
    scrollLeftToStep(step, itemRefs);
  };

  const scrollRight = (step: number) => {
    scrollRightToStep(step, itemRefs);
  };

  const scrollTo = (index: number) => {
    scrollToStep(index, itemRefs);
  };

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
