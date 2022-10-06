import React from 'react';
import { getByDisplayValue, getByLabelText, getByTitle, render, screen } from '@testing-library/react';
import Header from './Header';

test('shows header correctly', () => {
  const {getByText} = render(<Header />);
  expect(getByText("C o o k B o o k")).toBeInTheDocument();
});

test('has navbar component ', () => {
    const {getByTestId} = render(<Header />);
    expect(getByTestId("nav-comp-43")).toBeInTheDocument();
});