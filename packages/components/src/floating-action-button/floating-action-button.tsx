import classNames from "classnames";
import { ButtonHTMLAttributes, forwardRef, useMemo } from "react";
import { createUseStyles } from "react-jss";

import Color from "../color";
import Colors from "../colors";
import Icon from "../icon";
import { IconData } from "../icons";
import Text from "../text";
import Typography from "../typography";
import classes from "./floating-action-button.module.scss";

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

export interface FloatingActionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
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
   * @default Emphasis.high
   */
  emphasis?: Emphasis;

  /**
   * The button label. It has to be a `string` !
   *
   * This is used when you want an extended FAB.
   */
  label?: string;

  /**
   * Whether the button is disabled or not.
   */
  disabled?: boolean;

  /**
   * The icon that will be shown.
   *
   * Must be representative.
   * A FAB's icon should clearly illustrate its action.
   * A FAB shouldn't contain notifications or actions found elsewhere on a screen.
   */
  icon: IconData;

  /**
   * A mini FAB should be used on smaller screens.
   * When a screen width is 460dp or less, the container of a default FAB (56dp) should transform into the mini size (40dp).
   *
   * Mini FABs can also be used to create visual continuity with other screen elements.
   */
  mini?: boolean;
  className?: string;

  /**
   * The width of an extended FAB’s container can be fixed or fluid.
   * A fixed width container is defined by the cumulative width of the icon, text label, and padding.
   * A fluid width container is defined by its relationship to something else on screen, such as screen width or the layout grid.
   *
   * @example
   * <FloatingActionButton block icon={Icons.check} label="See results" />
   */
  block?: boolean;
}

interface FloatingActionButtonStylesProps {
  color: Color;
  disabled?: boolean;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "FloatingActionButton";

const useStyles = createUseStyles({
  buttonLow: ({ color, disabled }: FloatingActionButtonStylesProps) => ({
    "&:hover, &:focus": {
      backgroundColor: disabled ? "transparent" : color.withOpacity(0.05).toRGBA(),
    },
    "&:active": {
      backgroundColor: disabled ? "transparent" : color.withOpacity(0.1).toRGBA(),
    },
  }),
  buttonMedium: ({ color, disabled }: FloatingActionButtonStylesProps) => ({
    border: `1px solid ${color.toRGBA()}`,
    "&:hover, &:focus": {
      backgroundColor: disabled ? "transparent" : color.withOpacity(0.05).toRGBA(),
    },
    "&:active": {
      backgroundColor: disabled ? "transparent" : color.withOpacity(0.1).toRGBA(),
    },
  }),
  buttonHigh: ({ color, disabled }: FloatingActionButtonStylesProps) => {
    const currentLightness = color.lightness;
    const hoverLightness = currentLightness - 5 < 0 ? currentLightness + 10 : currentLightness - 5;
    const activeLightness = currentLightness - 10 < 0 ? currentLightness + 20 : currentLightness - 10;

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
 * A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all
 * screen content, typically as a circular shape with an icon in its center. FABs come in three types: regular, mini,
 * and extended.
 *
 * Only use a FAB if it is the most suitable way to present a screen's primary action.
 *
 * ### Actions
 *
 * A floating action button (FAB) can trigger an action either on the current screen, or it can perform an action that creates a new screen....
 *
 * A floating action button (FAB) can trigger an action either on the current screen, or it can perform an action that creates a new screen.
 *
 * A FAB promotes an important, constructive action such as:
 *
 * - Create
 * - Favorite
 * - Share
 * - Start a process
 *
 * Avoid using a FAB for minor or destructive actions, such as:
 *
 * - Archive or trash
 * - Alerts or errors
 * - Limited tasks like cutting text
 * - Controls better suited to a toolbar (like controls to adjust volume or font color)
 *
 * ### Extended FAB
 * The extended FAB is wider, and it includes a text label.
 * You can implement it by passing a `label` to the FloatingActionButton component
 *
 * @example
 * <FloatingActionButton icon={Icons.check} label="See results" />
 *
 * @see https://material.io/components/buttons-floating-action-button
 */
export const FloatingActionButton = forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
  (
    { label, block, mini, emphasis = Emphasis.high, className, color = Colors.blue[500], icon, disabled, ...props },
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
            [classes.button__extended]: Boolean(label),
            [classes.button__block]: block,
            [classes.button__mini]: mini,
            [classes.button__high]: emphasis === Emphasis.high,
            [styles.buttonLow]: emphasis === Emphasis.low,
            [styles.buttonMedium]: emphasis === Emphasis.medium,
            [styles.buttonHigh]: emphasis === Emphasis.high,
          },
          className,
        )}
        {...props}
      >
        <Icon icon={icon} color={foregroundColor} size={24} className={classes.icon} />

        {label && (
          <Text style={Typography.blackMountainView.button?.copyWith({ color: foregroundColor })}>{label}</Text>
        )}
      </button>
    );
  },
);

FloatingActionButton.displayName = COMPONENT_NAME;

export default FloatingActionButton;
