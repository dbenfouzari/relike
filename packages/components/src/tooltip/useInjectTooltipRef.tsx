import { cloneElement, ReactNode, useMemo } from "react";

import { mergeRefs } from "./utils";

/**
 * Use this hook to handle tooltip ref injection.
 *
 * Add ref and ARIA attribute(s) in tooltip children or wrapped children.
 * Button, IconButton, Icon and React HTML elements don't need to be wrapped but any other kind of children (array, fragment, custom components)
 * will be wrapped in a <span>.
 *
 * @param {ReactNode} children The tooltip children
 * @param {(e: HTMLDivElement) => void} setAnchorElement A method to set anchor element.
 * @param {boolean} isOpen Is the tooltip open ?
 * @param {string} id The tooltip unique identifier.
 * @example
 * useInjectTooltipRef(<div />, () => {}, true, "test");
 * @returns {ReactNode} A wrapping div that contains the tooltip.
 */
export const useInjectTooltipRef = (
  children: ReactNode,
  setAnchorElement: (e: HTMLDivElement) => void,
  isOpen: boolean,
  id: string,
): ReactNode => {
  return useMemo(() => {
    const ariaProps = { "aria-describedby": isOpen ? id : undefined };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const untypedChildren = children as any;

    if (
      untypedChildren &&
      untypedChildren["$$typeof"] &&
      untypedChildren["props.disabled"] !== true &&
      untypedChildren["props.isDisabled"] !== true
    ) {
      const element = untypedChildren;
      if (element.ref) {
        setAnchorElement(element.ref.current);
      }

      return cloneElement(element, {
        ...element.props,
        ...ariaProps,
        ref: mergeRefs(element.ref, setAnchorElement),
      });
    }

    return (
      <div className="tooltip-anchor-wrapper" ref={setAnchorElement} {...ariaProps}>
        {children}
      </div>
    );
  }, [isOpen, id, children, setAnchorElement]);
};
