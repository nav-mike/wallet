import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./GuestPage", () => {
  return function FakeGuestPage(props) {
    return (
      <div>
        <button>Sign In with Google</button>
      </div>
    );
  };
});

test("renders the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In with Google/i);
  expect(linkElement).toBeInTheDocument();
});
