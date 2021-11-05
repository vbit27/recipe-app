import classes from './MealSection.module.css';
import React, { useEffect, useState } from 'react';
import IconBtn from '../shared/IconBtn';

const MealSection: React.FC<MealSectionProps> = ({ setMeal, meal }) => {
  const toggleMeal = (param: meals) => {
    if (!meal.includes(param)) {
      setMeal((prevState) => [...prevState, param]);
    } else {
      const newDietArr = meal.filter((value) => value !== param);
      setMeal(newDietArr);
    }
  };

  useEffect(() => {
    console.log(meal);
  }, [meal]);

  return (
    <div className={classes.container}>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('breakfast')}
        active={meal.includes('breakfast')}
      >
        Breakfast
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('lunch')}
        active={meal.includes('lunch')}
      >
        Lunch
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('dinner')}
        active={meal.includes('dinner')}
      >
        Dinner
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('snack')}
        active={meal.includes('snack')}
      >
        Snack
      </IconBtn>
    </div>
  );
};

interface MealSectionProps {
  setMeal: React.Dispatch<React.SetStateAction<string[]>>;
  meal: string[];
}

type meal = {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  snack: boolean;
};
type meals = keyof meal;

export default MealSection;
