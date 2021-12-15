/**
 * A direction in which boxes flow vertically.
 *
 * This is used by the flex algorithm (e.g. Column) to decide in which direction to draw boxes.
 *
 * This is also used to disambiguate start and end values (e.g. MainAxisAlignment.start or CrossAxisAlignment.end).
 */
enum VerticalDirection {
  /**
   * Boxes should start at the top and be stacked vertically towards the bottom.
   *
   * The "start" is at the top, the "end" is at the bottom.
   */
  down = "down",
  /**
   * Boxes should start at the bottom and be stacked vertically towards the top.
   *
   * The "start" is at the bottom, the "end" is at the top.
   */
  up = "up",
}

export default VerticalDirection;
