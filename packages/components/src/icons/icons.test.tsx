import Icons from "./icons";

describe("Icons", () => {
  it("should return an icon", () => {
    expect(Icons.access_time_filled_outlined).toEqual({
      _name: "access_time_filled",
      _variant: "outlined",
    });
  });

  it.each(Object.keys(Icons))("%s should render", (iconKey) => {
    expect(Icons[iconKey as keyof typeof Icons]).toMatchSnapshot();
  });
});
