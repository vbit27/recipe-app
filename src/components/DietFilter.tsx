import classes from './DietFilter.module.css';
import React, { useState } from 'react';
import IconBtn from '../shared/IconBtn';

const DietFilter: React.FC<DietFilterProps> = ({
  setDiet,
  diet,
  filterStyle,
}) => {
  const toggleDiet = (param: diet) => {
    if (!diet.includes(param)) {
      setDiet((prevState) => [...prevState, param]);
    } else {
      const newDietArr = diet.filter((value) => value !== param);
      setDiet(newDietArr);
    }
  };

  return (
    <div className={classes.container}>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('vegan')}
        active={diet.includes('vegan')}
        filterStyle={filterStyle}
      >
        Vegan
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('vegetarian')}
        active={diet.includes('vegetarian')}
        filterStyle={filterStyle}
      >
        Vegetarian
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('gluten')}
        active={diet.includes('gluten')}
        filterStyle={filterStyle}
      >
        Gluten-Free
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('ketogenic')}
        active={diet.includes('ketogenic')}
        filterStyle={filterStyle}
      >
        Ketogenic
      </IconBtn>
    </div>
  );
};

interface DietFilterProps {
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  diet: string[];
  filterStyle?: boolean;
}

type diet = 'vegan' | 'vegetarian' | 'gluten' | 'ketogenic';

export default DietFilter;
