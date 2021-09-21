import Padding from "./padding";

describe("Padding", () => {
  describe(".toCSSString method", () => {
    it("should return null when no value set", () => {
      // Since all other values default to null, it should return a Padding with all values to null.
      const padding = Padding.only({ top: null });

      expect(padding.toCSSString()).toBe(null);
    });

    it("should return correct value", () => {
      expect(Padding.only({ top: 12 }).toCSSString()).toEqual("padding-top: 12px;");
      expect(Padding.only({ right: 12 }).toCSSString()).toEqual("padding-right: 12px;");
      expect(Padding.only({ bottom: 12 }).toCSSString()).toEqual("padding-bottom: 12px;");
      expect(Padding.only({ left: 12 }).toCSSString()).toEqual("padding-left: 12px;");
      expect(Padding.only({ top: 12, bottom: 32 }).toCSSString()).toEqual(`padding-top: 12px;
padding-bottom: 32px;`);
      expect(Padding.only({ left: 12, right: 32 }).toCSSString()).toEqual(`padding-left: 12px;
padding-right: 32px;`);
      expect(Padding.all(32).toCSSString()).toEqual(`padding-left: 32px;
padding-right: 32px;
padding-top: 32px;
padding-bottom: 32px;`);
    });
  });

  describe(".toStyle method", () => {
    it("should return correct value when 0", () => {
      const padding = Padding.all(0);

      expect(padding.toStyle()).toStrictEqual({
        paddingLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
      });
    });

    it("should return correct value when empty vertically", () => {
      const padding = Padding.symmetric({ horizontal: 12 });

      expect(padding.toStyle()).toStrictEqual({
        paddingLeft: 12,
        paddingTop: undefined,
        paddingRight: 12,
        paddingBottom: undefined,
      });
    });

    it("should return correct value when empty horizontally", () => {
      const padding = Padding.symmetric({ vertical: 12 });

      expect(padding.toStyle()).toStrictEqual({
        paddingLeft: undefined,
        paddingTop: 12,
        paddingRight: undefined,
        paddingBottom: 12,
      });
    });
  });

  describe(".copyWith method", () => {
    it("should do nothing if params are empty", () => {
      const { top, right, bottom, left } = Padding.all(32).copyWith({});

      expect(top).toEqual(32);
      expect(right).toEqual(32);
      expect(bottom).toEqual(32);
      expect(left).toEqual(32);
    });

    it("should override correctly", () => {
      const { top, right, bottom, left } = Padding.all(32).copyWith({ top: 0 });

      expect(top).toEqual(0);
      expect(right).toEqual(32);
      expect(bottom).toEqual(32);
      expect(left).toEqual(32);
    });
  });

  it(".toString should return correct value", () => {
    expect(Padding.all(12).toString()).toBe("Padding(top: 12, right: 12, bottom: 12, left: 12)");
  });
});
