import { useContext } from "react";

import SkeletonContext from "../context/skeleton-context";

/**
 * Use this hook to get information from SkeletonContext.
 *
 * It includes :
 * - `color` : that is the base Skeleton color
 * - `active` : if the skeleton should be animated
 *
 * This way, you can now in children if you should animate and which is the color.
 *
 * @example
 * const { color = Colors.grey, active = false } = useSkeletonContext();
 * @returns {any} the Skeleton context value
 */
const useSkeletonContext = () => {
  return useContext(SkeletonContext);
};

export default useSkeletonContext;
