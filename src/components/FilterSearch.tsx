import classes from './FilterSearch.module.css';
import React, { useState } from 'react';
import Input from '../shared/Input';
import DietFilter from './DietFilter';
import MealFilter from './MealFilter';

const FilterSearch: React.FC<FilterSearchProps> = ({
  setIngredient,
  setDiet,
  diet,
  setMeal,
  meal,
}) => {
  const [input, setInput] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const addIngredient = () => {
    if (input) {
      setIngredient(input);
      setInput('');
      console.log(diet);
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInput(event.target.value)
          }
          input={input}
          onClick={addIngredient}
        />
        <button onClick={() => setShowFilter(!showFilter)}>Filter</button>
      </div>
      {showFilter && (
        <div>
          <DietFilter setDiet={setDiet} diet={diet} filterStyle={true} />
          <MealFilter setMeal={setMeal} meal={meal} filterStyle={true} />
        </div>
      )}
    </div>
  );
};

interface FilterSearchProps {
  setIngredient: React.Dispatch<React.SetStateAction<string | null>>;
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  diet: string[];
  setMeal: React.Dispatch<React.SetStateAction<string[]>>;
  meal: string[];
}

type diet = 'vegan' | 'vegetarian' | 'gluten' | 'ketogenic';
export default FilterSearch;
