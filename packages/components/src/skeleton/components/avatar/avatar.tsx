import classnames from "classnames";
import { CSSProperties, FC } from "react";
import { createUseStyles } from "react-jss";

import Color from "../../../color";
import Colors from "../../../colors";
import useSkeletonContext from "../../hooks/useSkeletonContext";
import classes from "./avatar.module.scss";

/** Defines available avatar sizes. */
type AvatarSize = "small" | "default" | "large";
/** Defines a record of avatar sizes with current size */
type AvatarSizes = Record<AvatarSize, number>;
/** Defines the avatar shape. */
type AvatarShape = "square" | "circle";

/** Defines SkeletonAvatar props */
export interface SkeletonAvatarProps {
  /**
   * Defines the **[Skeleton.Avatar]** shape.
   *
   * @default circle
   */
  shape?: "square" | "circle";
  /**
   * Defines the **[Skeleton.Avatar]** size.
   *
   * - **small**: default is 24px
   * - **default**: default is 32px
   * - **large**: default is 40px
   *
   * You can override these values with `sizes` prop.
   *
   * You can also pass a `number` so it fixes its size to this value.
   *
   * @default default
   */
  size?: number | AvatarSize;
  /**
   * You can override default sizes values.
   *
   * The shape is :
   * ```
   * type Sizes = {
   * small: number;
   * default: number;
   * large: number;
   * }
   * ```
   */
  sizes?: AvatarSizes;
}

/** Defines props for SkeletonAvatar styles */
interface AvatarStylesProps {
  /** Should it be animated ? */
  active: boolean;
  /** The avatar shape */
  shape: AvatarShape;
  /** The avatar size */
  size: number | AvatarSize;
  /** The main avatar color */
  color: Color;
  /** The configured sizes */
  sizes: AvatarSizes;
}

const DEFAULT_SIZES: AvatarSizes = {
  small: 24,
  default: 32,
  large: 40,
};

const useStyles = createUseStyles({
  /**
   * Generates styles based on props
   *
   * @param   {AvatarStylesProps} props
   *                                    The props
   * @example
   * wrapper({ color: Colors.blue, sizes: { small: 24, default: 32, large: 40 }, size: 'small' })
   * @returns {CSSProperties}           The styles
   */
  wrapper: ({ color, sizes, size }: AvatarStylesProps): CSSProperties => {
    const finalSize = typeof size === "number" ? size : sizes[size];

    return {
      backgroundColor: color.toRGBA(),
      width: finalSize,
      height: finalSize,
      lineHeight: finalSize,
    };
  },
});

/**
 * You can display a **[Skeleton.Avatar]** to mimic an avatar while content is loading.
 *
 * @param   {SkeletonAvatarProps} props The props
 * @example
 * <SkeletonAvatar />
 * @returns {JSX.Element}               The JSX element
 */
export const SkeletonAvatar: FC<SkeletonAvatarProps> = ({
  size = "default",
  shape = "circle",
  sizes = DEFAULT_SIZES,
}) => {
  const { active = false, color = Colors.grey[200] } = useSkeletonContext();
  const styles = useStyles({ size, shape, active, color, sizes });

  return (
    <div
      data-testid="skeleton-avatar"
      className={classnames(classes.wrapper, styles.wrapper, {
        [classes.wrapper__circle]: shape === "circle",
        [classes.wrapper__active]: active,
      })}
    />
  );
};

export default SkeletonAvatar;
