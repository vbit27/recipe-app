import classes from './RecipeCard.module.css';
import React from 'react';

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={data.image} alt={data.label} />
      </div>
      <div>
        <div className={classes.subTittleContainer}>
          <p> {data.ingredientLines.length} ingredients</p>
          <p>{~~data.calories} cal.</p>
        </div>

        <h4>{data.label}</h4>
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
