// TODO: Replace styled-components by react-jss

import { Colors } from "@hastics/utils";
import { css } from "styled-components";

export const baseStyles = css`
  cursor: default;
  pointer-events: none;
`;

export const disabledStyles = css`
  color: ${Colors.black26.toRGB()};
`;
