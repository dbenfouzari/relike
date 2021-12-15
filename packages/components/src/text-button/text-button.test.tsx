import { fireEvent, render, screen } from "@testing-library/react";

import TextButton from "./text-button";

it("should render successfully", () => {
  render(<TextButton>Press Me</TextButton>);

  expect(screen.getByTestId("text-button")).toMatchSnapshot();
});

it("should handle press", () => {
  const onPress = jest.fn();

  render(<TextButton onPress={onPress}>Press Me</TextButton>);
  fireEvent.click(screen.getByTestId("text-button"));

  expect(onPress).toHaveBeenCalled();
});
