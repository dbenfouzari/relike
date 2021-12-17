import { useEffect, useRef, useState } from "react";

/**
 * Helper to get ExpansionPanel content height when it's not collapsed.
 *
 * To do this, we clone all and compute the height.
 *
 * @param {HTMLElement | null} [parent] The parent.
 * @example
 * getChildrenHeight(<div>...</div>);
 * @returns {number | undefined} The height
 */
const getChildrenHeight = (parent?: HTMLElement | null) => {
  if (!parent) return;

  // We clone de root div since it will be removed with manipulations
  const parentClone = parent.cloneNode(true);

  const div = document.createElement("div");

  for (let i = 0; i < parentClone.childNodes.length; i++) {
    const child = parentClone.childNodes[i];
    div.appendChild(child);
  }

  document.body.appendChild(div);
  const maxHeight = div.getBoundingClientRect().height;
  document.body.removeChild(div);

  return maxHeight;
};

/**
 * Use this hook to get expansion panel logic.
 *
 * @param {React.ReactElement[]} children The content
 * @example
 * useExpansion(...);
 * @returns {any} The maxHeight and handlers
 */
const useExpansion = <T>(children: T) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxContentHeight, setMaxContentHeight] = useState<number | undefined>(0);
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * Toggles panel expansion
   *
   * @example
   * toggleExpand();
   */
  const toggleExpand = () => {
    setIsExpanded((v) => !v);
  };

  /** This hook is used to get children height, so we can store it. */
  useEffect(() => {
    if (contentRef.current) {
      const maxHeight = getChildrenHeight(contentRef.current);
      setMaxContentHeight(maxHeight);
    }
  }, [children]);

  /** This hook is used to set content height based on `isExpanded` variable. */
  useEffect(() => {
    if (isExpanded) {
      setContentHeight(maxContentHeight);
    } else {
      setContentHeight(0);
    }
  }, [isExpanded, maxContentHeight]);

  return {
    ref: contentRef,
    contentHeight,
    isExpanded,
    toggleExpand,
  };
};

export default useExpansion;
