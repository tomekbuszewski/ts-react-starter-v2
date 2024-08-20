import { render } from "@testing-library/react";

import Loading from "./Loading";

describe("UI / atom / Loading", () => {
  it("should render properly", () => {
    const { getByText } = render(<Loading />);

    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
