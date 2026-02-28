import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about me section', () => {
  render(<App />);
  const linkElement = screen.getByText(/About Me/i);
  expect(linkElement).toBeInTheDocument();
});
