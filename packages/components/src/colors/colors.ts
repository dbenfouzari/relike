import Color from "../color";
import MaterialColor, { MaterialAccentColor } from "../material-color";

const _amberPrimaryValue = 0xffffc107;
const _amberAccentPrimaryValue = 0xffffd740;
const _bluePrimaryValue = 0xff2196f3;
const _blueAccentPrimaryValue = 0xff448aff;
const _blueGreyPrimaryValue = 0xff607d8b;
const _brownPrimaryValue = 0xff795548;
const _cyanPrimaryValue = 0xff00bcd4;
const _cyanAccentPrimaryValue = 0xff18ffff;
const _deepOrangePrimaryValue = 0xffff5722;
const _deepOrangeAccentPrimaryValue = 0xffff6e40;
const _deepPurplePrimaryValue = 0xff673ab7;
const _deepPurpleAccentPrimaryValue = 0xff7c4dff;
const _greenPrimaryValue = 0xff4caf50;
const _greenAccentPrimaryValue = 0xff69f0ae;
const _greyPrimaryValue = 0xff9e9e9e;
const _indigoPrimaryValue = 0xff3f51b5;
const _indigoAccentPrimaryValue = 0xff536dfe;
const _lightBluePrimaryValue = 0xff03a9f4;
const _lightBlueAccentPrimaryValue = 0xff40c4ff;
const _lightGreenPrimaryValue = 0xff8bc34a;
const _lightGreenAccentPrimaryValue = 0xffb2ff59;
const _limePrimaryValue = 0xffcddc39;
const _limeAccentPrimaryValue = 0xffeeff41;
const _orangePrimaryValue = 0xffff9800;
const _orangeAccentPrimaryValue = 0xffffab40;
const _pinkPrimaryValue = 0xffe91e63;
const _pinkAccentPrimaryValue = 0xffff4081;
const _purplePrimaryValue = 0xff9c27b0;
const _purpleAccentPrimaryValue = 0xffe040fb;
const _redPrimaryValue = 0xfff44336;
const _redAccentPrimaryValue = 0xffff5252;
const _tealPrimaryValue = 0xff009688;
const _tealAccentPrimaryValue = 0xff64ffda;
const _yellowPrimaryValue = 0xffffeb3b;
const _yellowAccentPrimaryValue = 0xffffff00;

/**
 * ## Color palettes
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.pink.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.pinkAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.red.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.redAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.deepOrange.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.deepOrangeAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.orange.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.orangeAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.amber.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.amberAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.yellow.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.yellowAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.lime.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.limeAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.lightGreen.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.lightGreenAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.green.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.greenAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.teal.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.tealAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.cyan.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.cyanAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.lightBlue.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.lightBlueAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.blue.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.blueAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.indigo.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.indigoAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.purple.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.purpleAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.deepPurple.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.deepPurpleAccent.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.blueGrey.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.brown.png)
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.grey.png)
 *
 * ## Blacks and whites
 *
 * These colors are identified by their transparency. The low transparency
 * levels (e.g. [Colors.white12] and [Colors.white10]) are very hard to see and
 * should be avoided in general. They are intended for very subtle effects.
 *
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.blacks.png)
 * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.whites.png)
 */
class Colors {
  /**
   * The amber primary color and swatch.
   */
  static get amber() {
    return new MaterialColor(_amberPrimaryValue, {
      50: new Color(0xfffff8e1),
      100: new Color(0xffffecb3),
      200: new Color(0xffffe082),
      300: new Color(0xffffd54f),
      400: new Color(0xffffca28),
      500: new Color(_amberPrimaryValue),
      600: new Color(0xffffb300),
      700: new Color(0xffffa000),
      800: new Color(0xffff8f00),
      900: new Color(0xffff6f00),
    });
  }

  /**
   *
   */
  static get amberAccent() {
    return new MaterialAccentColor(_amberAccentPrimaryValue, {
      100: new Color(0xffffe57f),
      200: new Color(_amberAccentPrimaryValue),
      400: new Color(0xffffc400),
      700: new Color(0xffffab00),
    });
  }

