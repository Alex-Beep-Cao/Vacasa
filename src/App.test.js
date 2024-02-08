import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders vacasa hoeme page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Vacasa Home page, It's empty/i);
  expect(linkElement).toBeInTheDocument();
});
