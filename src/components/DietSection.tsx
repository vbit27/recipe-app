import classes from './DietSection.module.css';
import React, { useState } from 'react';
import IconBtn from '../shared/IconBtn';

const DietSection: React.FC<DietSectionProps> = ({ setDiet, diet }) => {
  const toggleDiet = (param: D) => {
    setDiet((prevState) => ({ ...prevState, [param]: !diet[param] }));
  };

  return (
    <div className={classes.container}>
      <IconBtn img={'icons'} onClick={() => toggleDiet('vegan')}>
        Vegan
      </IconBtn>
      <IconBtn img={'icons'} onClick={() => toggleDiet('vegetarian')}>
        Vegetarian
      </IconBtn>
      <IconBtn img={'icons'} onClick={() => toggleDiet('gluten')}>
        Gluten-Free
      </IconBtn>
      <IconBtn img={'icons'} onClick={() => toggleDiet('ketogenic')}>
        Ketogenic
      </IconBtn>
    </div>
  );
};

interface DietSectionProps {
  setDiet: React.Dispatch<
    React.SetStateAction<{
      vegan: boolean;
      vegetarian: boolean;
      gluten: boolean;
      ketogenic: boolean;
    }>
  >;
  diet: {
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