  /**
   * Completely opaque black.
   *
   * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.blacks.png)
   *
   * See also:
   *  * [black87], [black54], [black45], [black38], [black26], [black12], which
   *    are variants on this color but with different opacities.
   *  * [white], a solid white color.
   *  * [transparent], a fully-transparent color.
   */
  static black = new Color(0xff000000);

  /**
   * Black with 87% opacity.
   *
   * This is a good contrasting color for text in light themes.
   */
  static black87 = Colors.black.withOpacity(0.87);

  /**
   * Black with 54% opacity.
   *
   * This is a color commonly used for headings in light themes. It's also used
   * as the mask color behind dialogs.
   */
  static black54 = Colors.black.withOpacity(0.54);

  /**
   * Black with 45% opacity.
   */
  static black45 = Colors.black.withOpacity(0.45);

  /**
   * Black with 38% opacity.
   *
   * For light themes, i.e. when the Theme's [ThemeData.brightness] is
   * [Brightness.light], this color is used for disabled icons and for
   * placeholder text in [DataTable].
   */
  static black38 = Colors.black.withOpacity(0.38);

  /**
   * Black with 26% opacity.
   *
   * Used for disabled radio buttons and the text of disabled flat buttons in light themes.
   */
  static black26 = Colors.black.withOpacity(0.26);

  /**
   * Black with 12% opacity.
   *
   * Used for the background of disabled raised buttons in light themes.
   */
  static black12 = Colors.black.withOpacity(0.12);

  /**
   * The blue primary color and swatch.
   */
  static get blue() {
    return new MaterialColor(_bluePrimaryValue, {
      50: new Color(0xffe3f2fd),
      100: new Color(0xffbbdefb),
      200: new Color(0xff90caf9),
      300: new Color(0xff64b5f6),
      400: new Color(0xff42a5f5),
      500: new Color(_bluePrimaryValue),
      600: new Color(0xff1e88e5),
      700: new Color(0xff1976d2),
      800: new Color(0xff1565c0),
      900: new Color(0xff0d47a1),
    });
  }

  /**
   *
   */
  static get blueAccent() {
    return new MaterialAccentColor(_blueAccentPrimaryValue, {
      100: new Color(0xff82b1ff),
      200: new Color(_blueAccentPrimaryValue),
      400: new Color(0xff2979ff),
      700: new Color(0xff2962ff),
    });
  }

  /**
   * The blue-grey primary color and swatch.
   */
  static get blueGrey() {
    return new MaterialColor(_blueGreyPrimaryValue, {
      50: new Color(0xffeceff1),
      100: new Color(0xffcfd8dc),
      200: new Color(0xffb0bec5),
      300: new Color(0xff90a4ae),
      400: new Color(0xff78909c),
      500: new Color(_blueGreyPrimaryValue),
      600: new Color(0xff546e7a),
      700: new Color(0xff455a64),
      800: new Color(0xff37474f),
      900: new Color(0xff263238),
    });
  }

  /**
   * The brown primary color and swatch.
   */
  static get brown() {
    return new MaterialColor(_brownPrimaryValue, {
      50: new Color(0xffefebe9),
      100: new Color(0xffd7ccc8),
      200: new Color(0xffbcaaa4),
      300: new Color(0xffa1887f),
      400: new Color(0xff8d6e63),
      500: new Color(_brownPrimaryValue),
      600: new Color(0xff6d4c41),
      700: new Color(0xff5d4037),
      800: new Color(0xff4e342e),
      900: new Color(0xff3e2723),
    });
  }

  /**
   * The cyan primary color and swatch.
   */
  static get cyan() {
    return new MaterialColor(_cyanPrimaryValue, {
      50: new Color(0xffe0f7fa),
      100: new Color(0xffb2ebf2),
      200: new Color(0xff80deea),
      300: new Color(0xff4dd0e1),
      400: new Color(0xff26c6da),
      500: new Color(_cyanPrimaryValue),
      600: new Color(0xff00acc1),
      700: new Color(0xff0097a7),
      800: new Color(0xff00838f),
      900: new Color(0xff006064),
    });
  }

