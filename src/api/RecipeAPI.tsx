import axios from 'axios';

export const getRecipe = async (
  ingredient: string,
  meal?: string[],
  diet?: string[]
) => {
  const url = createURL(ingredient, meal, diet);

  try {
    const data = await axios.get(url);
    console.log(data.data);
    console.log(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const createURL = (ingredient: string, meal: any, diet: any) => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${
    process.env.REACT_APP_API_ID
  }&app_key=${process.env.REACT_APP_API_KEY}${addDietType(diet)}${addMealType(
    meal
  )}
  &random=true&field=uri&field=label&field=image&field=source&field=url&field=healthLabels
  &field=ingredientLines&field=calories&field=totalTime&field=cuisineType&field=mealType`;

  return url;
};

const addMealType = (meals: any) => {
  return meals.map((meal: any) => `&mealType=${meal}`).join('');
};

const addDietType = (diet: any) => {
  return diet.map((diet: any) => `&health=${diet}`).join('');
};
