import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../api/data';
import { getRecipe } from '../api/edamamAPI';

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

  useEffect(() => {
    console.log(activeRecipe);
  }, [activeRecipe]);

  if (activeRecipe) {
    return (
      <div>
        <h1>{activeRecipe.recipe.label}</h1>
      </div>
    );
  } else return <p>Ups something went wrong</p>;
};

export default Recipe;
