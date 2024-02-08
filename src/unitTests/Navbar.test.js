import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it("renders without crashing", () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Repositories/i)).toBeInTheDocument();
    expect(screen.getByText(/Setting/i)).toBeInTheDocument();
  });
});
