import { Children, FC } from "react";

import Colors from "../colors";
import Icon from "../icon";
import IconButton from "../icon-button";
import Icons from "../icons";
import classes from "./carousel.module.scss";
import useCarousel from "./useCarousel";

/** Defines Carousel props */
export interface CarouselProps {
  /**
   * The elements you want to display in the carousel.
   */
  children: JSX.Element | JSX.Element[];
  /**
   * The gap (in px) you want to display between elements.
   *
   * @default 12
   */
  gap?: number;
}

/**
 * This is a simple carousel.
 * You can use it to show a really simple carousel that you can control with chevrons.
 *
 * @param   {CarouselProps} props The props
 * @example
 * <Carousel>
 *   <div key={1} style={styles.element}>
 *     Example 1
 *   </div>
 *   <div key={2} style={styles.element}>
 *     Example 2
 *   </div>
 *   <div key={3} style={styles.element}>
 *     Example 3
 *   </div>
 * </Carousel>
 * @returns {JSX.Element}         The JSX element
 */
export const Carousel: FC<CarouselProps> = ({ children, gap = 12 }) => {
  const { leftIndicator, rightIndicator, listRef, scrollLeft, scrollRight, itemRef } = useCarousel(children);

  /**
   * Handle scroll to left
   *
   * @example
   * <button onClick={onScrollLeft} />
   * @returns {void} Nothing
   */
  const onScrollLeft = () => scrollLeft(1);
  /**
   * Handle scroll to right
   *
   * @example
   * <button onClick={onScrollRight} />
   * @returns {void} Nothing
   */
  const onScrollRight = () => scrollRight(1);

  return (
    <div data-testid="carousel" className={classes.wrapper}>
      {leftIndicator && (
        <IconButton
          tabIndex={0}
          data-testid="left"
          className={classes.button}
          onPress={onScrollLeft}
          icon={<Icon icon={Icons.chevron_left} size={16} color={Colors.grey[500]} />}
        />
      )}

      <ul className={classes.inner} ref={listRef} style={{ gap }} role="tablist" tabIndex={0}>
        {Children.map(children, (child, index) => (
          <li
            role="tab"
            aria-label={`Slide ${index + 1} of ${Children.count(children)}`}
            key={index}
            className={classes.element}
            ref={itemRef(index)}
          >
            {child}
          </li>
        ))}
      </ul>

      {rightIndicator && (
        <IconButton
          tabIndex={0}
          data-testid="right"
          className={classes.button}
          onPress={onScrollRight}
          icon={<Icon icon={Icons.chevron_right} size={16} color={Colors.grey[500]} />}
        />
      )}
    </div>
  );
};

export default Carousel;
