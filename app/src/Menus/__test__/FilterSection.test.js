import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import FilterSection from "../FilterSection";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("should render buttons to filter through", async () => {
  render(<FilterSection />);
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements).toBeTruthy();
});

it("should have the correct number of filter buttons", async () => {
  render(<FilterSection />);
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements.length).toBe(5);
});

it("should have the correct values for filter buttons", async () => {
  render(<FilterSection />);
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveTextContent(/Popular/);
  expect(buttonElements[1]).toHaveTextContent(/Vegetarian/);
  expect(buttonElements[2]).toHaveTextContent(/Gluten-Free/);
  expect(buttonElements[3]).toHaveTextContent(/Peanut-Free/);
  expect(buttonElements[4]).toHaveTextContent(/Dairy-Free/);
});
