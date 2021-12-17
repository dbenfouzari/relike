import classNames from "classnames";
import { ButtonHTMLAttributes, FC, forwardRef, MouseEvent } from "react";
import { createUseStyles } from "react-jss";

import Icon from "../icon";
import Padding from "../padding";
import Tooltip from "../tooltip";
import classes from "./icon-button.module.scss";

/** Defines IconButton props */
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon component */
  icon: ReturnType<typeof Icon>;
  /** Callback that will be called on click. */
  onPress?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Override className */
  className?: string;
  /**
   * The padding around the button's icon. The entire padded icon will react to input gestures.
   * This property must not be null. It defaults to 8.0 padding on all sides.
   *
   * @default Padding.all(8)
   */
  padding?: Padding;
  /** Get a tooltip and a11y label. */
  label?: string;
}

/** Defines Icon styles props */
interface IconStylesProps {
  /**
   * The padding around the button's icon. The entire padded icon will react to input gestures.
   * This property must not be null. It defaults to 8.0 padding on all sides.
   *
   * @default Padding.all(8)
   */
  padding: Padding;
}

const useStyles = createUseStyles({
  /**
   * Generates wrapper styles based on props
   *
   * @param   {IconStylesProps} padding IconButton padding
   * @example
   * wrapper({ padding: Padding.all(8) })
   * @returns {CSSProperties}           The styles.
   */
  wrapper: ({ padding }: IconStylesProps) => ({
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
  ({ label, padding = Padding.all(8), className, onPress, icon, ...props }, ref) => {
    const styles = useStyles({ padding });

    const rendered = (
      <button
        data-testid="icon-button__button"
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

    return label ? <Tooltip label={label}>{rendered}</Tooltip> : rendered;
  },
);

export default IconButton;
