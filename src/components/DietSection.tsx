import classes from './DietSection.module.css';
import React, { useState } from 'react';
import IconBtn from '../shared/IconBtn';

const DietSection: React.FC<DietSectionProps> = ({
  setSelectedDiet,
  selectedDiet,
}) => {
  const toggleDiet = (param: D) => {
    setSelectedDiet((prevState) => ({
      ...prevState,
      [param]: !selectedDiet[param],
    }));
  };

  return (
    <div className={classes.container}>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('vegan')}
        active={selectedDiet.vegan}
      >
        Vegan
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('vegetarian')}
        active={selectedDiet.vegetarian}
      >
        Vegetarian
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('gluten')}
        active={selectedDiet.gluten}
      >
        Gluten-Free
      </IconBtn>
      <IconBtn
        img={'icons'}
        onClick={() => toggleDiet('ketogenic')}
        active={selectedDiet.ketogenic}
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
}

type diet = {
  vegan: boolean;
  vegetarian: boolean;
  gluten: boolean;
  ketogenic: boolean;
};
type D = keyof diet;

export default DietSection;