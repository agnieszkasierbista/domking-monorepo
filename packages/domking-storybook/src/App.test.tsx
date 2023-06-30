import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders world', () => {
  render(<App />);
  const linkElement = screen.getByText(/world/i);
  expect(linkElement).toBeInTheDocument();
});