  /**
   *
   */
  static get cyanAccent() {
    return new MaterialAccentColor(_cyanAccentPrimaryValue, {
      100: new Color(0xff84ffff),
      200: new Color(_cyanAccentPrimaryValue),
      400: new Color(0xff00e5ff),
      700: new Color(0xff00b8d4),
    });
  }

  /**
   * The deep orange primary color and swatch.
   */
  static get deepOrange() {
    return new MaterialColor(_deepOrangePrimaryValue, {
      50: new Color(0xfffbe9e7),
      100: new Color(0xffffccbc),
      200: new Color(0xffffab91),
      300: new Color(0xffff8a65),
      400: new Color(0xffff7043),
      500: new Color(_deepOrangePrimaryValue),
      600: new Color(0xfff4511e),
      700: new Color(0xffe64a19),
      800: new Color(0xffd84315),
      900: new Color(0xffbf360c),
    });
  }

  /**
   *
   */
  static get deepOrangeAccent() {
    return new MaterialAccentColor(_deepOrangeAccentPrimaryValue, {
      100: new Color(0xffff9e80),
      200: new Color(_deepOrangeAccentPrimaryValue),
      400: new Color(0xffff3d00),
      700: new Color(0xffdd2c00),
    });
  }

  /**
   * The deep purple primary color and swatch.
   */
  static get deepPurple() {
    return new MaterialColor(_deepPurplePrimaryValue, {
      50: new Color(0xffede7f6),
      100: new Color(0xffd1c4e9),
      200: new Color(0xffb39ddb),
      300: new Color(0xff9575cd),
      400: new Color(0xff7e57c2),
      500: new Color(_deepPurplePrimaryValue),
      600: new Color(0xff5e35b1),
      700: new Color(0xff512da8),
      800: new Color(0xff4527a0),
      900: new Color(0xff311b92),
    });
  }

  /**
   *
   */
  static get deepPurpleAccent() {
    return new MaterialAccentColor(_deepPurpleAccentPrimaryValue, {
      100: new Color(0xffb388ff),
      200: new Color(_deepPurpleAccentPrimaryValue),
      400: new Color(0xff651fff),
      700: new Color(0xff6200ea),
    });
  }

  /**
   * The green primary color and swatch.
   */
  static get green() {
    return new MaterialColor(_greenPrimaryValue, {
      50: new Color(0xffe8f5e9),
      100: new Color(0xffc8e6c9),
      200: new Color(0xffa5d6a7),
      300: new Color(0xff81c784),
      400: new Color(0xff66bb6a),
      500: new Color(_greenPrimaryValue),
      600: new Color(0xff43a047),
      700: new Color(0xff388e3c),
      800: new Color(0xff2e7d32),
      900: new Color(0xff1b5e20),
    });
  }

  /**
   *
   */
  static get greenAccent() {
    return new MaterialAccentColor(_greenAccentPrimaryValue, {
      100: new Color(0xffb9f6ca),
      200: new Color(_greenAccentPrimaryValue),
      400: new Color(0xff00e676),
      700: new Color(0xff00c853),
    });
  }

  /**
   * The grey primary color and swatch.
   */
  static get grey() {
    return new MaterialColor(_greyPrimaryValue, {
      50: new Color(0xfffafafa),
      100: new Color(0xfff5f5f5),
      200: new Color(0xffeeeeee),
      300: new Color(0xffe0e0e0),
      350: new Color(0xffd6d6d6), // only for raised button while pressed in light theme
      400: new Color(0xffbdbdbd),
      500: new Color(_greyPrimaryValue),
      600: new Color(0xff757575),
      700: new Color(0xff616161),
      800: new Color(0xff424242),
      850: new Color(0xff303030), // only for background color in dark theme
      900: new Color(0xff212121),
    });
  }

