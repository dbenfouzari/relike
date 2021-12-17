import { Maybe } from "../types";

/** Seems like a hack to make `new this` work since it's used by `Margin` and `Padding`. */
export type NewEdgeInsets<T> = new (
  top: Maybe<number>,
  right: Maybe<number>,
  bottom: Maybe<number>,
  left: Maybe<number>,
) => T;

/** Defines types for `EdgeInsets.symmetric` */
export type EdgeInsetsSymmetricParams = {
  /** The horizontal value (i.e. left and right sides) */
  horizontal?: Maybe<number>;
  /** The vertical value (i.e. top and bottom sides) */
  vertical?: Maybe<number>;
};

/** Defines types for `EdgeInsets.only` */
export type EdgeInsetsOnlyParams = {
  /** Top value */
  top?: Maybe<number>;
  /** Right value */
  right?: Maybe<number>;
  /** Bottom value */
  bottom?: Maybe<number>;
  /** Left value */
  left?: Maybe<number>;
};

abstract class EdgeInsets {
  top: Maybe<number>;
  right: Maybe<number>;
  bottom: Maybe<number>;
  left: Maybe<number>;

  /**
   * Builds a new `EdgeInsets`.
   *
   * @param {number | null} top    Top value.
   * @param {number | null} right  Right value.
   * @param {number | null} bottom Bottom value.
   * @param {number | null} left   Left value.
   * @example
   * new EdgeInsets(8, 8, 8, 8);
   */
  constructor(top: Maybe<number>, right: Maybe<number>, bottom: Maybe<number>, left: Maybe<number>) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }

  /**
   * Creates insets where all the offsets are value.
   *
   * @param   {NewEdgeInsets} this  Itself
   * @param   {number}        value The value applied to all edges.
   * @example
   * EdgeInsets.all(32)
   * @returns {EdgeInsets}          A new EdgeInsets.
   */
  public static all<T extends EdgeInsets>(this: NewEdgeInsets<T>, value: number): T {
    return new this(value, value, value, value);
  }

  /**
   * Creates insets with symmetrical vertical and horizontal offsets.
   *
   * @param   {NewEdgeInsets}             this   Itself
   * @param   {EdgeInsetsSymmetricParams} params The params
   * @example
   * EdgeInsets.symmetric({ horizontal: 12, vertical: 6 })
   * @returns {EdgeInsets}                       A new EdgeInsets.
   */
  static symmetric<T extends EdgeInsets>(this: NewEdgeInsets<T>, params: EdgeInsetsSymmetricParams) {
    const { horizontal = null, vertical = null } = params;
    return new this(vertical, horizontal, vertical, horizontal);
  }

  /**
   * Creates insets with only the given values non-zero.
   *
   * @param   {NewEdgeInsets}        this   Itself
   * @param   {EdgeInsetsOnlyParams} params The params
   * @example
   * EdgeInsets.only({ top: 4, left: 2 })
   * @returns {EdgeInsets}                  A new EdgeInsets.
   */
  static only<T extends EdgeInsets>(this: NewEdgeInsets<T>, params: EdgeInsetsOnlyParams = {}) {
    const { top = null, right = null, bottom = null, left = null } = params;
    return new this(top, right, bottom, left);
  }

  /**
   * Creates insets from offsets from the left, top, right, and bottom.
   *
   * @param   {NewEdgeInsets} this   Itself
   * @param   {number}        left   Left value
   * @param   {number}        top    Top value
   * @param   {number}        right  Right value
   * @param   {number}        bottom Bottom value
   * @example
   * EdgeInsets.fromLTRB(32, 16, 32, 16) // Same as EdgeInsets.symmetric({ horizontal: 32, vertical: 16 })
   * @returns {EdgeInsets}           A new EdgeInsets.
   */
  static fromLTRB<T extends EdgeInsets>(
    this: NewEdgeInsets<T>,
    left: Maybe<number>,
    top: Maybe<number>,
    right: Maybe<number>,
    bottom: Maybe<number>,
  ) {
    return new this(top, right, bottom, left);
  }

  /**
   * An EdgeInsets with zero offsets in each direction.
   *
   * @param   {NewEdgeInsets} this Itself
   * @example
   * EdgeInsets.zero()
   * @returns {EdgeInsets}         A new EdgeInsets.
   */
  static zero<T extends EdgeInsets>(this: NewEdgeInsets<T>) {
    return new this(0, 0, 0, 0);
  }
}

export default EdgeInsets;
