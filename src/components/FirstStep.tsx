import classes from './FirstStep.module.css';
import React, { useState } from 'react';
import Button from '../shared/Button';
import Input from './Input';
import DietSection from './DietSection';

const FirstStep: React.FC<FirstStepProps> = ({ setIngredient, ingredient }) => {
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

  const goStepTwo = () => {
    if (ingredient) {
      setSteps((prevState) => ({ ...prevState, first: true }));
    }
  };

  const goStepThree = () => {
    setSteps((prevState) => ({ ...prevState, second: true }));
  };

  return (
    <div className={classes.container}>
      <div>
        <h4>
          {!steps.first ? 'Step One' : steps.first ? 'Step Two' : 'Step three'}
        </h4>
        <h1>
          {!steps.first
            ? 'Choose your main ingridient'
            : steps.first
            ? 'Choose your diet'
            : 'Choose your meal'}
        </h1>
      </div>
      <div>
        {!steps.first && (
          <Input ingredient={ingredient} setIngredient={setIngredient} />
        )}
        {steps.first && (
          <DietSection
            setSelectedDiet={setSelectedDiet}
            selectedDiet={selectedDiet}
          />
        )}
      </div>
      <div>
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
}

export default FirstStep;
