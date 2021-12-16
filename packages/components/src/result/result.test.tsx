import { render, screen } from "@testing-library/react";

import Result, { ResultStatus } from "./result";

describe("Result", () => {
  it("should render successfully with success", () => {
    render(<Result title="Hello Testing World!" status={ResultStatus.SUCCESS} />);

    expect(screen.getByTestId("result")).toMatchSnapshot();
  });

  it("should render successfully with info", () => {
    render(<Result title="Your operation has been executed." status={ResultStatus.INFO} />);

    expect(screen.getByTestId("result")).toMatchSnapshot();
  });

  it("should render successfully with warning", () => {
    render(<Result title="There are some problems with your operation." status={ResultStatus.WARNING} />);

    expect(screen.getByTestId("result")).toMatchSnapshot();
  });

  it("should render successfully with error", () => {
    render(
      <Result
        title="Submission Failed"
        subtitle="Please check and modify the following information before resubmitting."
        status={ResultStatus.ERROR}
      />,
    );

    expect(screen.getByTestId("result")).toMatchSnapshot();
  });

  it("should render successfully with unknown status", () => {
    render(
      <Result
        title="Submission Failed"
        subtitle="Please check and modify the following information before resubmitting."
        // @ts-expect-error Because this status does not exist
        status="unknown"
      />,
    );
  });
});
