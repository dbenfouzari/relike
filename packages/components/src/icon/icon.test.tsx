import { render, screen } from "@testing-library/react";

import Icons from "../icons";
import Icon from "./icon";

describe("Components/Icon", () => {
  it("should render successfully", () => {
    render(<Icon icon={Icons.access_time} />);

    expect(screen.getByRole("img")).toMatchSnapshot();
  });

  it("should render successfully with rounded variant", () => {
    render(<Icon icon={Icons.access_time_rounded} />);

    const iconComponent = screen.getByRole("img");

    expect(iconComponent).toMatchSnapshot();
    expect(iconComponent).toHaveClass("material-icons-round");
  });

  it("should render successfully with outlined variant", () => {
    render(<Icon icon={Icons.access_time_outlined} />);

    const iconComponent = screen.getByRole("img");

    expect(iconComponent).toMatchSnapshot();
    expect(iconComponent).toHaveClass("material-icons-outlined");
  });

  it("should render successfully with sharp variant", () => {
    render(<Icon icon={Icons.access_time_sharp} />);

    const iconComponent = screen.getByRole("img");

    expect(iconComponent).toMatchSnapshot();
    expect(iconComponent).toHaveClass("material-icons-sharp");
  });

  it("should render successfully with no variant", () => {
    render(<Icon icon={Icons.access_time} />);

    const iconComponent = screen.getByRole("img");

    expect(iconComponent).toMatchSnapshot();
    expect(iconComponent).toHaveClass("material-icons");
  });
});
