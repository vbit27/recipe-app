import classes from './DietSection.module.css';
import React, { useState } from 'react';
import IconBtn from '../shared/IconBtn';

const DietSection: React.FC<DietSectionProps> = ({
  setSelectedDiet,
  selectedDiet,
  setDiet,
  diet,
}) => {
  const toggleDiete = (param: D) => {
    setSelectedDiet((prevState) => ({
      ...prevState,
      [param]: !selectedDiet[param],
    }));
  };

  const toggleDiet = (param: D) => {
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
  setSelectedDiet: React.Dispatch<
    React.SetStateAction<{
      vegan: boolean;
      vegetarian: boolean;
      gluten: boolean;
      ketogenic: boolean;
    }>
  >;
  selectedDiet: {
    vegan: boolean;
    vegetarian: boolean;
    gluten: boolean;
    ketogenic: boolean;
  };
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  diet: string[];
}

type diet = {
  vegan: boolean;
  vegetarian: boolean;
  gluten: boolean;
  ketogenic: boolean;
};
type D = keyof diet;

export default DietSection;
