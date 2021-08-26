import classNames from "classnames";
import { FC } from "react";
import { createPortal } from "react-dom";

import Duration from "../duration";
import useDelayedUnmount from "../hooks/useDelayedUnmount";
import classes from "./dialog.module.scss";

interface DialogProps {
  isOpen: boolean;
  onClose?: VoidFunction;
}

const Dialog: FC<DialogProps> = ({ isOpen, onClose }) => {
  const shouldRender = useDelayedUnmount(isOpen, Duration.seconds(0.3));

  return shouldRender
    ? createPortal(
        <>
          <div
            className={classNames(classes.overlay, {
              [classes.overlay__unmounting]: !isOpen,
            })}
            onClick={onClose}
          />
          <div
            className={classNames(classes.dialog, {
              [classes.dialog__unmounting]: !isOpen,
            })}
          >
            Dialog
          </div>
        </>,
        document.body,
      )
    : null;
};

export default Dialog;
