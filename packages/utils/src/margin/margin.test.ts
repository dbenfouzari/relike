import Margin from "./margin";

describe("Margin", () => {
  describe(".toString method", () => {
    it(".toString should return correct value", () => {
      expect(Margin.all(12).toString()).toBe("Margin(top: 12, right: 12, bottom: 12, left: 12)");
    });
  });

  describe(".toCSSString method", () => {
    it("should return null when no value set", () => {
      // Since all other values default to null, it should return a Padding with all values to null.
      const margin = Margin.only({ top: null });

      expect(margin.toCSSString()).toBe(null);
    });

    it("should return correct value", () => {
      expect(Margin.only({ top: 12 }).toCSSString()).toEqual("margin-top: 12px;");
      expect(Margin.only({ right: 12 }).toCSSString()).toEqual("margin-right: 12px;");
      expect(Margin.only({ bottom: 12 }).toCSSString()).toEqual("margin-bottom: 12px;");
      expect(Margin.only({ left: 12 }).toCSSString()).toEqual("margin-left: 12px;");
      expect(Margin.only({ top: 12, bottom: 32 }).toCSSString()).toEqual(`margin-top: 12px;
margin-bottom: 32px;`);
      expect(Margin.only({ left: 12, right: 32 }).toCSSString()).toEqual(`margin-left: 12px;
margin-right: 32px;`);
      expect(Margin.all(32).toCSSString()).toEqual(`margin-left: 32px;
margin-right: 32px;
margin-top: 32px;
margin-bottom: 32px;`);
    });
  });

  describe(".toStyle method", () => {
    it("should return correct value when 0", () => {
      const margin = Margin.all(0);

      expect(margin.toStyle()).toStrictEqual({
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
      });
    });

    it("should return correct value when empty vertically", () => {
      const margin = Margin.symmetric({ horizontal: 12 });

      expect(margin.toStyle()).toStrictEqual({
        marginLeft: 12,
        marginTop: undefined,
        marginRight: 12,
        marginBottom: undefined,
      });
    });

    it("should return correct value when empty horizontally", () => {
      const margin = Margin.symmetric({ vertical: 12 });

      expect(margin.toStyle()).toStrictEqual({
        marginLeft: undefined,
        marginTop: 12,
        marginRight: undefined,
        marginBottom: 12,
      });
    });
  });

  describe(".copyWith method", () => {
    it("should do nothing if params are empty", () => {
      const { top, right, bottom, left } = Margin.all(32).copyWith({});

      expect(top).toEqual(32);
      expect(right).toEqual(32);
      expect(bottom).toEqual(32);
      expect(left).toEqual(32);
    });

    it("should override correctly", () => {
      const { top, right, bottom, left } = Margin.all(32).copyWith({ top: 0 });

      expect(top).toEqual(0);
      expect(right).toEqual(32);
      expect(bottom).toEqual(32);
      expect(left).toEqual(32);
    });
  });

  describe(".zero method", () => {
    it("should override correctly", () => {
      const { top, right, bottom, left } = Margin.zero();

      expect(top).toEqual(0);
      expect(right).toEqual(0);
      expect(bottom).toEqual(0);
      expect(left).toEqual(0);
    });
  });
});
