import { RefObject, useEffect } from "react";

/**
 * Use this hook to do an action when user clicks outside given container.
 *
 * We use it to close a modal when user clicks outside it, for example.
 *
 * @param {RefObject} ref The element
 * @param {Function} handler What happens where user clicks outside
 * @example
 * const modalRef = useRef();
 * useOnClickOutside(modalRef, closeModal);
 */
const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => unknown,
) => {
  useEffect(() => {
    /**
     * The listener bound on the `ref` element.
     *
     * @param {MouseEvent | TouchEvent} event Dispatched event.
     * @example
     * listener();
     */
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("click", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("click", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
};

export default useOnClickOutside;
