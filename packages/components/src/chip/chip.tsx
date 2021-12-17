import classNames from "classnames";
import { forwardRef, MouseEvent, ReactNode, ReactText, useMemo } from "react";
import { createUseStyles } from "react-jss";

import Brightness from "../brightness";
import Color from "../color";
import Colors from "../colors";
import Icon from "../icon";
import IconButton from "../icon-button";
import Icons from "../icons";
import Text from "../text";
import TextStyle from "../text-style";
import { Maybe } from "../types";
import classes from "./chip.module.scss";

/** Defines Chip props */
export interface ChipProps {
  /** This prop is used to override the style */
  className?: string;

  /**
   * Use this to override default color.
   *
   * When changing color, chip will automatically adjust delete icon color and text color based on this color's lightness.
   * If it's dark, text and icon will be light.
   * If it's light, text and icon will be dark.
   *
   * @default Colors.grey[200]
   */
  color?: Color;

  /**
   * What happens when pressing on chip.
   *
   * If `null` or `undefined` passed, it will consider it not clickable and will not apply hover and active effects.
   *
   * @default undefined
   */
  onPress?: Maybe<VoidFunction>;

  /**
   * What happens when pressing on chip delete icon.
   *
   * If `null` or `undefined` passed, delete icon won't be displayed.
   * If you pass in a function, it will show delete icon.
   *
   * @default undefined
   */
  onDeletePress?: Maybe<VoidFunction>;

  /**
   * This is what is shown at left. It can be an image, or a text (in a ReactNode).
   *
   * @default null
   */
  avatar?: ReactNode;

  /**
   * Is the chip disabled ?
   *
   * When chip is disabled, all events could not be triggered, and nothing will happen when clicking somewhere.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * You must pass a string or number here.
   * This is what will be shown to user inside the chip component.
   */
  children: ReactText;
}

/** Defines Chip styles props */
type ChipStyleProps = {
  /** Chip color */
  color: Color;
};

/** Component display name. */
const COMPONENT_NAME = "Chip";

/**
 * Get icon color based on `color` brightness.
 *
 * @param {Color} color The chip color
 * @example
 * getIconColor(Colors.red)
 * @returns {Color} The icon Color.
 */
const getIconColor = (color: Color) => {
  if (color.estimateBrightness() === Brightness.dark) return Colors.white70;
  return Colors.black54;
};

/**
 * Get label color based on `color` brightness.
 *
 * @param {Color} color The chip color
 * @example
 * getLabelColor(Colors.red)
 * @returns {Color} The label Color.
 */
const getLabelColor = (color: Color) => {
  if (color.estimateBrightness() === Brightness.dark) return Colors.white;
  return Colors.black87;
};

const useStyles = createUseStyles({
  /**
   * Generates chip styles
   *
   * @param {ChipStyleProps} props The props
   * @example
   * chip({ color: Colors.red })
   * @returns {CSSProperties} The styles
   */
  chip: ({ color }: ChipStyleProps) => ({
    backgroundColor: color.toRGBA(),
  }),
  /**
   * Generates clickable chip styles
   *
   * @param {ChipStyleProps} props The props
   * @example
   * chip__clickable({ color: Colors.red })
   * @returns {CSSProperties} The styles
   */
  chip__clickable: ({ color }: ChipStyleProps) => ({
    "&:active": {
      backgroundColor: color.withLightness(color.lightness - 5).toRGBA(),
    },
  }),
  /**
   * Generates chip label styles
   *
   * @param {ChipStyleProps} props The props
   * @example
   * label({ color: Colors.red })
   * @returns {CSSProperties} The styles
   */
  label: ({ color }: ChipStyleProps) => ({
    color: getLabelColor(color).toRGBA(),
  }),
});

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, onPress, onDeletePress, disabled, color = Colors.grey[200], avatar, children, ...props }, ref) => {
    const styles = useStyles({ color });

    /**
     * If Chip is disabled, we should return undefined.
     * If `onPress` is undefined or null, force it to `undefined`.
     * Else we simply return `onPress`.
     */
    const handlePress = disabled ? undefined : onPress ?? undefined;

    /**
     * If Chip is disabled, we should return undefined.
     * Else we stop firing `handlePress` on parent and we call `onDeletePress`.
     *
     * @param {MouseEvent} e The mouse event
     * @example
     * onDelete()
     */
    const onDelete =
      disabled || !onDeletePress
        ? undefined
        : (e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            onDeletePress && onDeletePress();
          };

    const canPress = Boolean(handlePress);
    const canDelete = Boolean(onDelete);

    const textColor = useMemo(() => getLabelColor(color), [color]);
    const iconColor = useMemo(() => getIconColor(color), [color]);

    return (
      <button
        ref={ref}
        onClick={handlePress}
        tabIndex={handlePress ? 0 : -1}
        disabled={disabled}
        data-testid="chip"
        className={classNames(
          classes.chip,
          styles.chip,
          {
            [classes.chip__clickable]: canPress,
            [styles.chip__clickable]: canPress,
            [classes.chip__deletable]: canDelete,
            [classes.chip__with_avatar]: !!avatar,
            [classes.chip__disabled]: disabled,
          },
          className,
        )}
        {...props}
      >
        {avatar && <div className={classes.avatar}>{avatar}</div>}

        <Text style={new TextStyle({ color: textColor, fontSize: 13 })} className={classes.label}>
          {children}
        </Text>

        {canDelete && (
          <IconButton
            onPress={onDelete}
            icon={<Icon icon={Icons.cancel} color={iconColor} />}
            className={classes.icon}
            data-testid="delete-icon"
          />
        )}
      </button>
    );
  },
);

Chip.displayName = COMPONENT_NAME;

export default Chip;
