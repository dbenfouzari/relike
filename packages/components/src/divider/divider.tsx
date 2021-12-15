import classNames from "classnames";
import { forwardRef } from "react";

import classes from "./divider.module.scss";

export interface DividerProps {
  /** This prop is used to override the style */
  className?: string;

  /**
   * "dark" variant should be used on light background.
   * "light" variant should be used on dark background.
   */
  variant?: "dark" | "light";
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "Divider";

export const Divider = forwardRef<HTMLDivElement, DividerProps>(({ className, variant = "dark", ...props }, ref) => (
  <div
    ref={ref}
    data-testid="divider"
    className={classNames(
      classes.divider,
      {
        [classes.divider__light]: variant === "light",
        [classes.divider__dark]: variant === "dark",
      },
      className,
    )}
    {...props}
  />
));
Divider.displayName = COMPONENT_NAME;

export default Divider;
