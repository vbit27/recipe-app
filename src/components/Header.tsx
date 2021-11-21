import React from 'react';
import classes from './Header.module.css';

const Header: React.FC<HeaderProps> = ({
  setIngredient,
  setDiet,
  setMeal,
  setSearchResult,
  setStep,
}) => {
  const resetSettings = () => {
    setIngredient(null);
    setDiet([]);
    setMeal([]);
    setSearchResult(null);
    setStep({ first: false, second: false, third: false });
  };

  return (
    <>
      <div className={classes.container} onClick={resetSettings}>
        <strong>
          <h4>RECIPE</h4>
        </strong>
      </div>
    </>
  );
};

interface HeaderProps {
  setIngredient: React.Dispatch<React.SetStateAction<string | null>>;
  setDiet: React.Dispatch<React.SetStateAction<string[]>>;
  setMeal: React.Dispatch<React.SetStateAction<string[]>>;
  setSearchResult: React.Dispatch<any>;
  setStep: React.Dispatch<
    React.SetStateAction<{
      first: boolean;
      second: boolean;
      third: boolean;
    }>
  >;
}

export default Header;
