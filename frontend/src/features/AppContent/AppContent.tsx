import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import RecipeInformation from './RecipeInformation/RecipeInformation';
import RecipeList from './RecipeList/RecipeList';

const AppContent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/recipe-list' element={<RecipeList />} />
      <Route path='/recipe-details/:id' element={<RecipeInformation />} />
    </Routes>
  );
};

export default AppContent;
