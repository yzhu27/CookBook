/*

Copyright (C) 2022 SE CookBook - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: help.cookbook@gmail.com

*/

import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import RecipeInformation from './RecipeInformation';

test('shows recipe information correctly', () => {
    const {getByTestId} = render(<RecipeInformation />);
    expect(getByTestId("RecipeInfo-comp-43")).toBeInTheDocument();
});

test('formats bold text correctly', () => {
    const { container } = render(<RecipeInformation />);
    const boldText = container.querySelector('strong');
    expect(boldText).toBeInTheDocument();
    expect(boldText).toHaveTextContent('Bold Text');
});

test('formats list items correctly', () => {
    const { container } = render(<RecipeInformation />);
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent('List Item 1');
    expect(listItems[1]).toHaveTextContent('List Item 2');
});

test('formats regular text correctly', () => {
    const { container } = render(<RecipeInformation />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBe(2); // One for bold text, one for regular text
    expect(paragraphs[1]).toHaveTextContent('Regular text.');
});