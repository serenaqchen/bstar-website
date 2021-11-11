import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Menu from "../Menu";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("should render the right menu title", async () => {
  render(<Menu type="Dinner" />);

  const headingElement = screen.getByText(/dinner/i);
  expect(headingElement).toBeVisible();
});
