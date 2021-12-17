import classNames from "classnames";
import { FC } from "react";

import Color from "../color";
import Colors from "../colors";
import { IconData, IconVariant } from "../icons";
import classes from "./icon.module.scss";

/**
 * Get the correct className for variant
 *
 * @param {IconVariant} [variant] The icon variant.
 * @example
 * getIconClassName("rounded") // "material-icons-round"
 * @returns {string} The className
 */
const getIconClassName = (variant?: IconVariant) => {
  if (variant === "rounded") return "material-icons-round";
  if (variant === "outlined") return "material-icons-outlined";
  if (variant === "sharp") return "material-icons-sharp";
  return "material-icons";
};

/** Defines Icon props */
export interface IconProps {
  /** Is the icon disabled */
  disabled?: boolean;
  /** Override className */
  className?: string;
  /**
   * Although the icons in the font can be scaled to any size,
   * in accordance with material design icons guidelines,
   * we recommend them to be shown in either 18, 24, 36 or 48px.
   *
   * @default 24
   */
  size?: number;
  /**
   * The color to use when drawing the icon.
   */
  color?: Color;
  /** The icon to display */
  icon: IconData;
  /** The a11y label */
  semanticLabel?: string;
}

/**
 * A graphical **Icon** widget drawn with a glyph.
 *
 * Icons are not interactive. For an interactive icon, consider **IconButton**.
 *
 * It uses Material-Icons font. Don't forget to include Material CSS in your app !
 *
 * @param {IconProps} props The props
 * @example
 * <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
 * @returns {JSX.Element} The JSX element.
 * @see IconButton
 * @see Icons
 */
export const Icon: FC<IconProps> = ({ className, icon, semanticLabel, color = Colors.black, disabled, size = 24 }) => {
  return (
    <>
      <span
        className={classNames(
          classes.icon,
          getIconClassName(icon.variant),
          {
            [classes.icon__disabled]: disabled,
          },
          className,
        )}
        aria-label={semanticLabel}
      >
        {icon.name}
      </span>

      <style jsx>{`
        --color: ${color.toRGBA()};
        --disabled-color: ${Colors.black26.toRGBA()};
        --size: ${size}px;
      `}</style>
    </>
  );
};

export default Icon;
