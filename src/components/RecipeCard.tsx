import classes from './RecipeCard.module.css';
import React from 'react';

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  return (
    <div key={data.label} className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={data.image} alt={data.label} />
      </div>
      <div>
        <div className={classes.subTittleContainer}>
          <p>
            <strong>{data.ingredientLines.length}</strong> ingredients
          </p>
          <p>
            <strong>{~~data.calories}</strong> cal.
          </p>
        </div>
        <h5>{data.label}</h5>
      </div>
    </div>
  );
};

interface RecipeCardProps {
  data: {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    ingredientLines: string[];
    calories: number;
    totalTime: number;
    cuisineType: string[];
    mealType: string[];
  };
}
export default RecipeCard;
