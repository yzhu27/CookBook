/**
 * File name: AppContent.tsx
 * Task - The component defines the routes for the application and decides which component on render on that
 * particular route
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
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
