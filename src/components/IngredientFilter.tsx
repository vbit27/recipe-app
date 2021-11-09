import classes from './IngredientFilter.module.css';
import React, { useState } from 'react';
import Input from '../shared/Input';

const IngredientFilter: React.FC<IngredientFilterProps> = ({
  ingredient,
  setIngredient,
}) => {
  const [input, setInput] = useState('');

  const addIngredient = () => {
    if (input) {
      setIngredient(input);
      setInput('');
    }
  };

  return (
    <>
      {!ingredient ? (
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInput(event.target.value)
          }
          input={input}
          onClick={addIngredient}
        />
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

interface IngredientFilterProps {
  ingredient: string | null;
  setIngredient: React.Dispatch<React.SetStateAction<string | null>>;
}

export default IngredientFilter;
