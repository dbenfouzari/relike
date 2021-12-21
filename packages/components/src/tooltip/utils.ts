import { LegacyRef, MutableRefObject, RefCallback } from "react";

/**
 * Used to merge tooltip refs together.
 *
 * @param   {MutableRefObject[]} refs The refs you want to merge.
 * @example
 * mergeRefs(divRef, arrRef);
 * @returns {RefCallback}             a new ref object.
 */
export function mergeRefs<T>(...refs: Array<MutableRefObject<T> | LegacyRef<T>>): RefCallback<T> {
  return (value) =>
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
}
