import classNames from "classnames";
import { FC } from "react";
import { createUseStyles } from "react-jss";

import Color from "../color";
import Colors from "../colors";

/** Defines LinearProgressIndicator props */
export interface LinearProgressIndicatorProps {
  /**
   * Current value.
   * Should be between 0 and 100.
   */
  value: number;
  /**
   * Color of the outer line.
   *
   * @default Colors.blue[300]
   */
  backgroundColor?: Color;
  /**
   * Color of the inner line, that one that moves.
   *
   * @default Colors.blue[600]
   */
  color?: Color;
  /**
   * Lines height. It defines how big is the linear progress indicator.
   *
   * @default 4
   */
  height?: number;
}

const defaultBackgroundColor = Colors.blue[200];
const defaultColor = Colors.blue[500];
const defaultHeight = 4;

/** Defines LinearProgressIndicator styles props */
type LinearProgressIndicatorStylesProps = Omit<LinearProgressIndicatorProps, "value" | "color">;

const useBasicStyles = createUseStyles({
  /**
   * Creates wrapper styles based on props
   *
   * @param {LinearProgressIndicatorStylesProps} props The props
   * @example
   * wrapper({ height: 8, backgroundColor: Colors.blue })
   * @returns {CSSProperties} The styles
   */
  wrapper: ({ backgroundColor, height }: LinearProgressIndicatorStylesProps) => ({
    width: "100%",
    height: height ?? defaultHeight,
    backgroundColor: backgroundColor?.toRGBA() ?? defaultBackgroundColor.toRGBA(),
  }),
  /**
   * Creates inner styles based on props
   *
   * @param {LinearProgressIndicatorStylesProps} props The props
   * @example
   * inner({ height: 8, backgroundColor: Colors.blue })
   * @returns {CSSProperties} The styles
   */
  inner: ({ backgroundColor, height }: LinearProgressIndicatorStylesProps) => ({
    backgroundColor: backgroundColor?.toRGBA() ?? defaultColor.toRGBA(),
    height: height ?? defaultHeight,
  }),
});

/** Defines Value styles props */
type ValueStylesProps = Pick<LinearProgressIndicatorProps, "value">;

const useValueStyles = createUseStyles({
  /**
   * Creates inner styles based on props
   *
   * @param {ValueStylesProps} props The props
   * @example
   * inner({ value: 90 })
   * @returns {CSSProperties} The styles
   */
  inner: (props: ValueStylesProps) => ({
    width: `${props.value}%`,
  }),
});

/**
 * A widget that shows progress along a line.
 *
 * @param {LinearProgressIndicatorProps} props The props
 * @example
 * <LinearProgressIndicator value={40} />
 * @returns {JSX.Element} The JSX element
 */
export const LinearProgressIndicator: FC<LinearProgressIndicatorProps> = ({ value, ...rest }) => {
  if (value > 100) throw new RangeError("[LinearProgressIndicator] - The value should not exceed 100");

  const basicStyles = useBasicStyles(rest);
  const valueStyles = useValueStyles({ value });

  return (
    <div data-testid="linear-progress" className={basicStyles.wrapper}>
      <div className={classNames(basicStyles.inner, valueStyles.inner)} />
    </div>
  );
};

export default LinearProgressIndicator;
