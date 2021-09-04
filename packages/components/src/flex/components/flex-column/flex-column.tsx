import { forwardRef } from "react";

import Axis from "../../../axis";
import Flex, { FlexProps } from "../../flex";

export type FlexColumnProps = Omit<FlexProps, "direction" | "textDirection">;

/**
 * Component display name.
 */
const COMPONENT_NAME = "FlexRow";

export const FlexColumn = forwardRef<HTMLDivElement, FlexColumnProps>((props, ref) => (
  <Flex ref={ref} direction={Axis.vertical} {...props} />
));
FlexColumn.displayName = COMPONENT_NAME;

export default FlexColumn;
