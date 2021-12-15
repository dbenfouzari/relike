import debounce from "lodash.debounce";
import pull from "lodash.pull";
import { useEffect, useRef, useState } from "react";

import Duration from "../duration";

type Tooltip = { open: VoidFunction; close: VoidFunction; anchorElement: HTMLElement };
type Timeout = ReturnType<typeof setTimeout>;

/**
 * This singleton handle a global `mouseover` event listener on the `document` in order to toggle tooltips when
 * entering and leaving their anchor element.
 */
const tooltipMouseToggle = (() => {
  /** List of tooltips to toggle on anchor enter/leave. */
  let tooltips: Array<Tooltip> | undefined;

  /** Global listener added on the document. */
  let globalListener: undefined | ((evt: MouseEvent) => void);

  function addGlobalListener() {
    if (globalListener) return;
    globalListener = debounce((evt) => {
      if (!tooltips || !evt.target) return;
      for (const { open, close, anchorElement } of tooltips) {
        if (anchorElement.contains(evt.target)) {
          open();
        } else {
          close();
        }
      }
    }, 10);
    document.addEventListener("mouseover", globalListener);
  }

  function removeGlobalListener() {
    if (!globalListener) return;
    document.removeEventListener("mouseover", globalListener);
    globalListener = undefined;
  }

  return {
    addTooltip(tooltip: Tooltip) {
      if (!tooltips) {
        tooltips = [];
        addGlobalListener();
      }
      tooltips.push(tooltip);
    },
    removeTooltip(actions: Tooltip) {
      if (!tooltips) return;
      pull(tooltips, actions);
      if (tooltips.length === 0) {
        removeGlobalListener();
        tooltips = undefined;
      }
    },
  };
})();

export function useTooltipOpen(delay: Duration, anchorElement: HTMLElement | null, closeAfter?: Duration): boolean {
  const timer = useRef<Timeout>();
  const shouldOpen = useRef<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeAfterMs = closeAfter?.inMilliseconds;

  useEffect(() => {
    if (!anchorElement) return;

    const tooltip: Tooltip = {
      anchorElement,
      open() {
        if (!shouldOpen.current) {
          shouldOpen.current = true;

          timer.current = setTimeout(() => {
            setIsOpen(shouldOpen.current);
          }, delay.inMilliseconds);

          // If we want automatically close
          if (closeAfterMs) {
            setTimeout(tooltip.close, closeAfterMs);
          }
        }
      },
      close() {
        if (timer.current) {
          clearTimeout(timer.current);
          timer.current = undefined;
        }
        if (shouldOpen.current) {
          shouldOpen.current = false;
          setIsOpen(shouldOpen.current);
        }
      },
    };

    const keydown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      tooltip.close();
    };

    tooltipMouseToggle.addTooltip(tooltip);
    anchorElement.addEventListener("focusin", tooltip.open);
    anchorElement.addEventListener("focusout", tooltip.close);
    anchorElement.addEventListener("keydown", keydown);

    return () => {
      tooltipMouseToggle.removeTooltip(tooltip);
      anchorElement.removeEventListener("focusin", tooltip.open);
      anchorElement.removeEventListener("focusout", tooltip.close);
      anchorElement.removeEventListener("keydown", keydown);
      tooltip.close();
    };
  }, [anchorElement, closeAfterMs, delay.inMilliseconds, shouldOpen]);

  return isOpen;
}
