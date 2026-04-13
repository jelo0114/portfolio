import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders portfolio hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Angelo Cruz U./i);
  expect(headingElement).toBeInTheDocument();
});
