import Colors from "../colors";
import FontWeight from "../font-weight";
import TextStyle from "../text-style";
import TextTheme from "../text-theme";

class Typography {
  /// A material design text theme with dark glyphs based on Roboto.
  ///
  /// This [TextTheme] provides color but not geometry (font size, weight, etc).
  static blackMountainView = new TextTheme({
    headline1: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 96,
      fontWeight: FontWeight.light,
      letterSpacing: -1.5,
      color: Colors.black54,
    }),
    headline2: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 60,
      fontWeight: FontWeight.light,
      letterSpacing: -0.5,
      color: Colors.black54,
    }),
    headline3: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 48,
      fontWeight: FontWeight.normal,
      letterSpacing: 0,
      color: Colors.black54,
    }),
    headline4: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 34,
      fontWeight: FontWeight.normal,
      letterSpacing: -0.25,
      color: Colors.black54,
    }),
    headline5: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: FontWeight.normal,
      letterSpacing: 0,
      color: Colors.black87,
    }),
    headline6: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: FontWeight.medium,
      letterSpacing: 0.15,
      color: Colors.black87,
    }),
    bodyText1: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: FontWeight.normal,
      letterSpacing: 0.5,
      color: Colors.black87,
    }),
    bodyText2: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: FontWeight.normal,
      letterSpacing: 0.25,
      color: Colors.black87,
    }),
    subtitle1: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: FontWeight.normal,
      letterSpacing: 0.15,
      color: Colors.black87,
    }),
    subtitle2: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: FontWeight.medium,
      letterSpacing: 0.1,
      color: Colors.black,
    }),
    caption: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 12,
      fontWeight: FontWeight.normal,
      letterSpacing: 0.4,
      color: Colors.black54,
    }),
    button: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: FontWeight.medium,
      letterSpacing: 1.25,
      color: Colors.black87,
    }),
    overline: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 10,
      fontWeight: FontWeight.normal,
      letterSpacing: 1.5,
      color: Colors.black,
    }),
  });

  /// A material design text theme with light glyphs based on Roboto.
  static whiteMountainView = new TextTheme({
    headline1: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 96,
      fontWeight: FontWeight.light,
      letterSpacing: -1.5,
      color: Colors.white70,
    }),
    headline2: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 60,
      fontWeight: FontWeight.light,
      letterSpacing: -0.5,
      color: Colors.white70,
    }),
    headline3: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 48,
      fontWeight: FontWeight.normal,
      letterSpacing: 0,
      color: Colors.white70,
    }),
    headline4: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 34,
      fontWeight: FontWeight.normal,
      letterSpacing: -0.25,
      color: Colors.white70,
    }),
    headline5: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: FontWeight.normal,
      letterSpacing: 0,
      color: Colors.white,
    }),
    headline6: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: FontWeight.medium,
      letterSpacing: 0.15,
      color: Colors.white,
    }),
    bodyText1: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: FontWeight.normal,
      letterSpacing: 0.5,
      color: Colors.white,
    }),
    bodyText2: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: FontWeight.normal,
      letterSpacing: 0.25,
      color: Colors.white,
    }),
    subtitle1: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: FontWeight.normal,
      letterSpacing: 0.15,
      color: Colors.white,
    }),
    subtitle2: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: FontWeight.medium,
      letterSpacing: 0.1,
      color: Colors.white,
    }),
    caption: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 12,
      fontWeight: FontWeight.normal,
      letterSpacing: 0.4,
      color: Colors.white70,
    }),
    button: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: FontWeight.medium,
      letterSpacing: 1.25,
      color: Colors.white,
    }),
    overline: new TextStyle({
      fontFamily: "Roboto",
      fontSize: 10,
      fontWeight: FontWeight.normal,
      letterSpacing: 1.5,
      color: Colors.white,
    }),
  });
}

export default Typography;
