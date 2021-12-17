import { createContext } from "react";

import Color from "../../color";
import Colors from "../../colors";

/** Defines SkeletonContext value */
type SkeletonContextValue = {
  /** if the skeleton should be animated */
  active?: boolean;
  /** that is the base Skeleton color */
  color?: Color;
};

const SkeletonContext = createContext<SkeletonContextValue>({
  active: false,
  color: Colors.grey[200],
});

export default SkeletonContext;
