import TextStyle from "../text-style";
import { TextStyleConstructor } from "../text-style/text-style";

interface TextThemeConstructor {
  /**
   * The largest text on the screen, reserved for short, important text or numerals.
   */
  headline1?: TextStyle;
  /**
   * Headline variant 2.
   */
  headline2?: TextStyle;
  /**
   * Headline variant 3.
   */
  headline3?: TextStyle;
  /**
   * Headline variant 4.
   */
  headline4?: TextStyle;
  /**
   * Headline variant 5.
   */
  headline5?: TextStyle;
  /**
   * Headline variant 6.
   */
  headline6?: TextStyle;
  /**
   * Used for long-form writing.
   */
  bodyText1?: TextStyle;
  /**
   * Body variant 2.
   */
  bodyText2?: TextStyle;
  /**
   * Smaller than headline, reserved for medium-emphasis text that is shorter in length.
   */
  subtitle1?: TextStyle;
  /**
   * Subtitle variant 2.
   */
  subtitle2?: TextStyle;
  /**
   * Used sparingly to annotate imagery.
   */
  caption?: TextStyle;
  /**
   * A call to action used by different types of buttons.
   */
  button?: TextStyle;
  /**
   * Used sparingly to introduce a headline.
   */
  overline?: TextStyle;
}

class TextTheme {
  /**
   * The largest text on the screen, reserved for short, important text or numerals.
   */
  headline1?: TextStyle;
  /**
   * Headline variant 2.
   */
  headline2?: TextStyle;
  /**
   * Headline variant 3.
   */
  headline3?: TextStyle;
  /**
   * Headline variant 4.
   */
  headline4?: TextStyle;
  /**
   * Headline variant 5.
   */
  headline5?: TextStyle;
  /**
   * Headline variant 6.
   */
  headline6?: TextStyle;
  /**
   * Used for long-form writing.
   */
  bodyText1?: TextStyle;
  /**
   * Body variant 2.
   */
  bodyText2?: TextStyle;
  /**
   * Smaller than headline, reserved for medium-emphasis text that is shorter in length.
   */
  subtitle1?: TextStyle;
  /**
   * Subtitle variant 2.
   */
  subtitle2?: TextStyle;
  /**
   * Used sparingly to annotate imagery.
   */
  caption?: TextStyle;
  /**
   * A call to action used by different types of buttons.
   */
  button?: TextStyle;
  /**
   * Used sparingly to introduce a headline.
   */
  overline?: TextStyle;

  constructor({
    headline1,
    headline2,
    headline3,
    headline4,
    headline5,
    headline6,
    bodyText1,
    bodyText2,
    subtitle1,
    subtitle2,
    caption,
    button,
    overline,
  }: TextThemeConstructor) {
    this.headline1 = headline1;
    this.headline2 = headline2;
    this.headline3 = headline3;
    this.headline4 = headline4;
    this.headline5 = headline5;
    this.headline6 = headline6;
    this.bodyText1 = bodyText1;
    this.bodyText2 = bodyText2;
    this.subtitle1 = subtitle1;
    this.subtitle2 = subtitle2;
    this.caption = caption;
    this.button = button;
    this.overline = overline;
  }

  copyWith({
    headline1,
    headline2,
    headline3,
    headline4,
    headline5,
    headline6,
    bodyText1,
    bodyText2,
    subtitle1,
    subtitle2,
    caption,
    button,
    overline,
  }: TextThemeConstructor) {
    return new TextTheme({
      headline1: headline1 ?? this.headline1,
      headline2: headline2 ?? this.headline2,
      headline3: headline3 ?? this.headline3,
      headline4: headline4 ?? this.headline4,
      headline5: headline5 ?? this.headline5,
      headline6: headline6 ?? this.headline6,
      bodyText1: bodyText1 ?? this.bodyText1,
      bodyText2: bodyText2 ?? this.bodyText2,
      subtitle1: subtitle1 ?? this.subtitle1,
      subtitle2: subtitle2 ?? this.subtitle2,
      caption: caption ?? this.caption,
      button: button ?? this.button,
      overline: overline ?? this.overline,
    });
  }

  apply({
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
    return new TextTheme({
      headline1: this.headline1?.copyWith({
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
      }),
      headline2: this.headline2?.copyWith({
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
      }),
      headline3: this.headline3?.copyWith({
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
      }),
      headline4: this.headline4?.copyWith({
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
      }),
      headline5: this.headline5?.copyWith({
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
      }),
      headline6: this.headline6?.copyWith({
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
      }),
      bodyText1: this.bodyText1?.copyWith({
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
      }),
      bodyText2: this.bodyText2?.copyWith({
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
      }),
      subtitle1: this.subtitle1?.copyWith({
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
      }),
      subtitle2: this.subtitle2?.copyWith({
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
      }),
      caption: this.caption?.copyWith({
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
      }),
      button: this.button?.copyWith({
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
      }),
      overline: this.overline?.copyWith({
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
      }),
    });
  }
}

export default TextTheme;
