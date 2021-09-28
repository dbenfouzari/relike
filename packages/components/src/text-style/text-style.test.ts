import { Colors } from "@hastics/utils";

import FontWeight from "../font-weight";
import TextOverflow from "../text-overflow";
import TextStyle from "./text-style";

describe("TextStyle", () => {
  it(".toString should return correct string with empty", () => {
    expect(new TextStyle({}).toString()).toEqual(`TextStyle({
  backgroundColor: undefined,
  color: undefined,
  fontFamily: ,
  fontFamilyFallback: undefined,
  fontWeight: undefined,
  height: undefined,
  letterSpacing: undefined,
  overflow: undefined,
  wordSpacing: undefined
})`);
  });

  it(".toString should return correct string when values are entered", () => {
    expect(
      new TextStyle({
        backgroundColor: Colors.blueGrey[200],
        color: Colors.white,
        fontFamily: "Roboto",
        fontWeight: FontWeight.medium,
        overflow: TextOverflow.ellipsis,
      }).toString(),
    ).toEqual(`TextStyle({
  backgroundColor: Color(0xffb0bec5),
  color: Color(0xffffffff),
  fontFamily: Roboto,
  fontFamilyFallback: undefined,
  fontWeight: 500,
  height: undefined,
  letterSpacing: undefined,
  overflow: ${TextOverflow.ellipsis},
  wordSpacing: undefined
})`);
  });

  it("copyWith should apply defaults when already exists", () => {
    expect(
      new TextStyle({
        backgroundColor: Colors.blueGrey[200],
        color: Colors.white,
        fontFamily: "Roboto",
        fontWeight: FontWeight.medium,
        overflow: TextOverflow.ellipsis,
      })
        .copyWith({})
        .toString(),
    ).toEqual(
      new TextStyle({
        backgroundColor: Colors.blueGrey[200],
        color: Colors.white,
        fontFamily: "Roboto",
        fontWeight: FontWeight.medium,
        overflow: TextOverflow.ellipsis,
      }).toString(),
    );
  });

  it("copyWith should override defaults when necessary", () => {
    expect(
      new TextStyle({
        backgroundColor: Colors.blueGrey[200],
        color: Colors.white,
        fontFamily: "Roboto",
        fontWeight: FontWeight.medium,
        overflow: TextOverflow.ellipsis,
      })
        .copyWith({
          color: Colors.pink[200],
        })
        .toString(),
    ).toEqual(
      new TextStyle({
        backgroundColor: Colors.blueGrey[200],
        color: Colors.pink[200],
        fontFamily: "Roboto",
        fontWeight: FontWeight.medium,
        overflow: TextOverflow.ellipsis,
      }).toString(),
    );
  });
});
