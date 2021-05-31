import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../../pages/content/home";

describe("Home Page", () => {
  it("should have an About Us section", () => {
    render(<Home />);
    const aboutUsSection = screen.getAllByText(/about us/i)[1];
    expect(aboutUsSection).toBeInTheDocument();
  });

  it("should have an Our Mission section", () => {
    render(<Home />);
    const ourMissionSection = screen.getByText(/our mission/i);
    expect(ourMissionSection).toBeInTheDocument();
  });

  it("should have an Our Team section", () => {
    render(<Home />);
    const ourTeamSection = screen.getByText(/meet our team/i);
    expect(ourTeamSection).toBeInTheDocument();
  });

  it("should have an Our Vision section", () => {
    render(<Home />);
    const ourVisionSection = screen.getByText(/our vision/i);
    expect(ourVisionSection).toBeInTheDocument();
  });

  it("should have a Contact Us section", () => {
    render(<Home />);
    const contactUsSection = screen.getAllByText(/contact us/i)[1];
    expect(contactUsSection).toBeInTheDocument();
  });
});
