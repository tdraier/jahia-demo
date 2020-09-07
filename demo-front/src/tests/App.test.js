import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('app content test', () => {
  const { getByText } = render(<App />);
  const headerTitle = getByText(/My elearning blog header/i);
  expect(headerTitle).toBeInTheDocument();
  const imageDescription = getByText(/Continue reading/i);
  expect(imageDescription).toBeInTheDocument();
  const footer = getByText(/footer/i);
  expect(footer).toBeInTheDocument();
});
