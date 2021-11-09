import React, { useState } from 'react';
import { getRecipe } from './api/RecipeAPI';
import './App.css';
import FilterSearch from './components/FilterSearch';
import SearchSection from './components/SearchSection';
import Header from './components/Header';

function App() {
  const [ingredient, setIngredient] = useState<null | string>(null);
  const [diet, setDiet] = useState<string[]>([]);
  const [meal, setMeal] = useState<string[]>([]);
  const [step, setStep] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div className="App">
      <Header />

      {!step.third && (
        <SearchSection
          setIngredient={setIngredient}
          ingredient={ingredient}
          setDiet={setDiet}
          diet={diet}
          setMeal={setMeal}
          meal={meal}
          setStep={setStep}
          step={step}
        />
      )}

      <FilterSearch
        setIngredient={setIngredient}
        setDiet={setDiet}
        diet={diet}
        setMeal={setMeal}
        meal={meal}
      />
    </div>
  );
}

export default App;
