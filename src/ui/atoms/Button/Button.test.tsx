import { render } from "@testing-library/react";

import Button from "./Button";

describe("UI / Atoms / Button", () => {
  it("should render properly", () => {
    const TEXT = "Hello";
    const { getByText } = render(<Button>{TEXT}</Button>);

    expect(getByText(TEXT)).toBeInTheDocument();
  });

  it("should be clickable", () => {
    const clickFn = vitest.fn();
    const { getByText } = render(
      <Button variant="primary" onClick={clickFn}>
        Hello
      </Button>,
    );

    getByText("Hello").click();
    expect(clickFn).toHaveBeenCalledTimes(1);
  });

  it("should render with a variant", () => {
    const { getByText } = render(<Button variant="primary">Hello</Button>);

    expect(getByText("Hello")).toHaveAttribute("data-variant", "primary");
  });

  it("should accept normal html attributes", () => {
    const { getByText } = render(
      <Button id="button" className="button" disabled>
        Hello
      </Button>,
    );

    expect(getByText("Hello")).toHaveAttribute("id", "button");
    expect(getByText("Hello")).toHaveAttribute("disabled");
    expect(getByText("Hello")).toHaveClass("button");
  });
});
