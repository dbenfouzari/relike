import { CSSProperties, FC, ReactNode } from "react";
import { createUseStyles } from "react-jss";

import Alignment from "../alignment";

/** Defines Align props */
export interface AlignProps {
  /**
   * The `alignment` prop is mandatory. It sets the children alignment.
   *
   * @example
   * <Align alignment={Alignment.center} />
   */
  alignment: Alignment;

  /**
   * The children you want to align.
   */
  children: ReactNode;
}

/** Defines Align styles props */
interface AlignStylesProps {
  /** The alignment */
  alignment: Alignment;
}

/**
 * Helper to get CSS property `justify-content`
 *
 * @param {Alignment} alignment The alignment.
 * @example
 * getJustifyContent(Alignment.topLeft)
 * @returns {CSSProperties.justifyContent} The CSS property value.
 */
const getJustifyContent = (alignment: Alignment): CSSProperties["justifyContent"] | null => {
  switch (alignment) {
    case Alignment.topLeft:
    case Alignment.bottomLeft:
    case Alignment.centerLeft:
      return "flex-start";

    case Alignment.center:
    case Alignment.bottomCenter:
    case Alignment.topCenter:
      return "center";

    case Alignment.bottomRight:
    case Alignment.centerRight:
    case Alignment.topRight:
      return "flex-end";

    default:
      return null;
  }
};

/**
 * Helper to get CSS property `align-items`
 *
 * @param {Alignment} alignment The alignment
 * @example
 * getAlignItems(CrossAxisAlignment.center)
 * @returns {CSSProperties.alignItems} The CSS property value.
 */
const getAlignItems = (alignment: Alignment): CSSProperties["alignItems"] | null => {
  switch (alignment) {
    case Alignment.topLeft:
    case Alignment.topCenter:
    case Alignment.topRight:
      return "flex-start";

    case Alignment.centerLeft:
    case Alignment.center:
    case Alignment.centerRight:
      return "center";

    case Alignment.bottomLeft:
    case Alignment.bottomCenter:
    case Alignment.bottomRight:
      return "flex-end";

    default:
      return null;
  }
};

const useStyles = createUseStyles({
  /**
   * Builds styles for Alignment wrapper
   *
   * @param {AlignStylesProps} props The props
   * @example
   * wrapper({ alignment: Alignment.topLeft })
   * @returns {CSSProperties} The styles
   */
  wrapper: ({ alignment }: AlignStylesProps) => ({
    display: "flex",
    flex: 1,
    justifyContent: getJustifyContent(alignment) ?? null,
    alignItems: getAlignItems(alignment) ?? null,
  }),
});

/**
 * Use this component to align items in a container.
 *
 * @param {AlignProps} props The props
 * @example
 * <Align alignment={Alignment.topLeft}>
 *   <div>
 * </Align>
 * @returns {JSX.Element} The Align component
 */
export const Align: FC<AlignProps> = ({ alignment, children }) => {
  const styles = useStyles({ alignment });

  return (
    <div data-testid="align" className={styles.wrapper}>
      {children}
    </div>
  );
};

export default Align;
