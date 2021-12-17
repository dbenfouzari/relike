import debounce from "lodash.debounce";
import pull from "lodash.pull";
import { useEffect, useRef, useState } from "react";

import Duration from "../duration";
import { Timeout } from "../types";

/** Defines a tooltip */
type Tooltip = {
  /**
   * Method that will be called to open the tooltip.
   */
  open: VoidFunction;
  /**
   * Method that will be called to close the tooltip.
   */
  close: VoidFunction;
  /**
   * The element where the tooltip will be bound.
   */
  anchorElement: HTMLElement;
};

/**
 * This singleton handle a global `mouseover` event listener on the `document` in order to toggle tooltips when
 * entering and leaving their anchor element.
 */
const tooltipMouseToggle = (() => {
  /** List of tooltips to toggle on anchor enter/leave. */
  let tooltips: Array<Tooltip> | undefined;

  /** Global listener added on the document. */
  let globalListener: undefined | ((evt: MouseEvent) => void);

  /**
   * A handler that creates global listener.
   *
   * @example
   * addGlobalListener(); // it adds listener on mouseover
   */
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

  /**
   * A handler that removes global listener.
   *
   * @example
   * removeGlobalListener(); // it removes listener on mouseover
   */
  function removeGlobalListener() {
    if (!globalListener) return;
    document.removeEventListener("mouseover", globalListener);
    globalListener = undefined;
  }

  return {
    /**
     * Use this method to create a tooltip.
     *
     * @param {Tooltip} tooltip The tooltip you want to add
     * @example
     * addTooltip(open)
     */
    addTooltip(tooltip: Tooltip) {
      if (!tooltips) {
        tooltips = [];
        addGlobalListener();
      }
      tooltips.push(tooltip);
    },
    /**
     * Use this method to remove a tooltip
     *
     * @param {Tooltip} tooltip The tooltip you want to remove.
     * @example
     * removeTooltip(tooltip);
     */
    removeTooltip(tooltip: Tooltip) {
      if (!tooltips) return;
      pull(tooltips, tooltip);
      if (tooltips.length === 0) {
        removeGlobalListener();
        tooltips = undefined;
      }
    },
  };
})();

/**
 * Use this hook to control the tooltip.
 *
 * @param   {Duration}           delay         The delay after which the tooltip opens.
 * @param   {HTMLElement | null} anchorElement The element on which the tooltip will be bound.
 * @param   {Duration}           closeAfter    Automatically closes the tooltip after this delay.
 * @example
 * useTooltipOpen(Duration.seconds(1), null)
 * @returns {boolean}                          isOpen
 */
export function useTooltipOpen(delay: Duration, anchorElement: HTMLElement | null, closeAfter?: Duration): boolean {
  const timer = useRef<Timeout>();
  const shouldOpen = useRef<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeAfterMs = closeAfter?.inMilliseconds;

  useEffect(() => {
    if (!anchorElement) return;

    const tooltip: Tooltip = {
      anchorElement,
      /**
       * Opens the tooltip.
       *
       * @example
       * tooltip.open();
       */
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
      /**
       * Closes the tooltip.
       *
       * @example
       * tooltip.close();
       */
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

    /**
     * Handler that will be called on keydown pressed in anchorElement.
     *
     * @param {KeyboardEvent} event The keyboard event.
     * @example
     * anchorElement.addEventListener("keydown", keydown);
     */
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
