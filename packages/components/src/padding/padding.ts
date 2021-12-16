import { CSSProperties } from "react";

import EdgeInsets from "../edge-insets";
import { Maybe } from "../types";

/**
 * Check if a value is null
 *
 * @param {any} value
 *        The value to check
 * @example
 * isNull(3) // false
 * isNull(null) // true
 * @returns {boolean} Is the value null
 */
const isNull = <T>(value: Maybe<T>) => value === null;

class Padding extends EdgeInsets {
  /**
   * Generates CSS string based on data.
   *
   * @example
   * Padding.all(32).toCSSString() // `padding-left: 32px; padding-right: 32px; padding-top: 32px; padding-bottom: 32px;`
   * @returns {string} The CSS string
   */
  toCSSString() {
    if (isNull(this.top) && isNull(this.right) && isNull(this.bottom) && isNull(this.left)) return null;

    const result = [];

    // test left
    if (!isNull(this.left)) result.push(`padding-left: ${this.left}px;`);
    // test right
    if (!isNull(this.right)) result.push(`padding-right: ${this.right}px;`);
    // test top
    if (!isNull(this.top)) result.push(`padding-top: ${this.top}px;`);
    // test bottom
    if (!isNull(this.bottom)) result.push(`padding-bottom: ${this.bottom}px;`);

    return result.join("\n");
  }

  /**
   * Generates React Style CSS.
   *
   * @example
   * Padding.all(32).toStyle() // {paddingLeft: 32, paddingRight: 32, paddingTop: 32, paddingBottom: 32}
   * @returns {CSSProperties} The style
   */
  toStyle(): CSSProperties {
    return {
      paddingTop: this.top ?? undefined,
      paddingRight: this.right ?? undefined,
      paddingBottom: this.bottom ?? undefined,
      paddingLeft: this.left ?? undefined,
    };
  }

  /**
   * Returns a new Padding with values overridden.
   *
   * @param {{ top, right }} props The props
   * @example
   * Padding.all(32).copyWith({ top: 12 }) // { top: 12, right: 32, bottom: 32, left: 32 }
   * @returns {Padding} The new Padding
   */
  copyWith({
    top = null,
    right = null,
    bottom = null,
    left = null,
  }: {
    /** Override top */
    top?: Maybe<number>;
    /** Override right */
    right?: Maybe<number>;
    /** Override bottom */
    bottom?: Maybe<number>;
    /** Override left */
    left?: Maybe<number>;
  }) {
    return new Padding(top ?? this.top, right ?? this.right, bottom ?? this.bottom, left ?? this.left);
  }

  /**
   * Returns the string representation of Padding
   *
   * @example
   * Padding.all(32).toString() // Padding(top: 32, right: 32, bottom: 32, left: 32)
   * @returns {string} String representation
   */
  public toString() {
    return `Padding(top: ${this.top}, right: ${this.right}, bottom: ${this.bottom}, left: ${this.left})`;
  }
}

export default Padding;
