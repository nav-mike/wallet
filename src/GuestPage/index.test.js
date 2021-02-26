import { render, screen } from "@testing-library/react";
import GuestPage from "./index";

const firebase = jest.genMockFromModule('firebase/app');

test("renders the guest page", () => {
  render(<GuestPage firebase={firebase} />);
  const linkElement = screen.getByText(/Sign In with Google/i);
  expect(linkElement).toBeInTheDocument();
});
