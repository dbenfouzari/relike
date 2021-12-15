import Typography from "../typography";

describe("TextTheme", () => {
  it("copyWith should work", () => {
    const textTheme = Typography.blackMountainView;
    const nextTextTheme = textTheme.copyWith({
      headline1: Typography.blackMountainView.headline1?.copyWith({
        fontFamily: "Jest",
      }),
    });

    expect(nextTextTheme.headline1?.fontFamily).toEqual("Jest");
  });

  it("copyWith should work when giving nothing", () => {
    const textTheme = Typography.blackMountainView;
    const nextTextTheme = textTheme.copyWith({});

    expect(nextTextTheme.headline1?.fontFamily).toEqual(Typography.blackMountainView.headline1?.fontFamily);
  });
});
