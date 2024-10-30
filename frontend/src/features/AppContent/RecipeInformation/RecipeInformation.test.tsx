/*

Copyright (C) 2022 SE CookBook - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: help.cookbook@gmail.com

/*

Copyright (C) 2022 SE CookBook - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: help.cookbook@gmail.com

*/

import React from 'react';
import { render } from '@testing-library/react';
import RecipeInformation from './RecipeInformation';

test('shows recipe information correctly', () => {
    const { getByTestId } = render(<RecipeInformation />);
    expect(getByTestId("RecipeInfo-comp-43")).toBeInTheDocument();
});

test('renders recipe title', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Recipe Title/i)).toBeInTheDocument();
});

test('renders recipe image', () => {
    const { getByAltText } = render(<RecipeInformation />);
    expect(getByAltText(/Recipe Image/i)).toBeInTheDocument();
});

test('renders recipe ingredients', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Ingredients/i)).toBeInTheDocument();
});

test('renders recipe instructions', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Instructions/i)).toBeInTheDocument();
});

test('renders share button', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Share using WhatsApp/i)).toBeInTheDocument();
});


test('renders recipe rating', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Rating/i)).toBeInTheDocument();
});

test('renders recipe preparation time', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Preparation Time/i)).toBeInTheDocument();
});

test('renders recipe servings', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Servings/i)).toBeInTheDocument();
});

test('renders recipe author', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Author/i)).toBeInTheDocument();
});

test('renders recipe category', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Category/i)).toBeInTheDocument();
});

// Additional tests

test('renders recipe cuisine', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Cuisine/i)).toBeInTheDocument();
});

test('renders recipe difficulty', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Difficulty/i)).toBeInTheDocument();
});

test('renders recipe nutrition facts', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Nutrition Facts/i)).toBeInTheDocument();
});

test('renders recipe cooking method', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Cooking Method/i)).toBeInTheDocument();
});

test('renders recipe tags', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Tags/i)).toBeInTheDocument();
});

test('renders recipe source', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Source/i)).toBeInTheDocument();
});

test('renders recipe date added', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Date Added/i)).toBeInTheDocument();
});

test('renders recipe last updated', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Last Updated/i)).toBeInTheDocument();
});

test('renders recipe comments section', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Comments/i)).toBeInTheDocument();
});

test('renders recipe related recipes', () => {
    const { getByText } = render(<RecipeInformation />);
    expect(getByText(/Related Recipes/i)).toBeInTheDocument();
});