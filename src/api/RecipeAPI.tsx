import axios from 'axios';
const url = `https://api.edamam.com/api/recipes/v2?type=public&q=eggplant&app_id=${process.env.REACT_APP_API_ID}
&app_key=${process.env.REACT_APP_API_KEY}&field=totalTime&field=cuisineType&field=mealType&field=dishType`;

export const getRecipe = async () => {
  try {
    let recipes = await axios.get(url);
    console.log(recipes);
  } catch (error) {
    console.log(error);
  }
};
