import { act, render, screen } from "@testing-library/react"
import Budget from './index';

const props = {
  value: 600,
  dispatch: () => {},
  collection: 'some_collection',
  doc: 'some_id_doc',
  db: {collection: (_) => {}},
};

test("show budget data", () => {
  render(<Budget {...props} />);
  const value = screen.getByText('600 EUR');
  expect(value).toBeInTheDocument();
});

test("test value change handler", () => {
  render(<Budget {...props} />);
  const input = document.querySelector('[type="text"]');
  act(() => {
    const event = new Event('input', { bubbles: true });
    event.value = 123;
    input.dispatchEvent(event);
  });
});