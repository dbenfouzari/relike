import classnames from "classnames";
import { CSSProperties } from "react";
import { createUseStyles } from "react-jss";

import Color from "../../../color";
import Colors from "../../../colors";
import { Tuple } from "../../../types";
import useSkeletonContext from "../../hooks/useSkeletonContext";
import classes from "./paragraph.module.scss";

/** Defines SkeletonParagraph props */
export interface SkeletonParagraphProps<R extends number> {
  /**
   * How many rows you want to draw.
   *
   * @default 1
   */
  rows?: R;
  /**
   * Set the width of paragraph. When width is an Array, it can set the width of each row.
   */
  width?: number | Tuple<number | undefined | string, R>;
}

/** Defines SkeletonParagraph styles props */
interface SkeletonParagraphStylesProps {
  /** Main color */
  color: Color;
}

const useStyles = createUseStyles({
  /**
   * Generates styles based on props
   *
   * @param {SkeletonParagraphStylesProps} props The props
   * @example
   * line({ color: Colors.blue })
   * @returns {CSSProperties} The styles
   */
  line: ({ color }: SkeletonParagraphStylesProps): CSSProperties => ({
    backgroundColor: color.toRGBA(),
  }),
});

/**
 * A helper to get paragraph width.
 *
 * @param {number} rows
 *        Rows amount
 * @param {number} rowIndex
 *        Current row index
 * @param {number | number[]} width
 *        The row width
 * @returns {any}
 *          - `undefined` if no width given
 *          - `width` if is a number and this is the last row
 *          - `width[rowIndex]` else
 * @example
 * getWidth(5, 3, 200)
 */
const getWidth = <R extends number>(
  rows: number,
  rowIndex: number,
  width?: number | Tuple<number | undefined | string, R>,
) => {
  if (!width) return undefined; // Easy. If no width given, just do nothing.
  if (Array.isArray(width)) return width[rowIndex]; // If width is an array, get the width by index.
  if (rows - 1 === rowIndex) return width; // Here width is a number
  return undefined;
};

/**
 * You can display a **[Skeleton.Paragraph]** to mimic a paragraph while content is loading.
 *
 * @param {SkeletonParagraphProps} props The SkeletonParagraph props
 * @example
 * <SkeletonParagraph rows={5} width={100} />
 * @returns {JSX.Element} The JSX element
 */
export const SkeletonParagraph = <R extends number>({ rows, width }: SkeletonParagraphProps<R>) => {
  const { active = false, color = Colors.grey[200] } = useSkeletonContext();

  const rowsNumber = rows ?? 1;
  const styles = useStyles({ color });

  return (
    <ul
      className={classnames(classes.paragraph, {
        [classes.paragraph__active]: active,
      })}
    >
      {Array.from({ length: rowsNumber }).map((_, i) => (
        <li
          key={i}
          className={classnames(classes.line, styles.line)}
          style={{ width: getWidth(rowsNumber, i, width) }}
        />
      ))}
    </ul>
  );
};

export default SkeletonParagraph;
