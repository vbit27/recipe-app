import axios from 'axios';

export const getRecipe = async (
  ingredient: string,
  meal?: string[],
  diet?: string[]
) => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${
    process.env.REACT_APP_API_ID
  }&app_key=${process.env.REACT_APP_API_KEY}${addDietType(diet)}${addMealType(
    meal
  )}
  &random=true&field=uri&field=label&field=image&field=source&field=url&field=healthLabels
  &field=ingredientLines&field=calories&field=totalTime&field=cuisineType&field=mealType`;

  try {
    const data = await axios.get(url);
    console.log(data.data);
    console.log(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const addMealType = (meals: string[] | undefined) => {
  if (meals) {
    return meals.map((meal: string) => `&mealType=${meal}`).join('');
  }
};

const addDietType = (diet: string[] | undefined) => {
  if (diet) {
    return diet.map((diet: string) => `&health=${diet}`).join('');
  }
};
