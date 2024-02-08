import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "../components/Cards"; // Adjust the import path according to your project structure

describe("Cards Component", () => {
  // Mock data for passing into the Cards component
  const mockData = {
    name: "Test Repository",
    language: "JavaScript",
    description: "This is a test description for the repository.",
    html_url: "https://github.com/test/repository",
  };

  it("renders correctly with given data", () => {
    render(<Cards data={mockData} />);

    // Check if the name is displayed
    expect(screen.getByText(mockData.name)).toBeInTheDocument();

    // Check if the language is displayed
    expect(screen.getByText(mockData.language)).toBeInTheDocument();

    // Check if the description is displayed
    expect(screen.getByText(mockData.description)).toBeInTheDocument();

    // Check if the link is displayed and has the correct href
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", mockData.html_url);
    expect(linkElement).toHaveTextContent(mockData.html_url);
  });
});
