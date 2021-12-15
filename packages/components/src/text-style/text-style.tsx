import Color from "../color";
import FontWeight from "../font-weight";
import TextOverflow from "../text-overflow";

/**
 * Defines props used to build a TextStyle
 */
export interface TextStyleConstructor {
  /**
   * The color to use as the background for the text.
   */
  backgroundColor?: Color;
  /**
   * The color to use when painting the text.
   */
  color?: Color;
  /**
   * The name of the font to use when painting the text (e.g., Roboto)
   *
   * The value provided in [fontFamily] will act as the preferred/first font
   * family that glyphs are looked for in, followed in order by the font families
   * in [fontFamilyFallback]. When [fontFamily] is null or not provided, the
   * first value in [fontFamilyFallback] acts as the preferred/first font
   * family. When neither is provided, then the default platform font will
   * be used.
   */
  fontFamily?: string;
  /**
   * The ordered list of font families to fall back on when a glyph cannot be
   * found in a higher priority font family.
   *
   * The value provided in [fontFamily] will act as the preferred/first font
   * family that glyphs are looked for in, followed in order by the font families
   * in [fontFamilyFallback]. If all font families are exhausted and no match
   * was found, the default platform font family will be used instead.
   *
   * When [fontFamily] is null or not provided, the first value in [fontFamilyFallback]
   * acts as the preferred/first font family. When neither is provided, then
   * the default platform font will be used. Providing an empty list or null
   * for this property is the same as omitting it.
   *
   * For example, if a glyph is not found in [fontFamily], then each font family
   * in [fontFamilyFallback] will be searched in order until it is found. If it
   * is not found, then a box will be drawn in its place.
   */
  fontFamilyFallback?: string[];
  /**
   * The size of glyphs (in logical pixels) to use when painting the text.
   */
  fontSize?: number;
  /**
   * The typeface thickness to use when painting the text (e.g., bold).
   */
  fontWeight?: FontWeight;
  /**
   * ### Line height
   *
   * By default, text will lay out with line height as defined by the font.
   * Font-metrics defined line height may be taller or shorter than the font size.
   * The [height] property allows manual adjustment of the height of the line as
   * a multiple of [fontSize]. For most fonts, setting [height] to 1.0 is not
   * the same as omitting or setting height to null. The following diagram
   * illustrates the difference between the font-metrics-defined line height and
   * the line height produced with `height: 1.0` (also known as the EM-square):
   *
   // The [height] property can be used to change the line height. Here, the line
   * height is set to 5 times the font size, so that the text is very spaced out.
   * Since the `fontSize` is set to 10, the final height of the line is
   * 50 pixels.
   *
   * @example
   * <Text style={ TextStyle(height: 5, fontSize: 10) }>
   *   Ladies and gentlemen, you could have been anywhere in the world tonight, but you’re here with us in New York City.
   * </Text>
   */
  height?: number;
  /**
   * The amount of space (in logical pixels) to add between each letter.
   * A negative value can be used to bring the letters closer.
   */
  letterSpacing?: number;
  /**
   * How visual text overflow should be handled.
   */
  overflow?: TextOverflow;
  /**
   * A list of [Shadow]s that will be painted underneath the text.
   *
   * Multiple shadows are supported to replicate lighting from multiple light
   * sources.
   *
   * Shadows must be in the same order for [TextStyle] to be considered as
   * equivalent as order produces differing transparency.
   */
  // shadows; // TODO: Shadows
  /**
   * The amount of space (in logical pixels) to add at each sequence of
   * white-space (i.e. between each word). A negative value can be used to
   * bring the words closer.
   */
  wordSpacing?: number;
}

