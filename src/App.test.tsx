import React from 'react';
import { renderWithProviders, screen } from './utils/test.utils';
import App from './App';

test('renders learn react link', () => {
  renderWithProviders(<App />);

  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
