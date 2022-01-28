import classes from './StepsSection.module.css';
import React from 'react';
import Button from '../shared/Button';
import Filter from './Filter';
import Input from '../shared/Input';

const StepsSection: React.FC<StepsSectionProps> = ({
  setIngredient,
  ingredient,
  setDiet,
  diet,
  setMeal,
  meal,
  setStep,
  step,
  search,
}) => {
  const addIngredient = (input: string) => {
    if (input) {
      setIngredient(input);
    }
  };

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
    search();
  };

  return (
    <div className={classes.stepsContainer}>
      <div className={classes.container}>
        <div>
          <strong>
            <p>
              {!step.first
                ? 'STEP ONE'
                : step.first && !step.second
                ? 'STEP TWO'
                : 'STEP THREE'}
            </p>
          </strong>
          <h1>
            {!step.first
              ? 'Choose your main ingredient'
              : step.first && !step.second
              ? 'Choose your diet'
              : 'Choose your meal'}
          </h1>
        </div>
        <div>
          {!step.first && <Input onClick={(input) => addIngredient(input)} />}
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
        <div className={classes.buttonContainer}>
          {step.first && (
            <Button buttonStyle={'btn--outline'} onClick={goStepBack}>
              Back
            </Button>
          )}
          <Button
            buttonStyle={'btn--outline'}
            onClick={step.second ? startSearch : goNextStep}
          >
            {step.second ? 'Search >' : 'Next >'}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface StepsSectionProps {
  setIngredient: React.Dispatch<React.SetStateAction<string | null>>;
  ingredient: string | null;
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  diet: string[];
  setMeal: React.Dispatch<React.SetStateAction<string[]>>;
  meal: string[];
  search: () => void;
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

export default StepsSection;
