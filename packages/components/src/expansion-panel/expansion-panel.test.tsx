import { fireEvent, render, screen } from "@testing-library/react";

import ExpansionPanel from "./expansion-panel";

describe("ExpansionPanel", () => {
  it("should render successfully", () => {
    render(
      <ExpansionPanel
        headerBuilder={() => (
          <div>
            <span>Hello Panel</span>
          </div>
        )}
      >
        Ah que coucou
      </ExpansionPanel>,
    );
  });

  it("should open", () => {
    render(
      <ExpansionPanel
        headerBuilder={() => (
          <div>
            <span>Hello Panel</span>
          </div>
        )}
      >
        Ah que coucou
      </ExpansionPanel>,
    );

    const toggle = screen.getByTestId("toggle");

    fireEvent.click(toggle);
  });
});
