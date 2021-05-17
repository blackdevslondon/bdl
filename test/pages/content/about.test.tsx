import { render } from "@testing-library/react";
import About from "../../../pages/content/about";

describe("About Page", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<About />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
