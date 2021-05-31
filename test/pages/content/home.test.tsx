import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../../pages/content/home";

describe("Home Page", () => {
  it("should have an About Us section", () => {
    render(<Home />);
    const aboutUsSection = screen.getAllByText(/about us/i)[1];
    expect(aboutUsSection).toBeInTheDocument();
  });
});
