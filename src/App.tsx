import React, { useEffect, useState } from 'react';
import { getRecipe } from './api/edamamAPI';
import './App.css';
import StepsSection from './components/StepsSection';
import Header from './components/Header';
import Input from './shared/Input';
import Filter from './components/Filter';
import { data } from './api/data';
import RecipeCard from './components/RecipeCard';
import { Link } from 'react-router-dom';

function App() {
  const [ingredient, setIngredient] = useState<null | string>(null);
  const [diet, setDiet] = useState<string[]>([]);
  const [meal, setMeal] = useState<string[]>([]);
  const [step, setStep] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [searchResult, setSearchResult] = useState<any>();

  //after pressing enter inside input field, go to next step
  useEffect(() => {
    if (ingredient) {
      setStep((prevState) => ({ ...prevState, first: true }));
      console.log(ingredient);
    }
  }, [ingredient]);

  //add to local storage
  useEffect(() => {
    if (searchResult) {
      const recipes = JSON.stringify(searchResult);
      const diets = JSON.stringify(diet);
      const meals = JSON.stringify(meal);
      const ingredients = JSON.stringify(ingredient);
      const steps = JSON.stringify(step);
      localStorage.setItem('diets', diets);
      localStorage.setItem('meals', meals);
      localStorage.setItem('ingredients', ingredients);
      localStorage.setItem('steps', steps);
      localStorage.setItem('recipes', recipes);
    }
  }, [searchResult, diet, meal, step, ingredient]);

  useEffect(() => {
    const jsonRecipe = localStorage.getItem('recipes');
    const jsonMeal = localStorage.getItem('meals');
    const jsonDiet = localStorage.getItem('diets');
    const jsonIngredient = localStorage.getItem('ingredients');
    const jsonStep = localStorage.getItem('steps');
    if (jsonRecipe) {
      const recipes = JSON.parse(jsonRecipe!);
      setSearchResult(recipes);
    }
    if (jsonMeal) {
      const meals = JSON.parse(jsonMeal!);
      setMeal(meals);
    }
    if (jsonDiet) {
      const diets = JSON.parse(jsonDiet!);
      setDiet(diets);
    }
    if (jsonIngredient) {
      const ingredients = JSON.parse(jsonIngredient!);
      setIngredient(ingredients);
    }
    if (jsonStep) {
      const steps = JSON.parse(jsonStep!);
      setStep(steps);
    }
  }, []);

  const getData = (input: string) => {
    if (input) {
      setIngredient(input);
      getRecipe(input, meal, diet).then((response) => {
        setSearchResult(response);
      });
    }
  };

  const searchForRecipes = () => {
    getRecipe(ingredient!, meal, diet).then((response) => {
      setSearchResult(response);
    });
  };

  return (
    <div className="App">
      <Header
        setIngredient={setIngredient}
        setStep={setStep}
        setDiet={setDiet}
        setMeal={setMeal}
        setSearchResult={setSearchResult}
      />

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
          search={searchForRecipes}
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
      <div className={'recipes-seciton'}>
        <h2>Recipes with {ingredient}</h2>
        <div className={'recipes-container'}>
          {searchResult &&
            searchResult.map((recipes: any) => (
              <Link
                to={{
                  pathname: `/recipe/${recipes.recipe.label}`,
                }}
              >
                <RecipeCard data={recipes.recipe} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
