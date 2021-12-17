import { MutableRefObject } from "react";

/**
 * A function that returns nothing.
 */
export type FnRef<T> = (value: T) => void;

/**
 * Used to merge tooltip refs together.
 *
 * @param   {MutableRefObject[]} refs The refs you want to merge.
 * @example
 * mergeRefs(divRef, arrRef);
 * @returns {FnRef}                   a new ref object.
 */
export function mergeRefs<T>(...refs: Array<null | MutableRefObject<T | null> | FnRef<T>>): FnRef<T> {
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
