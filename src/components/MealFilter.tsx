import classes from './MealFilter.module.css';
import React, { useEffect, useState } from 'react';
import IconBtn from '../shared/IconBtn';

const MealFilter: React.FC<MealFilterProps> = ({
  setMeal,
  meal,
  filterStyle,
}) => {
  const toggleMeal = (param: meal) => {
    if (!meal.includes(param)) {
      setMeal((prevState) => [...prevState, param]);
    } else {
      const newMealArr = meal.filter((value) => value !== param);
      setMeal(newMealArr);
    }
  };

  return (
    <div className={classes.container}>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('breakfast')}
        active={meal.includes('breakfast')}
        filterStyle={filterStyle}
      >
        Breakfast
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('lunch')}
        active={meal.includes('lunch')}
        filterStyle={filterStyle}
      >
        Lunch
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('dinner')}
        active={meal.includes('dinner')}
        filterStyle={filterStyle}
      >
        Dinner
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('snack')}
        active={meal.includes('snack')}
        filterStyle={filterStyle}
      >
        Snack
      </IconBtn>
    </div>
  );
};

interface MealFilterProps {
  setMeal: React.Dispatch<React.SetStateAction<string[]>>;
  meal: string[];
  filterStyle?: boolean;
}

type meal = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export default MealFilter;
