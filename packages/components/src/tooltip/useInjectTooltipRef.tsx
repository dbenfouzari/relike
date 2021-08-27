import { cloneElement, MutableRefObject, ReactNode, useMemo } from "react";

type FnRef<T> = (value: T) => void;

function mergeRefs<T>(...refs: Array<MutableRefObject<T | null> | FnRef<T>>): FnRef<T> {
  return (value) =>
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        // eslint-disable-next-line no-param-reassign
        (ref as MutableRefObject<T>).current = value;
      }
    });
}

/**
 * Add ref and ARIA attribute(s) in tooltip children or wrapped children.
 * Button, IconButton, Icon and React HTML elements don't need to be wrapped but any other kind of children (array, fragment, custom components)
 * will be wrapped in a <span>.
 */
export const useInjectTooltipRef = (
  children: ReactNode,
  setAnchorElement: (e: HTMLDivElement) => void,
  isOpen: boolean,
  id: string,
): ReactNode => {
  return useMemo(() => {
    const ariaProps = { "aria-describedby": isOpen ? id : undefined };
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
