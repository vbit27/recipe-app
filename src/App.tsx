import React from 'react';
import { getRecipe } from './api/RecipeAPI';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={getRecipe}>get it</button>
    </div>
  );
}

export default App;