  /**
   * The indigo primary color and swatch.
   */
  static get indigo() {
    return new MaterialColor(_indigoPrimaryValue, {
      50: new Color(0xffe8eaf6),
      100: new Color(0xffc5cae9),
      200: new Color(0xff9fa8da),
      300: new Color(0xff7986cb),
      400: new Color(0xff5c6bc0),
      500: new Color(_indigoPrimaryValue),
      600: new Color(0xff3949ab),
      700: new Color(0xff303f9f),
      800: new Color(0xff283593),
      900: new Color(0xff1a237e),
    });
  }

  /**
   *
   */
  static get indigoAccent() {
    return new MaterialAccentColor(_indigoAccentPrimaryValue, {
      100: new Color(0xff8c9eff),
      200: new Color(_indigoAccentPrimaryValue),
      400: new Color(0xff3d5afe),
      700: new Color(0xff304ffe),
    });
  }

  /**
   * The light blue primary color and swatch.
   */
  static get lightBlue() {
    return new MaterialColor(_lightBluePrimaryValue, {
      50: new Color(0xffe1f5fe),
      100: new Color(0xffb3e5fc),
      200: new Color(0xff81d4fa),
      300: new Color(0xff4fc3f7),
      400: new Color(0xff29b6f6),
      500: new Color(_lightBluePrimaryValue),
      600: new Color(0xff039be5),
      700: new Color(0xff0288d1),
      800: new Color(0xff0277bd),
      900: new Color(0xff01579b),
    });
  }

  /**
   *
   */
  static get lightBlueAccent() {
    return new MaterialAccentColor(_lightBlueAccentPrimaryValue, {
      100: new Color(0xff80d8ff),
      200: new Color(_lightBlueAccentPrimaryValue),
      400: new Color(0xff00b0ff),
      700: new Color(0xff0091ea),
    });
  }

  /**
   * The light green primary color and swatch.
   */
  static get lightGreen() {
    return new MaterialColor(_lightGreenPrimaryValue, {
      50: new Color(0xfff1f8e9),
      100: new Color(0xffdcedc8),
      200: new Color(0xffc5e1a5),
      300: new Color(0xffaed581),
      400: new Color(0xff9ccc65),
      500: new Color(_lightGreenPrimaryValue),
      600: new Color(0xff7cb342),
      700: new Color(0xff689f38),
      800: new Color(0xff558b2f),
      900: new Color(0xff33691e),
    });
  }

  /**
   *
   */
  static get lightGreenAccent() {
    return new MaterialAccentColor(_lightGreenAccentPrimaryValue, {
      100: new Color(0xffccff90),
      200: new Color(_lightGreenAccentPrimaryValue),
      400: new Color(0xff76ff03),
      700: new Color(0xff64dd17),
    });
  }

  /**
   * The lime primary color and swatch.
   */
  static get lime() {
    return new MaterialColor(_limePrimaryValue, {
      50: new Color(0xfff9fbe7),
      100: new Color(0xfff0f4c3),
      200: new Color(0xffe6ee9c),
      300: new Color(0xffdce775),
      400: new Color(0xffd4e157),
      500: new Color(_limePrimaryValue),
      600: new Color(0xffc0ca33),
      700: new Color(0xffafb42b),
      800: new Color(0xff9e9d24),
      900: new Color(0xff827717),
    });
  }

  /**
   *
   */
  static get limeAccent() {
    return new MaterialAccentColor(_limeAccentPrimaryValue, {
      100: new Color(0xfff4ff81),
      200: new Color(_limeAccentPrimaryValue),
      400: new Color(0xffc6ff00),
      700: new Color(0xffaeea00),
    });
  }

  /**
   * The orange primary color and swatch.
   */
  static get orange() {
    return new MaterialColor(_orangePrimaryValue, {
      50: new Color(0xfffff3e0),
      100: new Color(0xffffe0b2),
      200: new Color(0xffffcc80),
      300: new Color(0xffffb74d),
      400: new Color(0xffffa726),
      500: new Color(_orangePrimaryValue),
      600: new Color(0xfffb8c00),
      700: new Color(0xfff57c00),
      800: new Color(0xffef6c00),
      900: new Color(0xffe65100),
    });
  }

