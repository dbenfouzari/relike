import { forwardRef, MutableRefObject, ReactNode, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { uid } from "uid";

import Colors from "../colors";
import Duration from "../duration";
import Text from "../text";
import TextStyle from "../text-style";
import { Maybe } from "../types";
import classes from "./tooltip.module.scss";
import { useInjectTooltipRef } from "./useInjectTooltipRef";
import { useTooltipOpen } from "./useTooltipOpen";

export enum TooltipPlacement {
  top = "top",
  right = "right",
  bottom = "bottom",
  left = "left",
}

export interface TooltipProps {
  /** Anchor (element on which we activate the tooltip). */
  children: ReactNode;
  /**
   * Delay before opening the tooltip.
   *
   * @default Duration.milliseconds(500)
   */
  delay?: Duration;
  /** Whether the tooltip is displayed even without the mouse hovering the anchor. */
  forceOpen?: boolean;
  /** Label text. */
  label?: string;
  /**
   * Placement of the tooltip relative to the anchor.
   *
   * @default TooltipPlacement.bottom
   */
  placement?: TooltipPlacement;
  /**
   * If set, automatically close **Tooltip** after this time.
   */
  closeAfter?: Duration;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "Tooltip";

/**
 * Arrow size (in pixel).
 */
const ARROW_SIZE = 8;

// TODO: Remove duplicate `mergeRefs`
type FnRef<T> = (value: T) => void;

function mergeRefs<T>(...refs: Array<null | MutableRefObject<T | null> | FnRef<T>>): FnRef<T> {
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

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      delay = Duration.milliseconds(500),
      label,
      placement = TooltipPlacement.bottom,
      forceOpen,
      children,
      closeAfter,
      ...props
    },
    ref,
  ) => {
    const id = useMemo(() => `tooltip-${uid()}`, []);

    const [popperElement, setPopperElement] = useState<Maybe<HTMLElement>>(null);
    const [anchorElement, setAnchorElement] = useState<Maybe<HTMLElement>>(null);

    const { styles, attributes } = usePopper(anchorElement, popperElement, {
      placement,
      modifiers: [
        {
          name: "offset",
          options: { offset: [0, ARROW_SIZE] },
        },
      ],
    });

    // const position = attributes?.popper?.["data-popper-placement"] ?? placement;
    const isOpen = useTooltipOpen(delay, anchorElement, closeAfter) || forceOpen;
    const wrappedChildren = useInjectTooltipRef(children, setAnchorElement, isOpen as boolean, id);

    // Cannot render on SSR.
    if (typeof document === "undefined") return null;

    if (!label) return <>{children}</>; // Have to wrap with fragment <></> or TypeScript may think we return undefined.

    return (
      <>
        {wrappedChildren}
        {isOpen &&
          createPortal(
            <div
              ref={mergeRefs(ref, setPopperElement)}
              {...props}
              id={id}
              role="tooltip"
              aria-label={label}
              className={classes.tooltip}
              style={styles.popper}
              {...attributes.popper}
            >
              <div className="tooltip__arrow" />

              <Text style={new TextStyle({ fontFamily: "Roboto", fontSize: 10, color: Colors.white })}>
                {label.indexOf("\n") !== -1
                  ? label.split("\n").map((sentence: string) => <p key={sentence}>{sentence}</p>)
                  : label}
              </Text>
            </div>,
            document.body,
          )}
      </>
    );
  },
);
Tooltip.displayName = COMPONENT_NAME;

export default Tooltip;
