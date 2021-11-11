import classes from './RecipeCard.module.css';
import React from 'react';

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      <img src={data.image} alt={data.label} />
      <h2>{data.label}</h2>
      <p>Number of ingredients: {data.ingredientLines.length}</p>
      <p>{data.cuisineType} recipe</p>
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
