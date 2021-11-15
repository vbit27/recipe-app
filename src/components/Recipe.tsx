import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../api/data';

const Recipe: React.FC = () => {
  const [recipes, setRecipes] = useState() as any;

  const { id } = useParams() as {
    id: string;
  };

  useEffect(() => {
    setRecipes(
      data.hits.find((p) => Math.floor(p.recipe.calories).toString() === id)
    );
  }, []);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <div>
      <h1>I am</h1>
    </div>
  );
};

export default Recipe;
