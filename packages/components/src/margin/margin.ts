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

class Margin extends EdgeInsets {
  /**
   * Generates CSS string based on data.
   *
   * @example
   * Margin.all(32).toCSSString() // `margin-left: 32px; margin-right: 32px; margin-top: 32px; margin-bottom: 32px;`
   * @returns {string} The CSS string
   */
  toCSSString() {
    if (isNull(this.top) && isNull(this.right) && isNull(this.bottom) && isNull(this.left)) return null;

    const result = [];

    // test left
    if (!isNull(this.left)) result.push(`margin-left: ${this.left}px;`);
    // test right
    if (!isNull(this.right)) result.push(`margin-right: ${this.right}px;`);
    // test top
    if (!isNull(this.top)) result.push(`margin-top: ${this.top}px;`);
    // test bottom
    if (!isNull(this.bottom)) result.push(`margin-bottom: ${this.bottom}px;`);

    return result.join("\n");
  }

  /**
   * Generates React Style CSS.
   *
   * @example
   * Margin.all(32).toStyle() // {marginLeft: 32, marginRight: 32, marginTop: 32, marginBottom: 32}
   * @returns {CSSProperties} The style
   */
  toStyle(): CSSProperties {
    return {
      marginTop: this.top ?? undefined,
      marginRight: this.right ?? undefined,
      marginBottom: this.bottom ?? undefined,
      marginLeft: this.left ?? undefined,
    };
  }

  /**
   * Returns a new Padding with values overridden.
   *
   * @param {{ top, right }} props The props
   * @example
   * Margin.all(32).copyWith({ top: 12 }) // { top: 12, right: 32, bottom: 32, left: 32 }
   * @returns {Margin} The new margin
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
    return new Margin(top ?? this.top, right ?? this.right, bottom ?? this.bottom, left ?? this.left);
  }

  /**
   * Returns the string representation of Padding
   *
   * @example
   * Padding.all(32).toString() // Padding(top: 32, right: 32, bottom: 32, left: 32)
   * @returns {string} String representation
   */
  public toString() {
    return `Margin(top: ${this.top}, right: ${this.right}, bottom: ${this.bottom}, left: ${this.left})`;
  }
}

export default Margin;
