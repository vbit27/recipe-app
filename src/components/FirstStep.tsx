import classes from './FirstStep.module.css';
import React, { useState } from 'react';
import Button from '../shared/Button';
import Input from './Input';
import DietSection from './DietSection';
import MealSection from './MealSection';

const FirstStep: React.FC<FirstStepProps> = ({
  setIngredient,
  ingredient,
  setDiet,
  diet,
  setMeal,
  meal,
}) => {
  const [step, setStep] = useState({
    first: false,
    second: false,
    third: false,
  });

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

  const startSearch = () => {};

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
          <Input ingredient={ingredient} setIngredient={setIngredient} />
        )}
        {!step.second && step.first && (
          <DietSection setDiet={setDiet} diet={diet} />
        )}
        {step.second && <MealSection setMeal={setMeal} meal={meal} />}
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

interface FirstStepProps {
  setIngredient: React.Dispatch<React.SetStateAction<string | null>>;
  ingredient: string | null;
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  diet: string[];
  setMeal: React.Dispatch<React.SetStateAction<string[]>>;
  meal: string[];
}

export default FirstStep;