class TextStyle {
  /**
   * The color to use as the background for the text.
   */
  public readonly backgroundColor?: Color;
  /**
   * The color to use when painting the text.
   */
  public readonly color?: Color;
  private readonly _fontFamily?: string;
  /**
   * The ordered list of font families to fall back on when a glyph cannot be
   * found in a higher priority font family.
   *
   * The value provided in [fontFamily] will act as the preferred/first font
   * family that glyphs are looked for in, followed in order by the font families
   * in [fontFamilyFallback]. If all font families are exhausted and no match
   * was found, the default platform font family will be used instead.
   *
   * When [fontFamily] is null or not provided, the first value in [fontFamilyFallback]
   * acts as the preferred/first font family. When neither is provided, then
   * the default platform font will be used. Providing an empty list or null
   * for this property is the same as omitting it.
   *
   * For example, if a glyph is not found in [fontFamily], then each font family
   * in [fontFamilyFallback] will be searched in order until it is found. If it
   * is not found, then a box will be drawn in its place.
   */
  public readonly fontFamilyFallback?: string[];
  /**
   * The size of glyphs (in logical pixels) to use when painting the text.
   */
  public readonly fontSize?: number;
  /**
   * The typeface thickness to use when painting the text (e.g., bold).
   */
  public readonly fontWeight?: FontWeight;
  /**
   * ### Line height
   *
   * By default, text will lay out with line height as defined by the font.
   * Font-metrics defined line height may be taller or shorter than the font size.
   * The [height] property allows manual adjustment of the height of the line as
   * a multiple of [fontSize]. For most fonts, setting [height] to 1.0 is not
   * the same as omitting or setting height to null. The following diagram
   * illustrates the difference between the font-metrics-defined line height and
   * the line height produced with `height: 1.0` (also known as the EM-square):
   *
   // The [height] property can be used to change the line height. Here, the line
   * height is set to 5 times the font size, so that the text is very spaced out.
   * Since the `fontSize` is set to 10, the final height of the line is
   * 50 pixels.
   *
   * @example
   * <Text style={ TextStyle(height: 5, fontSize: 10) }>
   *   Ladies and gentlemen, you could have been anywhere in the world tonight, but you’re here with us in New York City.
   * </Text>
   */
  public readonly height?: number;
  /**
   * The amount of space (in logical pixels) to add between each letter.
   * A negative value can be used to bring the letters closer.
   */
  public readonly letterSpacing?: number;
  /**
   * How visual text overflow should be handled.
   */
  public readonly overflow?: TextOverflow;
  /**
   * A list of [Shadow]s that will be painted underneath the text.
   *
   * Multiple shadows are supported to replicate lighting from multiple light
   * sources.
   *
   * Shadows must be in the same order for [TextStyle] to be considered as
   * equivalent as order produces differing transparency.
   */
  // public readonly shadows; // TODO: Shadows
  /**
   * The amount of space (in logical pixels) to add at each sequence of
   * white-space (i.e. between each word). A negative value can be used to
   * bring the words closer.
   */
  public readonly wordSpacing?: number;

  /**
   * Builds a TextStyle
   *
   * @param {TextStyleConstructor} args The arguments.
   * @example
   * new TextStyle({ color: textColor, fontSize: 13 })
   */
  constructor({
    backgroundColor,
    color,
    fontFamily,
    fontFamilyFallback,
    fontSize,
    fontWeight,
    height,
    letterSpacing,
    overflow,
    wordSpacing,
  }: TextStyleConstructor) {
    this.backgroundColor = backgroundColor;
    this.color = color;
    this._fontFamily = fontFamily;
    this.fontFamilyFallback = fontFamilyFallback;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.height = height;
    this.letterSpacing = letterSpacing;
    this.overflow = overflow;
    this.wordSpacing = wordSpacing;
  }

  /**
   * The name of the font to use when painting the text (e.g., Roboto)
   *
   * The value provided in [fontFamily] will act as the preferred/first font
   * family that glyphs are looked for in, followed in order by the font families
   * in [fontFamilyFallback]. When [fontFamily] is null or not provided, the
   * first value in [fontFamilyFallback] acts as the preferred/first font
   * family. When neither is provided, then the default platform font will
   * be used.
   *
   * @returns {[string]} The fonts
   */
  public get fontFamily() {
    return [this._fontFamily, ...(this.fontFamilyFallback || [])].join(", ");
  }

  /**
   * Returns a string representation of TextStyle.
   *
   * @example
   * new TextStyle({ color: Colors.red, fontSize: 13 }).toString();
   * @returns {string} the string representation of TextStyle
   */
  public toString() {
    return `TextStyle({
  backgroundColor: ${this.backgroundColor},
  color: ${this.color},
  fontFamily: ${this.fontFamily},
  fontFamilyFallback: ${this.fontFamilyFallback},
  fontWeight: ${this.fontWeight},
  height: ${this.height},
  letterSpacing: ${this.letterSpacing},
  overflow: ${this.overflow},
  wordSpacing: ${this.wordSpacing}
})`;
  }

  /**
   * Creates a new TextStyle with args override.
   *
   * @param {TextStyleConstructor} args The new args.
   * @example
   * const textStyle = new TextStyle({ color: Colors.red, fontSize: 13 });
   * const blackBgTextStyle = textStyle.copyWith({ backgroundColor: Colors.black });
   * const whiteFgTextStyle = blackBgTextStyle.copyWith({ color: Colors.white }) // { color: Colors.white, fontSize: 13, backgroundColor: Colors.black }
   * @returns {TextStyle} A new TextStyle
   */
  public copyWith({
    backgroundColor,
    color,
    fontFamily,
    fontFamilyFallback,
    fontSize,
    fontWeight,
    height,
    letterSpacing,
    overflow,
    wordSpacing,
  }: TextStyleConstructor) {
    return new TextStyle({
      backgroundColor: backgroundColor ?? this.backgroundColor,
      color: color ?? this.color,
      fontFamily: fontFamily ?? this.fontFamily,
      fontFamilyFallback: fontFamilyFallback ?? this.fontFamilyFallback,
      fontSize: fontSize ?? this.fontSize,
      fontWeight: fontWeight ?? this.fontWeight,
      height: height ?? this.height,
      letterSpacing: letterSpacing ?? this.letterSpacing,
      overflow: overflow ?? this.overflow,
      wordSpacing: wordSpacing ?? this.wordSpacing,
    });
  }
}

export default TextStyle;
