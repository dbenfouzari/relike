import Brightness from "../brightness";
import Color from "../color";
import Colors from "../colors";
import MaterialColor from "../material-color";
import TextTheme from "../text-theme";
import Typography from "../typography";

/**
 * Definitions for ThemeData constructor.
 */
interface ThemeDataConstructor {
  /**
   * The overall theme brightness.
   *
   * The default TextStyle color for the textTheme is black if the theme is constructed with Brightness.light
   * and white if the theme is constructed with Brightness.dark.
   */
  brightness?: Brightness;
  /**
   * The global fontFamily used.
   */
  fontFamily?: string;
  /**
   * The background color for major parts of the app (toolbars, tab bars, etc.)
   */
  primaryColor?: Color;
  /**
   * The primary swatch.
   */
  primarySwatch?: MaterialColor;
  /**
   * The text theme.
   */
  textTheme?: TextTheme;
}

class ThemeData {
  public readonly brightness: Brightness;
  public readonly fontFamily: string;
  public readonly primaryColor: Color;
  public readonly primarySwatch: MaterialColor;
  public readonly textTheme: TextTheme;

  /**
   * Build the ThemeData
   *
   * @param {ThemeDataConstructor} args Props to build a ThemeData
   * @example
   * new ThemeData();
   */
  constructor({
    brightness = Brightness.light,
    fontFamily = "Roboto",
    primarySwatch = Colors.blue,
    primaryColor = brightness === Brightness.light ? primarySwatch : Colors.grey[900],
    textTheme = brightness === Brightness.light ? Typography.blackMountainView : Typography.whiteMountainView,
  }: ThemeDataConstructor = {}) {
    this.brightness = brightness;
    this.fontFamily = fontFamily;
    this.primaryColor = primaryColor;
    this.primarySwatch = primarySwatch;
    this.textTheme = textTheme;

    this.textTheme = this.textTheme.apply({ fontFamily });
  }
}

export default ThemeData;
