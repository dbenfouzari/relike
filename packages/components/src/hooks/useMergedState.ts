import { useEffect, useState } from "react";

/**
 * Use this hook to get a state and automatically update it on value change.
 *
 * Useful to update your state when an API response is caught.
 *
 * @param   {any} value The value to store and update
 * @example
 * const Comp = ({ post }) => {
 *   const [nextPost, setNextPost] = useMergedState(post);
 *
 *   // do something with `nextPost` but when `post` changes, it will replace `nextPost`.
 * }
 * @returns {any}       The state and its updater
 */
const useMergedState = <T>(value: T) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return [internalValue, setInternalValue] as const;
};

export default useMergedState;
