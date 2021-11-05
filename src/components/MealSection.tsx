import classes from './MealSection.module.css';
import React, { useState } from 'react';
import IconBtn from '../shared/IconBtn';

const MealSection: React.FC<MealSectionProps> = ({
  setSelectedMeal,
  selectedMeal,
}) => {
  const toggleMeal = (param: D) => {
    setSelectedMeal((prevState) => ({
      ...prevState,
      [param]: !selectedMeal[param],
    }));
  };

  return (
    <div className={classes.container}>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('breakfast')}
        active={selectedMeal.breakfast}
      >
        Breakfast
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('lunch')}
        active={selectedMeal.lunch}
      >
        Lunch
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('dinner')}
        active={selectedMeal.dinner}
      >
        Dinner
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleMeal('snack')}
        active={selectedMeal.snack}
      >
        Snack
      </IconBtn>
    </div>
  );
};

interface MealSectionProps {
  setSelectedMeal: React.Dispatch<
    React.SetStateAction<{
      breakfast: boolean;
      lunch: boolean;
      dinner: boolean;
      snack: boolean;
    }>
  >;
  selectedMeal: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    snack: boolean;
  };
}

type meal = {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  snack: boolean;
};
type D = keyof meal;

export default MealSection;