  /**
   *
   */
  static get orangeAccent() {
    return new MaterialAccentColor(_orangeAccentPrimaryValue, {
      100: new Color(0xffffd180),
      200: new Color(_orangeAccentPrimaryValue),
      400: new Color(0xffff9100),
      700: new Color(0xffff6d00),
    });
  }

  /**
   * The pink primary color and swatch.
   */
  static get pink() {
    return new MaterialColor(_pinkPrimaryValue, {
      50: new Color(0xfffce4ec),
      100: new Color(0xfff8bbd0),
      200: new Color(0xfff48fb1),
      300: new Color(0xfff06292),
      400: new Color(0xffec407a),
      500: new Color(_pinkPrimaryValue),
      600: new Color(0xffd81b60),
      700: new Color(0xffc2185b),
      800: new Color(0xffad1457),
      900: new Color(0xff880e4f),
    });
  }

  /**
   *
   */
  static get pinkAccent() {
    return new MaterialAccentColor(_pinkAccentPrimaryValue, {
      100: new Color(0xffff80ab),
      200: new Color(_pinkAccentPrimaryValue),
      400: new Color(0xfff50057),
      700: new Color(0xffc51162),
    });
  }

  /**
   * The purple primary color and swatch.
   */
  static get purple() {
    return new MaterialColor(_purplePrimaryValue, {
      50: new Color(0xfff3e5f5),
      100: new Color(0xffe1bee7),
      200: new Color(0xffce93d8),
      300: new Color(0xffba68c8),
      400: new Color(0xffab47bc),
      500: new Color(_purplePrimaryValue),
      600: new Color(0xff8e24aa),
      700: new Color(0xff7b1fa2),
      800: new Color(0xff6a1b9a),
      900: new Color(0xff4a148c),
    });
  }

  /**
   *
   */
  static get purpleAccent() {
    return new MaterialAccentColor(_purpleAccentPrimaryValue, {
      100: new Color(0xffea80fc),
      200: new Color(_purpleAccentPrimaryValue),
      400: new Color(0xffd500f9),
      700: new Color(0xffaa00ff),
    });
  }

  /**
   * The red primary color and swatch.
   */
  static get red() {
    return new MaterialColor(_redPrimaryValue, {
      50: new Color(0xffffebee),
      100: new Color(0xffffcdd2),
      200: new Color(0xffef9a9a),
      300: new Color(0xffe57373),
      400: new Color(0xffef5350),
      500: new Color(_redPrimaryValue),
      600: new Color(0xffe53935),
      700: new Color(0xffd32f2f),
      800: new Color(0xffc62828),
      900: new Color(0xffb71c1c),
    });
  }

  /**
   *
   */
  static get redAccent() {
    return new MaterialAccentColor(_redAccentPrimaryValue, {
      100: new Color(0xffff8a80),
      200: new Color(_redAccentPrimaryValue),
      400: new Color(0xffff1744),
      700: new Color(0xffd50000),
    });
  }

  /**
   * The teal primary color and swatch.
   */
  static get teal() {
    return new MaterialColor(_tealPrimaryValue, {
      50: new Color(0xffe0f2f1),
      100: new Color(0xffb2dfdb),
      200: new Color(0xff80cbc4),
      300: new Color(0xff4db6ac),
      400: new Color(0xff26a69a),
      500: new Color(_tealPrimaryValue),
      600: new Color(0xff00897b),
      700: new Color(0xff00796b),
      800: new Color(0xff00695c),
      900: new Color(0xff004d40),
    });
  }

  /**
   *
   */
  static get tealAccent() {
    return new MaterialAccentColor(_tealAccentPrimaryValue, {
      100: new Color(0xffa7ffeb),
      200: new Color(_tealAccentPrimaryValue),
      400: new Color(0xff1de9b6),
      700: new Color(0xff00bfa5),
    });
  }

  /**
   * Completely invisible.
   */
  static transparent = new Color(0x00ffffff);

