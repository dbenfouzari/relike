import classNames from "classnames";
import { ButtonHTMLAttributes, forwardRef, useMemo } from "react";
import { createUseStyles } from "react-jss";

import Color from "../color";
import Colors from "../colors";
import { Icon } from "../icon";
import { IconData } from "../icons";
import Text from "../text";
import Typography from "../typography";
import classes from "./button.module.scss";

export enum Emphasis {
  /**
   * Basically a text button.
   */
  low = "low",
  /**
   * Transparent, with borders.
   */
  medium = "medium",
  /**
   * Filled with color.
   */
  high = "high",
}

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /**
   * This is the button main color.
   *
   * It will change :
   *
   * - `background-color`, `border-color` on `Emphasis.high`
   * - `border-color`, text `color` on `Emphasis.medium`
   * - text `color` on `Emphasis.low`
   *
   * It will also affect hover and active state.
   *
   * @default Colors.blue[500]
   */
  color?: Color;

  /**
   * The button emphasis.
   *
   * - `Emphasis.low` : Text buttons are typically used for less important actions.
   * - `Emphasis.medium` : Outlined buttons are used for more emphasis than text buttons due to the stroke.
   * - `Emphasis.high`: Contained buttons have more emphasis, as they use a color fill and shadow.
   *
   * @default Emphasis.medium
   */
  emphasis?: Emphasis;

  /**
   * The button test. It has to be a `string` !
   */
  children: string;

  /**
   * Whether the button is disabled or not.
   */
  disabled?: boolean;

  icon?: IconData;

  block?: true;

  className?: string;
}

interface ButtonStylesProps {
  color: Color;
  disabled?: boolean;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "Button";

const useStyles = createUseStyles({
  buttonLow: ({ color, disabled }: ButtonStylesProps) => ({
    "&:hover, &:focus": {
      backgroundColor: disabled ? "transparent" : color.withOpacity(0.05).toRGBA(),
    },
    "&:active": {
      backgroundColor: disabled ? "transparent" : color.withOpacity(0.1).toRGBA(),
    },
  }),
  buttonMedium: ({ color, disabled }: ButtonStylesProps) => ({
    border: `1px solid ${color.toRGBA()}`,
    "&:hover, &:focus": {
      backgroundColor: disabled ? "transparent" : color.withOpacity(0.05).toRGBA(),
    },
    "&:active": {
      backgroundColor: disabled ? "transparent" : color.withOpacity(0.1).toRGBA(),
    },
  }),
  buttonHigh: ({ color, disabled }: ButtonStylesProps) => {
    const currentLightness = color.lightness;
    const hoverLightness = currentLightness - 5 < 0 ? currentLightness + 5 : currentLightness - 5;
    const activeLightness = currentLightness - 10 < 0 ? currentLightness + 10 : currentLightness - 10;

    return {
      border: `1px solid ${color.toRGBA()}`,
      backgroundColor: color.toRGBA(),
      "&:hover, &:focus": {
        backgroundColor: disabled ? color.toRGBA() : color.withLightness(hoverLightness).toRGBA(),
      },
      "&:active": {
        backgroundColor: disabled ? color.toRGBA() : color.withLightness(activeLightness).toRGBA(),
      },
    };
  },
});

/**
 * Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
 *
 * - Dialogs
 * - Modal windows
 * - Forms
 * - Cards
 * - Toolbars
 *
 * ### Identifiable
 * Buttons should indicate that they can trigger an action.
 *
 * ### Findable
 * Buttons should be easy to find among other elements, including other buttons.
 *
 * ### Clear
 * A button’s action and state should be clear.
 *
 * @example
 * <Button emphasis={Emphasis.high}>
 *   Hello World!
 * </Button>
 *
 * @see https://material.io/archive/guidelines/components/buttons.html Material.io for guidelines.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { block, emphasis = Emphasis.medium, className, color = Colors.blue[500], icon, children, disabled, ...props },
    ref,
  ) => {
    const styles = useStyles({ color, disabled });

    const foregroundColor = useMemo(() => {
      if (emphasis === Emphasis.high) {
        return color.estimateBrightness() === "dark" ? Colors.white : Colors.black;
      }

      return color;
    }, [color, emphasis]);

    return (
      <button
        disabled={disabled}
        ref={ref}
        className={classNames(
          classes.button,
          {
            [classes.button__disabled]: disabled,
            [classes.button__block]: block,
            [classes.button__high]: emphasis === Emphasis.high,
            [styles.buttonLow]: emphasis === Emphasis.low,
            [styles.buttonMedium]: emphasis === Emphasis.medium,
            [styles.buttonHigh]: emphasis === Emphasis.high,
          },
          className,
        )}
        {...props}
      >
        {icon && <Icon icon={icon} color={foregroundColor} size={18} className={classes.icon} />}
        <Text style={Typography.blackMountainView.button?.copyWith({ color: foregroundColor })}>{children}</Text>
      </button>
    );
  },
);

Button.displayName = COMPONENT_NAME;

export default Button;
