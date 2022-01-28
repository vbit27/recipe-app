import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/recipe/:label" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
