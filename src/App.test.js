/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import Matrix from './Matrix';

test('renders learn react link', () => {
  const { aMatrix } = render(<Matrix data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />);
});
