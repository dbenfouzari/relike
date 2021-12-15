import { Children, ReactElement, useState } from "react";

import type { TabItemProps } from "../components/tab-item";

/**
 * Returns the default tab key based on children and maybe default active key.
 *
 * @param {ReactElement<TabItemProps>[]} children The tab items.
 * @param {string} defaultActiveKey The default selected tab key
 * @example
 * const [activeIndex, setActiveIndex] = useDefaultState(children, defaultActiveKey);
 * @returns {[string, (string) => void]} State setter and getter
 */
const useDefaultState = <T extends ReactElement<TabItemProps>[]>(children: T, defaultActiveKey?: string) => {
  return useState(
    Children.map(children, (child) => child).findIndex((child) => {
      if (!defaultActiveKey) return true;
      return child.key === `.$${defaultActiveKey}`;
    }),
  );
};

export default useDefaultState;
