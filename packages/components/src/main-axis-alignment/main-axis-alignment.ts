/**
 * How the children should be placed along the main axis in a flex layout.
 */
enum MainAxisAlignment {
  /**
   * Place the children as close to the middle of the main axis as possible.
   */
  center = "center",

  /**
   * Place the children as close to the end of the main axis as possible.
   *
   * If this value is used in a horizontal direction, a TextDirection must be available to determine
   * if the end is the left or the right.
   *
   * If this value is used in a vertical direction, a VerticalDirection must be available to determine
   * if the end is the top or the bottom.
   */
  end = "end",

  /**
   * Place the free space evenly between the children as well as half of that space before and after the first and
   * last child.
   */
  spaceAround = "spaceAround",

  /**
   * Place the free space evenly between the children.
   */
  spaceBetween = "spaceBetween",

  /**
   * Place the free space evenly between the children as well as before and after the first and last child.
   */
  spaceEvenly = "spaceEvenly",

  /**
   * Place the children as close to the start of the main axis as possible.
   *
   * If this value is used in a horizontal direction, a TextDirection must be available to determine
   * if the start is the left or the right.
   *
   * If this value is used in a vertical direction, a VerticalDirection must be available to determine
   * if the start is the top or the bottom.
   */
  start = "start",
}

export default MainAxisAlignment;
