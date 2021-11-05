import classes from './DietSection.module.css';
import React, { useState } from 'react';
import IconBtn from '../shared/IconBtn';

const DietSection: React.FC<DietSectionProps> = ({ setDiet, diet }) => {
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
      >
        Vegan
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('vegetarian')}
        active={diet.includes('vegetarian')}
      >
        Vegetarian
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('gluten')}
        active={diet.includes('gluten')}
      >
        Gluten-Free
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('ketogenic')}
        active={diet.includes('ketogenic')}
      >
        Ketogenic
      </IconBtn>
    </div>
  );
};

interface DietSectionProps {
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  diet: string[];
}

type diet = 'vegan' | 'vegetarian' | 'gluten' | 'ketogenic';

export default DietSection;
