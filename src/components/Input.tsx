import classes from './Input.module.css';
import React, { useState } from 'react';

const Input: React.FC<InputProps> = ({ ingredient, setIngredient }) => {
  const [input, setInput] = useState('');

  const addIngridient = () => {
    if (input) {
      setIngredient(input);
      setInput('');
    }
  };

  return (
    <>
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
    </>
  );
};

interface InputProps {
  ingredient: string | null;
  setIngredient: React.Dispatch<React.SetStateAction<string | null>>;
}

export default Input;
