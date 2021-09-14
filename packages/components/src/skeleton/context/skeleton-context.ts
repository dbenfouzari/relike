import { Color } from "@hastics/utils";
import { Colors } from "@hastics/utils";
import { createContext } from "react";

type SkeletonContextValue = {
  active?: boolean;
  color?: Color;
};

const SkeletonContext = createContext<SkeletonContextValue>({
  active: false,
  color: Colors.grey[200],
});

export default SkeletonContext;
