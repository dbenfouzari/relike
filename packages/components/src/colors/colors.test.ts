import MaterialColor, { MaterialAccentColor } from "../material-color";
import Colors from "./colors";

describe("Colors", () => {
  it.each([
    Colors.amber,
    Colors.blue,
    Colors.blueGrey,
    Colors.brown,
    Colors.cyan,
    Colors.deepOrange,
    Colors.deepPurple,
    Colors.green,
    Colors.grey,
    Colors.indigo,
    Colors.lightBlue,
    Colors.lightGreen,
    Colors.lime,
    Colors.orange,
    Colors.pink,
    Colors.purple,
    Colors.red,
    Colors.teal,
    Colors.yellow,
  ])("%s should be a MaterialColor", (color) => {
    expect(color).toBeInstanceOf(MaterialColor);
  });

  it.each([
    Colors.amberAccent,
    Colors.blueAccent,
    Colors.cyanAccent,
    Colors.deepOrangeAccent,
    Colors.deepPurpleAccent,
    Colors.greenAccent,
    Colors.indigoAccent,
    Colors.lightBlueAccent,
    Colors.lightGreenAccent,
    Colors.limeAccent,
    Colors.orangeAccent,
    Colors.pinkAccent,
    Colors.purpleAccent,
    Colors.redAccent,
    Colors.tealAccent,
    Colors.yellowAccent,
  ])("%s should be a MaterialAccentColor", (color) => {
    expect(color).toBeInstanceOf(MaterialAccentColor);
  });
});
