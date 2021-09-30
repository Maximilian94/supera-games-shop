import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterRequest from '../components/FilterRequest';

test('Test if the header has the correct elements', () => {
  render(<FilterRequest />);
  const inputMin = screen.getByPlaceholderText('min');
  const inputMax = screen.getByPlaceholderText('max');

  expect(inputMin).toBeInTheDocument();
  expect(inputMax).toBeInTheDocument();
});
