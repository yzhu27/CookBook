import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import RecipeInformation from './RecipeInformation';

test('shows recipe information correctly', () => {
    const {getByTestId} = render(<RecipeInformation />);
    expect(getByTestId("RecipeInfo-comp-43")).toBeInTheDocument();
});
