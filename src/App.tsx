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

  useEffect(() => {
    if (searchResult) {
      const recipes = JSON.stringify(searchResult);
      localStorage.setItem('recipes', recipes);
    }
  }, [searchResult]);

  useEffect(() => {
    const json = localStorage.getItem('recipes');
    if (json) {
      const recipes = JSON.parse(json!);
      setSearchResult(recipes);
    }
  }, []);

  const getData = (input: string) => {
    setIngredient(input);
    getRecipe(input, meal, diet).then((response) => {
      setSearchResult(response);
    });
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
