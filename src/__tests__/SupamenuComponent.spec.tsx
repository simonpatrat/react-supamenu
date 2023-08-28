import * as React from "react";
import { render } from "@testing-library/react";
import { jest } from "@jest/globals";

import { ReactSupamenu } from "../index";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Test Component", () => {
  const renderComponent = () =>
    render(<ReactSupamenu id="menu-1" testId="test-component" />);

  it("should render an element with the given id prop", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toBeInTheDocument();
    expect(testComponent?.id).toBe("menu-1");
  });
});
