import React, { useEffect, useState } from 'react';
import { getRecipe } from './api/RecipeAPI';
import './App.css';
import StepsSection from './components/StepsSection';
import Header from './components/Header';
import Input from './shared/Input';
import Filter from './components/Filter';

function App() {
  const [ingredient, setIngredient] = useState<null | string>(null);
  const [diet, setDiet] = useState<string[]>([]);
  const [meal, setMeal] = useState<string[]>([]);
  const [step, setStep] = useState({
    first: false,
    second: false,
    third: false,
  });

  //after pressing enter inside input field, go to next step
  useEffect(() => {
    if (ingredient) {
      setStep((prevState) => ({ ...prevState, first: true }));
      console.log(ingredient);
    }
  }, [ingredient]);

  return (
    <div className="App">
      <Header />

      {!step.third ? (
        <StepsSection
          setIngredient={setIngredient}
          ingredient={ingredient}
          setDiet={setDiet}
          diet={diet}
          setMeal={setMeal}
          meal={meal}
          setStep={setStep}
          step={step}
        />
      ) : null}

      <Input onClick={(input) => setIngredient(input)} />
      <Filter
        setDiet={setDiet}
        diet={diet}
        setMeal={setMeal}
        meal={meal}
        filterStyle={true}
        type={'diet'}
      />
      <Filter
        setDiet={setDiet}
        diet={diet}
        setMeal={setMeal}
        meal={meal}
        filterStyle={true}
        type={'meal'}
      />
    </div>
  );
}

export default App;
