import classNames from "classnames";
import { forwardRef, ReactNode } from "react";

import Alignment from "../alignment";
import Color from "../color";
import Colors from "../colors";
import Container from "../container";
import classes from "./avatar.module.scss";

/** Defines base Avatar props. Meant to be overridden. */
export type BaseAvatarProps = {
  /** This prop is used to override the style */
  className?: string;

  /**
   * @default Colors.black26
   */
  color?: Color;
};

const SIZES = {
  s: 24,
  m: 40,
  l: 56,
};

/**
 * Defines available avatar sizes.
 *
 * @todo Size should be generic. Think to a refactor.
 */
type AvatarSize = keyof typeof SIZES;

/** Defines Avatar props when it has some children (e.g. an Icon or a Text) */
export type AvatarWithChildren = BaseAvatarProps & {
  /**
   * a11y attribute.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img#attr-alt
   * @default "Avatar"
   */
  alt?: undefined;
  /** The children */
  children: ReactNode;
  /**
   * The avatar size.
   *
   * @default "m"
   */
  size?: AvatarSize;
  /**
   * Used only when no children given.
   * `sizes` is passed to `img` component. It's a React prop.
   */
  sizes?: undefined;
  /**
   * Used only when no children given.
   * `src` is passed to `img` component. It's a React prop.
   */
  src?: undefined;
  /**
   * Used only when no children given.
   * `srcSet` is passed to `img` component. It's a React prop.
   */
  srcSet?: undefined;
};

/** Defines Avatar props when it DOES NOT have children but src */
export type AvatarWithSrc = BaseAvatarProps & {
  /**
   * a11y attribute.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img#attr-alt
   * @default "Avatar"
   */
  alt?: string;
  /** The children */
  children?: undefined;
  /**
   * The avatar size.
   *
   * @default "m"
   */
  size?: AvatarSize;
  /**
   * Used only when no children given.
   * `sizes` is passed to `img` component. It's a React prop.
   */
  sizes?: string;
  /**
   * Used only when no children given.
   * `src` is passed to `img` component. It's a React prop.
   */
  src: string;
  /**
   * Used only when no children given.
   * `srcSet` is passed to `img` component. It's a React prop.
   */
  srcSet?: string;
};

/** Defines Avatar props */
export type AvatarProps = AvatarWithChildren | AvatarWithSrc;

/** Component display name. */
const COMPONENT_NAME = "Avatar";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, color = Colors.black26, children, size = "m", alt = "Avatar", src, srcSet, sizes, ...props }, ref) => (
    <Container
      width={SIZES[size]}
      height={SIZES[size]}
      color={color}
      alignment={Alignment.center}
      ref={ref}
      className={classNames(classes.avatar, className)}
      data-testid="avatar"
      {...props}
    >
      {src ? (
        <img
          alt={alt}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          width={SIZES[size]}
          height={SIZES[size]}
          className={classes.image}
        />
      ) : null}
      {children}
    </Container>
  ),
);
Avatar.displayName = COMPONENT_NAME;

export default Avatar;
