import React, { useState } from 'react';
import { getRecipe } from './api/RecipeAPI';
import './App.css';
import FirstStep from './components/FirstStep';
import Header from './components/Header';

function App() {
  const [ingredient, setIngredient] = useState<null | string>(null);
  const [diet, setDiet] = useState<string[]>([]);
  const [meal, setMeal] = useState<string[]>([]);

  return (
    <div className="App">
      <Header />
      <FirstStep
        setIngredient={setIngredient}
        ingredient={ingredient}
        setDiet={setDiet}
        diet={diet}
        setMeal={setMeal}
        meal={meal}
      />
    </div>
  );
}

export default App;
