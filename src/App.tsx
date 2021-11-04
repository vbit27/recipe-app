import React, { useState } from 'react';
import { getRecipe } from './api/RecipeAPI';
import './App.css';
import FirstStep from './components/FirstStep';
import Header from './components/Header';

function App() {
  const [ingredient, setIngredient] = useState<null | string>(null);

  return (
    <div className="App">
      <Header />
      <FirstStep setIngredient={setIngredient} ingredient={ingredient} />
    </div>
  );
}

export default App;
