import { forwardRef } from "react";

import Axis from "../../../axis";
import Flex, { FlexProps } from "../../flex";

/** Defines FlexRow props */
export type FlexRowProps = Omit<FlexProps, "direction" | "verticalDirection">;

/** Component display name. */
const COMPONENT_NAME = "FlexRow";

export const FlexRow = forwardRef<HTMLDivElement, FlexRowProps>((props, ref) => (
  <Flex ref={ref} direction={Axis.horizontal} {...props} />
));
FlexRow.displayName = COMPONENT_NAME;

export default FlexRow;
