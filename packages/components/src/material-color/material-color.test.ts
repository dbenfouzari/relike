import Color from "../color";
import Colors from "../colors";

describe("MaterialColor", () => {
  const materialColor = Colors.red;
  const materialAccentColor = Colors.redAccent;

  it.each([
    materialColor.shade50,
    materialColor.shade100,
    materialColor.shade200,
    materialColor.shade300,
    materialColor.shade400,
    materialColor.shade500,
    materialColor.shade600,
    materialColor.shade700,
    materialColor.shade800,
    materialColor.shade900,
  ])("%s should be a Color", (color) => {
    expect(color).toBeInstanceOf(Color);
  });

  it.each([
    materialAccentColor.shade100,
    materialAccentColor.shade200,
    materialAccentColor.shade400,
    materialAccentColor.shade700,
  ])("%s should be a Color", (color) => {
    expect(color).toBeInstanceOf(Color);
  });
});
