import classNames from "classnames";
import { FC } from "react";
import { createUseStyles } from "react-jss";

import Color from "../color";
import Colors from "../colors";
import LoaderScreen from "./components/loader-screen";

/** Defines Loader props */
export interface LoaderProps {
  /**
   * Loader main color.
   *
   * @default Colors.blue
   */
  color?: Color;
  /**
   * Loader size.
   * Increasing this value makes the loader bigger.
   *
   * @default 16
   */
  size?: number;
  /**
   * Loader thickness.
   * Increasing this value makes the loader thicker.
   *
   * @default 2
   */
  thickness?: number;
  /** Override className */
  className?: string;
}

/** Defines Loader styles props. */
interface LoaderStylesProps {
  /** Loader color. */
  color: Color;
  /** Loader size. */
  size: number;
  /** Loader thickness. */
  thickness: number;
}

const useStyles = createUseStyles({
  "@keyframes rotate": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  /**
   * Creates wrapper styles based on props.
   *
   * @param   {LoaderStylesProps} props The props.
   * @example
   * wrapper({ size: 16 })
   * @returns {CSSProperties}           CSS rules
   */
  wrapper: ({ size }: LoaderStylesProps) => ({
    display: "inline-block",
    position: "relative",
    width: size,
    height: size,
  }),
  /**
   * Creates single item styles based on props.
   *
   * @param   {LoaderStylesProps} props The props.
   * @example
   * item({ color: Colors.blue, thickness: 2 })
   * @returns {CSSProperties}           CSS rules
   */
  item: ({ color, thickness }: LoaderStylesProps) => ({
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    boxSizing: "border-box",
    borderWidth: thickness,
    borderStyle: "solid",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    borderTopColor: color.toRGBA(),
  }),
  item1: {
    animation: "1.2s cubic-bezier(0.5, 0, 0.5, 1) -0.45s infinite normal none running $rotate",
  },
  item2: {
    animation: "1.2s cubic-bezier(0.5, 0, 0.5, 1) -0.3s infinite normal none running $rotate",
  },
  item3: {
    animation: "1.2s cubic-bezier(0.5, 0, 0.5, 1) -0.15s infinite normal none running $rotate",
  },
  item4: {
    animation: "1.2s cubic-bezier(0.5, 0, 0.5, 1) 0s infinite normal none running $rotate",
  },
});

/** Defines loader component */
type LoaderComponent = FC<LoaderProps> & {
  /** Used to simplify : <Loader.Screen/> */
  Screen: typeof LoaderScreen;
};

/**
 * A spinner for displaying loading state of a page or a section.
 *
 * @param   {LoaderProps} props The props
 * @example
 * <Loader />
 * @returns {JSX.Element}       The JSX element
 */
export const Loader: LoaderComponent = ({ color = Colors.blue[500], size = 16, thickness = 2, className }) => {
  const styles = useStyles({ color, size, thickness });

  return (
    <div data-testid="loader" className={classNames(styles.wrapper, className)}>
      <span className={classNames(styles.item, styles.item1)} />
      <span className={classNames(styles.item, styles.item2)} />
      <span className={classNames(styles.item, styles.item3)} />
      <span className={classNames(styles.item, styles.item4)} />
    </div>
  );
};

Loader.Screen = LoaderScreen;

export default Loader;
