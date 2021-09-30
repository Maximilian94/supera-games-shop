import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterOrderList from '../components/FilterOrderList';

test('Test if the header has the correct elements', () => {
  render(<FilterOrderList />);
  const priceButton = screen.getByRole('button', { name: 'Preço sort' });
  const scoreButton = screen.getByRole('button', { name: 'Avaliações sort' });

  expect(priceButton).toBeInTheDocument();
  expect(scoreButton).toBeInTheDocument();
});
