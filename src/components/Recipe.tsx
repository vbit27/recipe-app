import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './Recipe.module.css';
import Button from '../shared/Button';

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

  window.scrollTo(0, 0);

  if (activeRecipe) {
    return (
      <div className={classes.container}>
        <div className={classes.heroSection}>
          <div className={classes.titleSection}>
            <Link to={'/'}>
              <Button buttonStyle={'btn--main'}>Back to recipes</Button>
            </Link>
            <div className={classes.titleContainer}>
              <div className={classes.subtittleContainer}>
                <p>
                  <strong>{activeRecipe.recipe.ingredientLines.length}</strong>
                  INGREDIENTS
                </p>
                {activeRecipe.recipe.totalTime !== 0 ? (
                  <p>
                    <strong>{activeRecipe.recipe.totalTime}</strong> MINUTES
                  </p>
                ) : null}
                <p>
                  <strong>{~~activeRecipe.recipe.calories}</strong>CALORIES
                </p>
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
        <div className={classes.detailSection}>
          <div className={classes.ingredientContainer}>
            <strong>
              <h5>Ingredients:</h5>
            </strong>
            {activeRecipe.recipe.ingredientLines.map((ingredient: string) => (
              <p>{ingredient}</p>
            ))}
          </div>
          <div className={classes.instructionContainer}>
            <strong>
              <h5>Preperation</h5>
            </strong>
            <p>
              {`This recipe is provided by ${activeRecipe.recipe.source}. 
              You can view the detailed preparation instructions by clicking the following link.`}
            </p>
            <a rel="noreferrer" href={activeRecipe.recipe.url} target="_blank">
              <Button buttonStyle={'btn--main'}>Instructions</Button>
            </a>
          </div>
        </div>
      </div>
    );
  } else return <p>Ups something went wrong</p>;
};

export default Recipe;
