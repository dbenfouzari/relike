import Brightness from "../brightness";
import Typography from "../typography";
import ThemeData from "./theme-data";

describe("ThemeData", () => {
  it("should set textTheme to dark when brightness is light", () => {
    expect(new ThemeData({ brightness: Brightness.light }).textTheme).toEqual(Typography.blackMountainView);
    expect(new ThemeData({ brightness: Brightness.light }).textTheme).not.toEqual(Typography.whiteMountainView);
  });

  it("should set textTheme to light when brightness is dark", () => {
    expect(new ThemeData({ brightness: Brightness.dark }).textTheme).toEqual(Typography.whiteMountainView);
    expect(new ThemeData({ brightness: Brightness.dark }).textTheme).not.toEqual(Typography.blackMountainView);
  });

  it("should keep fontFamily", () => {
    const themeData = new ThemeData({});
    expect(themeData.fontFamily).toEqual("Roboto");
    expect(themeData.fontFamily).toEqual(Typography.blackMountainView.headline1?.fontFamily);
  });

  it("should not have same fontFamily", () => {
    const fontFamily = "Helvetica";
    const themeData = new ThemeData({ fontFamily });

    expect(themeData.fontFamily).toEqual(fontFamily);
    expect(themeData.fontFamily).not.toEqual(Typography.blackMountainView.headline1?.fontFamily);
    expect(themeData.textTheme.headline1?.fontFamily).toEqual(fontFamily);
  });
});
