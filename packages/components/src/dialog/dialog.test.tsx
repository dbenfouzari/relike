import { render } from "@testing-library/react";

import Dialog from "./dialog";

describe("Dialog", () => {
  it("should render successfully", () => {
    render(<Dialog isOpen />);
  });
});
