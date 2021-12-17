import Color from "../color";

/**
 * A color that has a small table of related colors called a "swatch".
 *
 * The table is indexed by values of type `T`.
 */
class ColorSwatch extends Color {
  protected _swatch: Record<number, Color>;

  /**
   * Creates a color that has a small table of related colors called a "swatch".
   *
   * The `primary` argument should be the 32 bit ARGB value of one of the
   * values in the swatch, as would be passed to the [new Color] constructor
   * for that same color, and as is exposed by [value]. (This is distinct from
   * the specific index of the color in the swatch.)
   *
   * @param {number}                primary The primary color number (0xffffffff)
   * @param {Record<number, Color>} swatch  The swatch
   * @example
   * new ColorSwatch(0xffffc107, { 50: new Color(0xffffc107) })
   */
  constructor(primary: number, swatch: Record<number, Color>) {
    super(primary);

    this._swatch = swatch;
  }

  /**
   * Gets the `50` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 50() {
    return this._swatch[50];
  }

  /**
   * Gets the `100` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 100() {
    return this._swatch[100];
  }

  /**
   * Gets the `200` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 200() {
    return this._swatch[200];
  }

  /**
   * Gets the `300` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 300() {
    return this._swatch[300];
  }

  /**
   * Gets the `400` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 400() {
    return this._swatch[400];
  }

  /**
   * Gets the `500` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 500() {
    return this._swatch[500];
  }

  /**
   * Gets the `600` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 600() {
    return this._swatch[600];
  }

  /**
   * Gets the `700` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 700() {
    return this._swatch[700];
  }

  /**
   * Gets the `800` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 800() {
    return this._swatch[800];
  }

  /**
   * Gets the `900` value of the swatch.
   *
   * @returns {Color} The color.
   */
  public get 900() {
    return this._swatch[900];
  }
}

/**
 * Defines a single color as well a color swatch with ten shades of the color.
 *
 * The color's shades are referred to by index. The greater the index, the darker the color. There are 10 valid indices:
 * 50, 100, 200, ..., 900. The value of this color should the same the value of index 500 and shade500.
 *
 * @see Colors
 * which defines all of the standard material colors.
 */
class MaterialColor extends ColorSwatch {
  /**
   * The lightest shade.
   *
   * @returns {Color} The color.
   */
  public get shade50() {
    return this[50];
  }

  /**
   * The second-lightest shade.
   *
   * @returns {Color} The color.
   */
  public get shade100() {
    return this[100];
  }

  /**
   * The third-lightest shade.
   *
   * @returns {Color} The color.
   */
  public get shade200() {
    return this[200];
  }

  /**
   * The fourth-lightest shade.
   *
   * @returns {Color} The color.
   */
  public get shade300() {
    return this[300];
  }

  /**
   * The fifth-lightest shade.
   *
   * @returns {Color} The color.
   */
  public get shade400() {
    return this[400];
  }

  /**
   * The default shade.
   *
   * @returns {Color} The color.
   */
  public get shade500() {
    return this[500];
  }

  /**
   * The fourth-darkest shade.
   *
   * @returns {Color} The color.
   */
  public get shade600() {
    return this[600];
  }

  /**
   * The third-darkest shade.
   *
   * @returns {Color} The color.
   */
  public get shade700() {
    return this[700];
  }

  /**
   * The second-darkest shade.
   *
   * @returns {Color} The color.
   */
  public get shade800() {
    return this[800];
  }

  /**
   * The darkest shade.
   *
   * @returns {Color} The color.
   */
  public get shade900() {
    return this[900];
  }
}

export class MaterialAccentColor extends ColorSwatch {
  /**
   * The first-lightest shade.
   *
   * @returns {Color} The color.
   */
  public get shade100() {
    return this[100];
  }

  /**
   * The default shade.
   *
   * @returns {Color} The color.
   */
  public get shade200() {
    return this[200];
  }

  /**
   * The second-darkest shade.
   *
   * @returns {Color} The color.
   */
  public get shade400() {
    return this[400];
  }

  /**
   * The darkest shade.
   *
   * @returns {Color} The color.
   */
  public get shade700() {
    return this[700];
  }
}

export default MaterialColor;
