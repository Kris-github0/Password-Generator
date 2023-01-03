/**
 * @jest-environment jsdom
 */

import React from "react";
import Display from "./Display";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Display Component", () => {
  test("An undefined password should show an empty string", () => {
    render(<Display password={undefined} />);

    const output = screen.queryByText(/.+/);

    expect(output).toBeFalsy();
  });

  test("A non-empty password should show the password", () => {
    render(<Display password="test" />);

    const output = screen.getByText(/test/i);

    expect(output).toHaveTextContent(/test/i);
  });

  test("An empty password should show the error component", () => {
    render(<Display password="" />);

    const output = screen.getByText(/Password can't be generated/i);

    expect(output).toHaveTextContent(/Password can't be generated/i);
  });
});
