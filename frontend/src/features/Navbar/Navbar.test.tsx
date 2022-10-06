import React from 'react';
import { getByDisplayValue, getByLabelText, getByTitle, render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('shows Navbar correctly', () => {
    const {getByText} = render(<Navbar />);
    expect(getByText("Home")).toBeInTheDocument();
});

test('shows Navbar correctly', () => {
    const {getByText} = render(<Navbar />);
    expect(getByText("About")).toBeInTheDocument();
});

test('shows Navbar correctly', () => {
    const {getByText} = render(<Navbar />);
    expect(getByText("Contact")).toBeInTheDocument();
});

 