import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Repositories from "../pages/Repositories";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("Repositories Component", () => {
  it("renders and displays loading state", async () => {
    fetch.mockResponseOnce(JSON.stringify({ items: [] }));

    render(<Repositories />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("fetches repositories and displays them", async () => {
    const mockRepositories = [
      {
        id: 1,
        name: "Test Repo 1",
        language: "JavaScript",
        description: "A test repository",
        html_url: "https://github.com/test/repo1",
      },
      {
        id: 2,
        name: "Test Repo 2",
        language: "Python",
        description: "Another test repository",
        html_url: "https://github.com/test/repo2",
      },
    ];

    fetch.mockResponseOnce(JSON.stringify({ items: mockRepositories }));

    render(<Repositories />);

    await waitFor(() => {
      expect(screen.getByText("Test Repo 1")).toBeInTheDocument();
      expect(screen.getByText("Test Repo 2")).toBeInTheDocument();
    });
  });
});
