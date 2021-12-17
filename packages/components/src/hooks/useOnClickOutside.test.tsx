import { fireEvent, render, screen } from "@testing-library/react";
import { FC, useRef } from "react";

import useOnClickOutside from "./useOnClickOutside";

/** Defines Wrapper props */
type WrapperProps = {
  /** The handler to call when we click outside */
  handler: (event: MouseEvent | TouchEvent) => unknown;
};

/**
 * A simple wrapper to test the hook.
 *
 * @param {WrapperProps} props The props
 * @example
 * <Wrapper handler={() => {}} />
 * @returns {JSX.Element} The wrapper element
 */
const Wrapper: FC<WrapperProps> = ({ handler }) => {
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
