import TextStyle from "../text-style";

interface TextThemeConstructor {
  headline1?: TextStyle;
  headline2?: TextStyle;
  headline3?: TextStyle;
  headline4?: TextStyle;
  headline5?: TextStyle;
  headline6?: TextStyle;
  bodyText1?: TextStyle;
  bodyText2?: TextStyle;
  subtitle1?: TextStyle;
  subtitle2?: TextStyle;
  caption?: TextStyle;
  button?: TextStyle;
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
}

export default TextTheme;
