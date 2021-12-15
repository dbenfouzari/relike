import { Children, ReactElement, useCallback, useEffect, useMemo, useRef } from "react";

import type { TabItemProps } from "../components/tab-item";
import useDefaultState from "./useDefaultState";

/**
 * Use this hook to handle tabs interactions.
 *
 * @param {ReactElement} children The multiple `Tabs.Item`
 * @param {string} defaultActiveKey The default active tab key
 * @param {number} space The space between each tab
 * @example
 * const { activeIndex, barRef, handleTabChange, itemRef } = useTabs(children, defaultActiveKey, space);
 * @returns {any} handler and something // TODO: Better returns
 */
const useTabs = <T extends ReactElement<TabItemProps>[]>(children: T, defaultActiveKey?: string, space = 0) => {
  const [activeIndex, setActiveIndex] = useDefaultState(children, defaultActiveKey);
  const itemRefs = useMemo<HTMLElement[]>(() => Array.from({ length: Children.toArray(children).length }), [children]);
  const barRef = useRef<HTMLDivElement>(null);

  /**
   * This method aims to generate a ref.
   *
   * @param {number} index The tab index
   * @example
   * <InnerTabItem ref={itemRef(index)} />
   * @returns {void} nothing
   */
  const itemRef = (index: number) => (elm: HTMLElement | null) => {
    if (elm) itemRefs[index] = elm;
  };

  const getLeft = useCallback(
    (index: number) => {
      const previousWidths = itemRefs.reduce((total, current, currentIndex) => {
        if (currentIndex < index) return total + current.offsetWidth;
        return total;
      }, 0);

      return previousWidths + space * index;
    },
    [itemRefs, space],
  );

  useEffect(() => {
    if (!barRef.current) return;

    const width = itemRefs[activeIndex].offsetWidth;
    barRef.current.style.width = `${width}px`;
    barRef.current.style.left = `${getLeft(activeIndex)}px`;
  }, [activeIndex, getLeft, itemRefs, space]);

  const handleTabChange = useCallback(
    (tabIndex: number) => () => {
      setActiveIndex(tabIndex);
    },
    [setActiveIndex],
  );

  return { activeIndex, handleTabChange, itemRef, barRef };
};

export default useTabs;
