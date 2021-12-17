import classnames from "classnames";
import type { CSSProperties, FC } from "react";
import { createUseStyles } from "react-jss";

import Color from "../../../color";
import Colors from "../../../colors";
import useSkeletonContext from "../../hooks/useSkeletonContext";
import classes from "./title.module.scss";

/** Defines SkeletonTitle props */
interface SkeletonTitleStylesProps {
  /** The main color. */
  color: Color;
}

const useStyles = createUseStyles({
  /**
   * Generates styles based on props
   *
   * @param {SkeletonTitleStylesProps} props The styles props.
   * @example
   * title({ color: Colors.blue })
   * @returns {CSSProperties} The styles
   */
  title: ({ color }: SkeletonTitleStylesProps): CSSProperties => ({
    backgroundColor: color.toRGBA(),
  }),
});

/**
 * You can display a **[Skeleton.Title]** to mimic a title while content is loading.
 *
 * @example
 * <SkeletonTitle />
 * @returns {JSX.Element} The JSX element.
 */
export const SkeletonTitle: FC = () => {
  const { active = false, color = Colors.grey[200] } = useSkeletonContext();
  const styles = useStyles({ color });

  return (
    // Because it's just a placeholder, I remove the ESLint rule.
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h3 className={classnames(classes.title, styles.title, { [classes.title__active]: active })} />
  );
};

export default SkeletonTitle;
