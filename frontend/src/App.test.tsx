import React from 'react';
import { getByTestId, getByDisplayValue, getByLabelText, getByTitle, render, screen } from '@testing-library/react';
import App from './App';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('has header component', () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId("header-comp-43")).toBeInTheDocument();
});

test('has search component', () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId("search-comp-43")).toBeInTheDocument();
});

test('has body component', () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId("body-comp-43")).toBeInTheDocument();
});

test('shows search bar correctly', () => {
  const {getByLabelText} = render(<App />);
  expect(getByLabelText("Type to select Ingredients")).toBeInTheDocument();
});
