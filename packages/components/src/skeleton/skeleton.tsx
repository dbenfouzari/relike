import classnames from "classnames";
import { FC, ReactChild, ReactChildren } from "react";

import Color from "../color";
import SkeletonAvatar from "./components/avatar";
import SkeletonParagraph from "./components/paragraph";
import { SkeletonParagraphProps } from "./components/paragraph/paragraph";
import SkeletonTitle from "./components/title";
import SkeletonContext from "./context/skeleton-context";
import classes from "./skeleton.module.scss";

/** Defines Skeleton props */
export interface SkeletonProps {
  /**
   * If `true`, an infinite animation runs on every child.
   *
   * You should use it if you are loading something.
   *
   * @default false
   */
  active?: boolean;
  /**
   * Override **[Skeleton]** default color.
   *
   * @default Colors.grey[200]
   */
  color?: Color;
  /**
   * Show avatar placeholder ?
   *
   * @default false
   */
  avatar?: boolean;
  /**
   * Show paragraph placeholder ?
   *
   * You can also pass custom paragraph props to customize it.
   *
   * @default true
   */
  paragraph?: boolean | SkeletonParagraphProps<number>;
  /**
   * You can completely render what you want.
   *
   * If you set some children, the basic skeleton will be replaced with your content.
   */
  children?: ReactChild | ReactChildren;
}

/** Defines Skeleton component */
type SkeletonComponent = FC<SkeletonProps> & {
  /**
   * Includes SkeletonAvatar.
   *
   * @example
   * <Skeleton.Avatar />
   */
  Avatar: typeof SkeletonAvatar;
  /**
   * Includes SkeletonParagraph.
   *
   * @example
   * <Skeleton.Paragraph />
   */
  Paragraph: typeof SkeletonParagraph;
  /**
   * Includes SkeletonTitle.
   *
   * @example
   * <Skeleton.Title />
   */
  Title: typeof SkeletonTitle;
};

/**
 * You can display a **[Skeleton]** to mimic a content while it's loading.
 *
 * @param   {SkeletonProps} props The Skeleton props.
 * @example
 * <Skeleton>
 *   <Skeleton.Avatar />
 *   <Skeleton.Title />
 *   <Skeleton.Paragraph rows={1} />
 * </Skeleton>
 * @returns {JSX.Element}         The JSX element.
 */
export const Skeleton: SkeletonComponent = ({ active, avatar, children, color, paragraph = true }) => (
  <SkeletonContext.Provider value={{ active, color }}>
    <div aria-busy data-testid="skeleton" className={classnames({ [classes.skeleton__active]: active })}>
      {children || (
        <div className={classes.skeleton}>
          {avatar && (
            <div className={classes.header}>
              <SkeletonAvatar />
            </div>
          )}

          <div className={classes.content}>
            <SkeletonTitle />
            {paragraph && <SkeletonParagraph rows={2} width={[undefined, "60%"]} {...paragraph} />}
          </div>
        </div>
      )}
    </div>
  </SkeletonContext.Provider>
);

Skeleton.Avatar = SkeletonAvatar;
Skeleton.Paragraph = SkeletonParagraph;
Skeleton.Title = SkeletonTitle;

export default Skeleton;
