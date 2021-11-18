import axios from 'axios';

export const getRecipe = async (
  ingredient: string,
  meals?: string[],
  diets?: string[]
) => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${
    process.env.REACT_APP_API_ID
  }&app_key=${process.env.REACT_APP_API_KEY}${addDietType(diets)}${addMealType(
    meals
  )}
  &random=true&imageSize=LARGE&field=uri&field=label&field=image&field=source&field=url&field=healthLabels
  &field=ingredientLines&field=calories&field=totalTime&field=cuisineType&field=mealType&field=source`;

  try {
    const data = await axios.get(url);
    console.log(data.data.hits);
    return data.data.hits;
  } catch (error) {
    console.log(error);
  }
};

const addMealType = (meals: string[] | undefined) => {
  if (meals) {
    return meals.map((meal: string) => `&mealType=${meal}`).join('');
  }
};

const addDietType = (diets: string[] | undefined) => {
  if (diets) {
    return diets.map((diet: string) => `&health=${diet}`).join('');
  }
};