  /**
   * Completely opaque white.
   *
   * This is a good contrasting color for the [ThemeData.primaryColor] in the
   * dark theme. See [ThemeData.brightness].
   *
   * ![](https://flutter.github.io/assets-for-api-docs/assets/material/Colors.whites.png)
   *
   * See also:
   *
   *  * [white70], [white60], [white54], [white38], [white30], [white12],
   *    [white10], which are variants on this color but with different
   *    opacities.
   *  * [black], a solid black color.
   *  * [transparent], a fully-transparent color.
   */
  static white = new Color(0xffffffff);

  /**
   * White with 70% opacity.
   *
   * This is a color commonly used for headings in dark themes.
   */
  static white70 = Colors.white.withOpacity(0.7);

  /**
   * White with 60% opacity.
   *
   * Used for medium-emphasis text and hint text when [ThemeData.brightness] is
   * set to [Brightness.dark].
   */
  static white60 = Colors.white.withOpacity(0.6);

  /**
   * White with 54% opacity.
   */
  static white54 = Colors.white.withOpacity(0.4);

  /**
   * White with 38% opacity.
   *
   * Used for disabled radio buttons and the text of disabled flat buttons in dark themes.
   */
  static white38 = Colors.white.withOpacity(0.38);

  /**
   * White with 30% opacity.
   */
  static white30 = Colors.white.withOpacity(0.3);

  /**
   * White with 24% opacity.
   *
   * Used for the splash color for filled buttons.
   */
  static white24 = Colors.white.withOpacity(0.24);

  /**
   * White with 12% opacity.
   *
   * Used for the background of disabled raised buttons in dark themes.
   */
  static white12 = Colors.white.withOpacity(0.12);

  /**
   * White with 10% opacity.
   */
  static white10 = Colors.white.withOpacity(0.1);

  /**
   * The yellow primary color and swatch.
   */
  static get yellow() {
    return new MaterialColor(_yellowPrimaryValue, {
      50: new Color(0xfffffde7),
      100: new Color(0xfffff9c4),
      200: new Color(0xfffff59d),
      300: new Color(0xfffff176),
      400: new Color(0xffffee58),
      500: new Color(_yellowPrimaryValue),
      600: new Color(0xfffdd835),
      700: new Color(0xfffbc02d),
      800: new Color(0xfff9a825),
      900: new Color(0xfff57f17),
    });
  }

  /**
   *
   */
  static get yellowAccent() {
    return new MaterialAccentColor(_yellowAccentPrimaryValue, {
      100: new Color(0xffffff8d),
      200: new Color(_yellowAccentPrimaryValue),
      400: new Color(0xffffea00),
      700: new Color(0xffffd600),
    });
  }

  static accents = [
    Colors.redAccent,
    Colors.pinkAccent,
    Colors.purpleAccent,
    Colors.deepPurpleAccent,
    Colors.indigoAccent,
    Colors.blueAccent,
    Colors.lightBlueAccent,
    Colors.cyanAccent,
    Colors.tealAccent,
    Colors.greenAccent,
    Colors.lightGreenAccent,
    Colors.limeAccent,
    Colors.yellowAccent,
    Colors.amberAccent,
    Colors.orangeAccent,
    Colors.deepOrangeAccent,
  ] as const;

  static primaries = [
    Colors.red,
    Colors.pink,
    Colors.purple,
    Colors.deepPurple,
    Colors.indigo,
    Colors.blue,
    Colors.lightBlue,
    Colors.cyan,
    Colors.teal,
    Colors.green,
    Colors.lightGreen,
    Colors.lime,
    Colors.yellow,
    Colors.amber,
    Colors.orange,
    Colors.deepOrange,
    Colors.brown,
    // The grey swatch is intentionally omitted because when picking a color
    // randomly from this list to colorize an application, picking grey suddenly
    // makes the app look disabled.
    Colors.blueGrey,
  ] as const;
}

// export const PaletteComponent = ({ colorKey }) => {
//   const truc = Colors["deepPurpleAccent"];
//
//   if (truc instanceof MaterialColor) {
//     return (
//       <div>MaterialColor {colorKey}</div>
//     )
//   } else if (truc instanceof MaterialAccentColor) {
//     return <div>MaterialAccentColor {colorKey}</div>
//   } else {
//     return <div>Unknown {colorKey}</div>
//   }
// }

export default Colors;
