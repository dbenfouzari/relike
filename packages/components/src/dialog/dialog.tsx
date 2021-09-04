import classNames from "classnames";
import { forwardRef, ReactNode } from "react";
import { createPortal } from "react-dom";

import Duration from "../duration";
import useDelayedUnmount from "../hooks/useDelayedUnmount";
import classes from "./dialog.module.scss";

export interface DialogProps {
  /**
   * Whether the dialog is open or not.
   */
  isOpen: boolean;

  /**
   * What should it do when dialog wants to close?
   *
   * This is called when user clicks on overlay.
   */
  onClose?: VoidFunction;

  /**
   * The **Dialog** children.
   */
  children: ReactNode;

  /**
   * Remove overlay
   */
  withoutOverlay?: boolean;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "Dialog";

/**
 * Component default props.
 */
const DEFAULT_PROPS: Partial<DialogProps> = {};

/**
 * In user interfaces, a **Dialog** is a "conversation" between the system and the user,
 * and often requests information or an action from the user.
 */
export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ isOpen, withoutOverlay = false, onClose, children }, ref) => {
    const shouldRender = useDelayedUnmount(isOpen, Duration.seconds(0.3));

    return shouldRender
      ? createPortal(
          <>
            {withoutOverlay ? null : (
              <div
                className={classNames(classes.overlay, {
                  [classes.overlay__unmounting]: !isOpen,
                })}
                onClick={onClose}
              />
            )}
            <div
              ref={ref}
              className={classNames(classes.dialog, {
                [classes.dialog__unmounting]: !isOpen,
              })}
            >
              {children}
            </div>
          </>,
          document.body,
        )
      : null;
  },
);
Dialog.displayName = COMPONENT_NAME;
Dialog.defaultProps = DEFAULT_PROPS;

export default Dialog;
