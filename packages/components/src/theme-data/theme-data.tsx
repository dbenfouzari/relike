import Brightness from "../brightness";
import Color from "../color";
import Colors from "../colors";
import MaterialColor from "../material-color";
import TextTheme from "../text-theme";
import Typography from "../typography";

interface ThemeDataConstructor {
  /**
   * The overall theme brightness.
   *
   * The default TextStyle color for the textTheme is black if the theme is constructed with Brightness.light
   * and white if the theme is constructed with Brightness.dark.
   */
  brightness?: Brightness;
  fontFamily?: string;
  /**
   * The background color for major parts of the app (toolbars, tab bars, etc)
   */
  primaryColor?: Color;
  primarySwatch?: MaterialColor;
  textTheme?: TextTheme;
}

class ThemeData {
  public readonly brightness: Brightness;
  public readonly fontFamily: string;
  public readonly primaryColor: Color;
  public readonly primarySwatch: MaterialColor;
  public readonly textTheme: TextTheme;

  constructor({
    brightness = Brightness.light,
    fontFamily = "Roboto",
    primarySwatch = Colors.blue,
    primaryColor = brightness === Brightness.light ? primarySwatch : Colors.grey[900],
    textTheme = brightness === Brightness.light ? Typography.blackMountainView : Typography.whiteMountainView,
  }: ThemeDataConstructor) {
    this.brightness = brightness;
    this.fontFamily = fontFamily;
    this.primaryColor = primaryColor;
    this.primarySwatch = primarySwatch;
    this.textTheme = textTheme;

    this.textTheme = this.textTheme.apply({ fontFamily });
  }
}

export default ThemeData;
