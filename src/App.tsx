import React, { useEffect, useState } from 'react';
import { getRecipe } from './api/edamamAPI';
import './App.css';
import StepsSection from './components/StepsSection';
import Header from './components/Header';
import Input from './shared/Input';
import Filter from './components/Filter';
import { data } from './api/data';
import RecipeCard from './components/RecipeCard';

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

      <div className={'search-container'}>
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
      <h2>Recipes with {ingredient}</h2>
      <div className={'recipes-container'}>
        {data.hits.map((recipe) => (
          <RecipeCard data={recipe.recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
