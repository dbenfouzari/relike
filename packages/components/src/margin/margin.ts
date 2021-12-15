import { CSSProperties } from "react";

import EdgeInsets from "../edge-insets";
import { Maybe } from "../types";

const isNull = <T>(value: Maybe<T>) => value === null;

class Margin extends EdgeInsets {
  /**
   * Generates CSS string based on data.
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
   */
  toStyle(): CSSProperties {
    return {
      marginTop: this.top ?? undefined,
      marginRight: this.right ?? undefined,
      marginBottom: this.bottom ?? undefined,
      marginLeft: this.left ?? undefined,
    };
  }

  copyWith({
    top = null,
    right = null,
    bottom = null,
    left = null,
  }: {
    top?: Maybe<number>;
    right?: Maybe<number>;
    bottom?: Maybe<number>;
    left?: Maybe<number>;
  }) {
    return new Margin(top ?? this.top, right ?? this.right, bottom ?? this.bottom, left ?? this.left);
  }

  public toString() {
    return `Margin(top: ${this.top}, right: ${this.right}, bottom: ${this.bottom}, left: ${this.left})`;
  }
}

export default Margin;
