import { Padding } from "@hastics/utils";
import classNames from "classnames";
import { ButtonHTMLAttributes, FC, forwardRef, MouseEvent } from "react";
import { createUseStyles } from "react-jss";

import Icon from "../icon";
import classes from "./icon-button.module.scss";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReturnType<typeof Icon>;
  onPress?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  /**
   * The padding around the button's icon. The entire padded icon will react to input gestures.
   * This property must not be null. It defaults to 8.0 padding on all sides.
   * @default 8
   */
  padding?: Padding;
}

export interface IconButtonBaseProps {
  icon: ReturnType<typeof Icon>;
  onPress?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  /**
   * The padding around the button's icon. The entire padded icon will react to input gestures.
   * This property must not be null. It defaults to 8.0 padding on all sides.
   * @default 8
   */
  padding?: Padding;
}

interface StyledIconProps {
  padding: Padding;
}

const useStyles = createUseStyles({
  wrapper: ({ padding }: StyledIconProps) => ({
    ...padding.toStyle(),
  }),
});

/**
 * An **IconButton** is a component that you can use to show a clickable **Icon**.
 *
 * If the `onPress` callback is null, then the button will be disabled and will not react to touch.
 *
 * @see Icon
 */
export const IconButton: FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ padding = Padding.all(8), className, onPress, icon, ...props }, ref) => {
    const styles = useStyles({ padding });

    return (
      <button
        ref={ref}
        onClick={onPress}
        {...props}
        className={classNames(
          classes.wrapper,
          styles.wrapper,
          {
            [classes.wrapper__clickable]: !!onPress,
          },
          className,
        )}
      >
        {icon}
      </button>
    );
  },
);

export default IconButton;
