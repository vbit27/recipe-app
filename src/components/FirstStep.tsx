import classes from './FirstStep.module.css';
import React, { useEffect, useState } from 'react';
import Button from '../shared/Button';

const FirstStep: React.FC<FirstStepProps> = ({
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
        <h4>Step 1</h4>
        <h1>Choose your main ingridient</h1>
      </div>
      <div>
        {!ingredient ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="eg. eggplant"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button className={classes.inputBtn} onClick={addIngridient}>
              +
            </button>
          </form>
        ) : (
          <div>
            <h6>Your main ingredient is:</h6>
            <div
              className={classes.ingredientContainer}
              onClick={() => setIngredient(null)}
            >
              <p>{ingredient}</p>
              <p>+</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <Button buttonStyle={'btn--outline'} onClick={nextStep}>
          {'Next >'}
        </Button>
      </div>
    </div>
  );
};

interface FirstStepProps {
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

export default FirstStep;
