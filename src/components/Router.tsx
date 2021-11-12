import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';
import RecipeCard from './RecipeCard';

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/"> {App}</Route>
        <Route path="/recipe"> {Recipe}</Route>
      </BrowserRouter>
    </div>
  );
};

export default Router;
