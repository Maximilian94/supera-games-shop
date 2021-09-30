import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Test if the header has the correct elements', () => {
  render(<Header />);
  const logo = screen.getByRole('img', { name: 'logo' });
  const searchField = screen.getByPlaceholderText('Buscar');
  const cartIcon = screen.getByRole('img', { name: 'cart' });

  expect(logo).toBeInTheDocument();
  expect(searchField).toBeInTheDocument();
  expect(cartIcon).toBeInTheDocument();
});
