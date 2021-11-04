import classes from './FirstStep.module.css';
import React, { useState } from 'react';
import Button from '../shared/Button';

const SecondStep: React.FC<SecondStepProps> = ({
  setIngredient,
  ingredient,
  setSteps,
}) => {
  const [input, setInput] = useState('');

  const addIngridient = () => {
    if (input) {
      setIngredient(input);
      setInput('');
    }
  };

  const nextStep = () => {
    if (ingredient) {
      setSteps((prevState) => ({ ...prevState, first: true }));
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <h4>Step 2</h4>
        <h1>Choose your Diet</h1>
      </div>
      <div></div>
      <div>
        <Button buttonStyle={'btn--outline'} onClick={nextStep}>
          {'Next >'}
        </Button>
      </div>
    </div>
  );
};

interface SecondStepProps {
  setIngredient: React.Dispatch<React.SetStateAction<string | null>>;
  ingredient: string | null;
  setSteps: React.Dispatch<
    React.SetStateAction<{
      first: boolean;
      second: boolean;
      third: boolean;
    }>
  >;
}

export default SecondStep;
