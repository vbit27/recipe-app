import React, { useEffect, useState } from 'react';
import { getRecipe } from './api/RecipeAPI';
import './App.css';
import StepsSection from './components/StepsSection';
import Header from './components/Header';
import Input from './shared/Input';
import Filter from './components/Filter';
import axios from 'axios';

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

  useEffect(() => {
    console.log(meal);
  }, [meal]);

  useEffect(() => {
    console.log(diet);
  }, [diet]);

  const getData = (input: string) => {
    setIngredient(input);
    getRecipe(input, meal, diet);
  };

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

      <Input onClick={(input) => getData(input)} />
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
