import React, { useState } from 'react';
import { getRecipe } from './api/RecipeAPI';
import './App.css';
import FirstStep from './components/FirstStep';
import Header from './components/Header';

function App() {
  const [ingredient, setIngredient] = useState<null | string>(null);
  const [steps, setSteps] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div className="App">
      <Header />
      {!steps.first && (
        <FirstStep
          setIngredient={setIngredient}
          ingredient={ingredient}
          setSteps={setSteps}
        />
      )}
    </div>
  );
}

export default App;
