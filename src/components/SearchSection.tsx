import classes from './SearchSection.module.css';
import React, { useState } from 'react';
import Button from '../shared/Button';
import IngredientFilter from './IngredientFilter';
import Filter from './Filter';

const SearchSection: React.FC<SearchSectionProps> = ({
  setIngredient,
  ingredient,
  setDiet,
  diet,
  setMeal,
  meal,
  setStep,
  step,
}) => {
  const goNextStep = () => {
    if (!step.first) {
      if (ingredient) {
        setStep((prevState) => ({ ...prevState, first: true }));
      }
    } else if (!step.second) {
      setStep((prevState) => ({ ...prevState, second: true }));
    }
  };

  const goStepBack = () => {
    if (!step.second) {
      setStep((prevState) => ({ ...prevState, first: false }));
    } else if (step.second) {
      setStep((prevState) => ({ ...prevState, second: false }));
    }
  };

  const startSearch = () => {
    setStep((prevState) => ({ ...prevState, third: true }));
  };

  return (
    <div className={classes.container}>
      <div>
        <h4>
          {!step.first
            ? 'Step One'
            : step.first && !step.second
            ? 'Step Two'
            : 'Step three'}
        </h4>
        <h1>
          {!step.first
            ? 'Choose your main ingridient'
            : step.first && !step.second
            ? 'Choose your diet'
            : 'Choose your meal'}
        </h1>
      </div>
      <div>
        {!step.first && (
          <IngredientFilter
            ingredient={ingredient}
            setIngredient={setIngredient}
          />
        )}
        {!step.second && step.first && (
          <Filter
            setDiet={setDiet}
            diet={diet}
            type={'diet'}
            setMeal={setMeal}
            meal={meal}
          />
        )}
        {step.second && (
          <Filter
            setDiet={setDiet}
            diet={diet}
            type={'meal'}
            setMeal={setMeal}
            meal={meal}
          />
        )}
      </div>
      <div>
        <Button buttonStyle={'btn--outline'} onClick={goStepBack}>
          Back
        </Button>
        <Button
          buttonStyle={'btn--outline'}
          onClick={step.second ? startSearch : goNextStep}
        >
          {step.second ? 'Search >' : 'Next >'}
        </Button>
      </div>
    </div>
  );
};

interface SearchSectionProps {
  setIngredient: React.Dispatch<React.SetStateAction<string | null>>;
  ingredient: string | null;
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  diet: string[];
  setMeal: React.Dispatch<React.SetStateAction<string[]>>;
  meal: string[];
  setStep: React.Dispatch<
    React.SetStateAction<{
      first: boolean;
      second: boolean;
      third: boolean;
    }>
  >;
  step: {
    first: boolean;
    second: boolean;
    third: boolean;
  };
}

export default SearchSection;