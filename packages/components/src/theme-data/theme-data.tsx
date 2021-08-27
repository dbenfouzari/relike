import TextTheme from "../text-theme";
import Typography from "../typography";

interface ThemeDataConstructor {
  textTheme?: TextTheme;
}

class ThemeData {
  public readonly textTheme: TextTheme;

  constructor({ textTheme }: ThemeDataConstructor) {
    this.textTheme = textTheme ?? Typography.blackMountainView;
  }
}

export default ThemeData;
