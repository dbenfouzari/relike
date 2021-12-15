import { fireEvent, render, screen } from "@testing-library/react";
import { FC, useRef } from "react";

import useOnClickOutside from "./useOnClickOutside";

const Wrapper: FC<{ handler: Function }> = ({ handler }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, handler);

  return (
    <div style={{ padding: 128 }} data-testid="wrapper">
      <div ref={ref}>Hello test</div>
    </div>
  );
};

describe("useOnClickOutside", () => {
  it("should work", () => {
    const handler = jest.fn();

    render(<Wrapper handler={handler} />);

    fireEvent.click(screen.getByTestId("wrapper"));

    expect(handler).toHaveBeenCalled();
  });
});
