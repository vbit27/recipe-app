import classes from './FirstStep.module.css';
import React, { useEffect, useState } from 'react';
import Button from '../shared/Button';
import Input from './Input';
import DietSection from './DietSection';
import MealSection from './MealSection';

const FirstStep: React.FC<FirstStepProps> = ({
  setIngredient,
  ingredient,
  setDiet,
  diet,
}) => {
  const [steps, setSteps] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [selectedDiet, setSelectedDiet] = useState({
    vegan: false,
    vegetarian: false,
    gluten: false,
    ketogenic: false,
  });
  const [selectedMeal, setSelectedMeal] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    snack: false,
  });

  const goStepTwo = () => {
    if (ingredient) {
      setSteps((prevState) => ({ ...prevState, first: true }));
    }
  };

  const goStepThree = () => {
    setSteps((prevState) => ({ ...prevState, second: true }));

    //turn object into an array of arrays and loop through them
    Object.entries(selectedDiet).forEach(([key, value]) => {
      if (value) {
        if (!diet.includes(key)) {
          setDiet((prevState) => [...prevState, key]);
        }
      }
    });
  };

  useEffect(() => {
    console.log(diet);
  }, [diet]);

  const goStepBack = () => {
    if (!steps.second) {
      setSteps((prevState) => ({ ...prevState, first: false }));
    } else if (steps.second) {
      setSteps((prevState) => ({ ...prevState, second: false }));
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <h4>
          {!steps.first
            ? 'Step One'
            : steps.first && !steps.second
            ? 'Step Two'
            : 'Step three'}
        </h4>
        <h1>
          {!steps.first
            ? 'Choose your main ingridient'
            : steps.first && !steps.second
            ? 'Choose your diet'
            : 'Choose your meal'}
        </h1>
      </div>
      <div>
        {!steps.first && (
          <Input ingredient={ingredient} setIngredient={setIngredient} />
        )}
        {!steps.second && steps.first && (
          <DietSection
            setSelectedDiet={setSelectedDiet}
            selectedDiet={selectedDiet}
          />
        )}
        {steps.second && (
          <MealSection
            setSelectedMeal={setSelectedMeal}
            selectedMeal={selectedMeal}
          />
        )}
      </div>
      <div>
        <Button buttonStyle={'btn--outline'} onClick={goStepBack}>
          Back
        </Button>
        <Button
          buttonStyle={'btn--outline'}
          onClick={!steps.first ? goStepTwo : goStepThree}
        >
          {'Next >'}
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
}

export default FirstStep;
