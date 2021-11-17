import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Recipe.module.css';

const Recipe: React.FC = () => {
  const [activeRecipe, setActiveRecipe] = useState() as any;

  const { label } = useParams() as {
    label: string;
  };

  useEffect(() => {
    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json!).find(
      (rec: any) => rec.recipe.label === label
    );
    setActiveRecipe(recipes);
  }, []);

  if (activeRecipe) {
    return (
      <div className={classes.container}>
        <div className={classes.heroSection}>
          <div className={classes.titleSection}>
            <h5>-- Go back</h5>
            <div className={classes.titleContainer}>
              <div className={classes.subtittleContainer}>
                <p>ingredient</p>
                <p>time</p>
                <p>servings</p>
              </div>
              <h2>
                <strong>{activeRecipe.recipe.label}</strong>
              </h2>
            </div>
          </div>
          <div className={classes.imageSection}>
            <img
              src={activeRecipe.recipe.image}
              alt={activeRecipe.recipe.label}
            />
          </div>
        </div>
      </div>
    );
  } else return <p>Ups something went wrong</p>;
};

export default Recipe;
