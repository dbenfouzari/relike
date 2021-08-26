import classNames from "classnames";
import { forwardRef, ReactNode } from "react";

import classes from "./toolbar.module.scss";

export interface ToolbarProps {
  /**
   * Before content (placed before the label).
   */
  before?: ReactNode;
  /**
   * After content (placed after the label).
   */
  after?: ReactNode;
  /**
   * Label content.
   */
  children?: ReactNode;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "Toolbar";

/**
 * Component default props.
 */
const DEFAULT_PROPS: Partial<ToolbarProps> = {};

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(({ before, after, children }, ref) => (
  <div
    ref={ref}
    className={classNames(classes.toolbar, {
      [classes.toolbar__hasBefore]: Boolean(before),
      [classes.toolbar__hasAfter]: Boolean(after),
      [classes.toolbar__hasLabel]: Boolean(children),
    })}
  >
    {before && <div className={classes.toolbar_before}>{before}</div>}
    {children && <div className={classes.toolbar_label}>{children}</div>}
    {after && <div className={classes.toolbar_after}>{after}</div>}
  </div>
));
Toolbar.displayName = COMPONENT_NAME;
Toolbar.defaultProps = DEFAULT_PROPS;

export default Toolbar;
