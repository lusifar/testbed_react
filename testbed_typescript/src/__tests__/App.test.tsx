import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../containers/App";

describe("<App />", () => {
  it("render with App class", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass("App");
  });
});
