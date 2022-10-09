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
