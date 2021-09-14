import { Colors } from "@hastics/utils";
import classNames from "classnames";
import { forwardRef, ReactNode } from "react";

import Alignment from "../alignment";
import Container from "../container";
import classes from "./avatar.module.scss";

export type BaseAvatarProps = {
  /** This prop is used to override the style */
  className?: string;
};

const SIZES = {
  s: 24,
  m: 40,
  l: 56,
};

type AvatarSize = keyof typeof SIZES;

export type AvatarWithChildren = BaseAvatarProps & {
  /**
   * a11y attribute.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img#attr-alt
   *
   * @default "Avatar"
   */
  alt?: undefined;
  children: ReactNode;
  size?: AvatarSize;
  sizes?: undefined;
  src?: undefined;
  srcSet?: undefined;
};

export type AvatarWithSrc = BaseAvatarProps & {
  /**
   * a11y attribute.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img#attr-alt
   *
   * @default "Avatar"
   */
  alt?: string;
  children?: undefined;
  size?: AvatarSize;
  sizes?: string;
  src: string;
  srcSet?: string;
};

export type AvatarProps = AvatarWithChildren | AvatarWithSrc;

/**
 * Component display name.
 */
const COMPONENT_NAME = "Avatar";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, children, size = "m", alt = "Avatar", src, srcSet, sizes, ...props }, ref) => (
    <Container
      width={SIZES[size]}
      height={SIZES[size]}
      color={Colors.black26}
      alignment={Alignment.center}
      ref={ref}
      className={classNames(classes.avatar, className)}
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
