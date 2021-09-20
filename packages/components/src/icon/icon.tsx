import { Color, Colors } from "@hastics/utils";
import classNames from "classnames";
import { FC } from "react";

import { IconData } from "../icons";
import classes from "./icon.module.scss";

const mapIcon = (variant?: "rounded" | "outlined" | "sharp" | "screen") => {
  if (variant === "rounded") return "material-icons-round";
  if (variant === "outlined") return "material-icons-outlined";
  if (variant === "sharp") return "material-icons-sharp";
  return "material-icons";
};

export interface IconProps {
  disabled?: boolean;
  className?: string;
  /**
   * Although the icons in the font can be scaled to any size,
   * in accordance with material design icons guidelines,
   * we recommend them to be shown in either 18, 24, 36 or 48px.
   * @default 24
   */
  size?: number;
  /**
   * The color to use when drawing the icon.
   */
  color?: Color;
  icon: IconData;
  semanticLabel?: string;
}

/**
 * A graphical **Icon** widget drawn with a glyph.
 *
 * Icons are not interactive. For an interactive icon, consider **IconButton**.
 *
 * It uses Material-Icons font. Don't forget to include Material CSS in your app !
 * @example
 * <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
 *
 * @see IconButton
 * @see Icons
 */
export const Icon: FC<IconProps> = ({ className, icon, semanticLabel, color = Colors.black, disabled, size = 24 }) => {
  return (
    <>
      <span
        className={classNames(
          classes.icon,
          mapIcon(icon.variant),
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
