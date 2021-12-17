import classNames from "classnames";
import { ButtonHTMLAttributes, forwardRef, useMemo } from "react";

import Brightness from "../brightness";
import Color from "../color";
import Colors from "../colors";
import { Emphasis } from "../emphasis";
import { useTheme } from "../hooks";
import Icon from "../icon";
import { IconData } from "../icons";
import Text from "../text";
import Typography from "../typography";
import classes from "./button.module.scss";

/** Defines Button props */
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
   * @default Colors.blue[700]
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
  /** The button text. It has to be a `string` ! */
  children: string;
  /** Whether the button is disabled or not. */
  disabled?: boolean;
  /** Optional Icon */
  icon?: IconData;
  /** Does the button takes full width */
  block?: boolean;
  /** Override className */
  className?: string;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "Button";

/**
 * Helper to get hover and active lightness
 *
 * @param   {Color} color The button color
 * @example
 * getLightness(Colors.blue)
 * @returns {any}         An object with hover and active lightness.
 */
export const getLightness = (color: Color) => {
  const currentLightness = color.lightness;
  const hoverLightness = currentLightness - 5 < 0 ? currentLightness + 5 : currentLightness - 5;
  const activeLightness = currentLightness - 10 < 0 ? currentLightness + 10 : currentLightness - 10;

  return {
    hover: hoverLightness,
    active: activeLightness,
  };
};

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
 * @see https://material.io/archive/guidelines/components/buttons.html Material.io for guidelines.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ block, emphasis = Emphasis.medium, className, color, icon, children, disabled, ...props }, ref) => {
    const { primaryColor } = useTheme();
    const mainColor = color ?? primaryColor;

    const foregroundColor = useMemo(() => {
      if (emphasis === Emphasis.high) {
        return mainColor.estimateBrightness() === Brightness.dark ? Colors.white : Colors.black;
      }

      return mainColor;
    }, [emphasis, mainColor]);

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
            [classes.button__medium]: emphasis === Emphasis.medium,
            [classes.button__low]: emphasis === Emphasis.low,
          },
          className,
        )}
        {...props}
      >
        {icon && <Icon icon={icon} color={foregroundColor} size={18} className={classes.icon} />}
        <Text style={Typography.blackMountainView.button?.copyWith({ color: foregroundColor })}>{children}</Text>

        <style jsx>{`
          --button-color: ${mainColor.toRGBA()};
          --button-color--low-opacity: ${mainColor?.withOpacity(0.05).toRGBA()};
          --button-color--medium-opacity: ${mainColor?.withOpacity(0.1).toRGBA()};
          --button-color--high--hover: ${mainColor?.withLightness(getLightness(mainColor).hover).toRGBA()};
          --button-color--high--active: ${mainColor?.withLightness(getLightness(mainColor).active).toRGBA()};
        `}</style>
      </button>
    );
  },
);

Button.displayName = COMPONENT_NAME;

export default Button;
