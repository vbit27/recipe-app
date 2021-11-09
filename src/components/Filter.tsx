import classes from './Filter.module.css';
import React, { useState } from 'react';
import IconBtn from '../shared/IconBtn';

const Filter: React.FC<FilterProps> = ({
  setDiet,
  diet,
  setMeal,
  meal,
  filterStyle,
  type,
}) => {
  const setFilter = (param: diet | meal) => {
    if (type === 'diet') {
      if (!diet.includes(param)) {
        setDiet((prevState) => [...prevState, param]);
      } else {
        const newDietArr = diet.filter((value) => value !== param);
        setDiet(newDietArr);
      }
    } else {
      if (!meal.includes(param)) {
        setMeal((prevState) => [...prevState, param]);
      } else {
        const newMealArr = meal.filter((value) => value !== param);
        setMeal(newMealArr);
      }
    }
  };

  return (
    <div className={classes.container}>
      <IconBtn
        img={'icons'}
        onClick={
          type === 'diet'
            ? () => setFilter('vegan')
            : () => setFilter('breakfast')
        }
        active={
          type === 'diet' ? diet.includes('vegan') : meal.includes('breakfast')
        }
        filterStyle={filterStyle}
      >
        {type === 'diet' ? 'Vegan' : 'Breakfast'}
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={
          type === 'diet'
            ? () => setFilter('vegetarian')
            : () => setFilter('lunch')
        }
        active={
          type === 'diet' ? diet.includes('vegetarian') : meal.includes('lunch')
        }
        filterStyle={filterStyle}
      >
        {type === 'diet' ? 'Vegetarian' : 'Lunch'}
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={
          type === 'diet'
            ? () => setFilter('gluten')
            : () => setFilter('dinner')
        }
        active={
          type === 'diet' ? diet.includes('gluten') : meal.includes('dinner')
        }
        filterStyle={filterStyle}
      >
        {type === 'diet' ? 'Gluten-Free' : 'Dinner'}
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={
          type === 'diet'
            ? () => setFilter('ketogenic')
            : () => setFilter('snack')
        }
        active={
          type === 'diet' ? diet.includes('ketogenic') : meal.includes('snack')
        }
        filterStyle={filterStyle}
      >
        {type === 'diet' ? 'Ketogenic' : 'Snack'}
      </IconBtn>
    </div>
  );
};

interface FilterProps {
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  diet: string[];
  setMeal: React.Dispatch<React.SetStateAction<string[]>>;
  meal: string[];
  filterStyle?: boolean;
  type: string;
}

type diet = 'vegan' | 'vegetarian' | 'gluten' | 'ketogenic';
type meal = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export default Filter;
