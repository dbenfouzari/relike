/**
 * The available text overflows.
 *
 * - `clip` - Clip the overflowing text to fix its container.
 * - `fade` - Fade the overflowing text to transparent.
 * - `ellipsis` - Use an ellipsis to indicate that the text has overflowed.
 * - `visible` - Render overflowing text outside its container.
 */
enum TextOverflow {
  /**
   * Clip the overflowing text to fix its container.
   */
  clip,
  /**
   * Fade the overflowing text to transparent.
   */
  fade,
  /**
   * Use an ellipsis to indicate that the text has overflowed.
   */
  ellipsis,
  /**
   * Render overflowing text outside its container.
   */
  visible,
}

export default TextOverflow;
