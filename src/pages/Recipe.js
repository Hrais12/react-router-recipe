import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Recipe(props) {
  // Your Edamam API key
  const apiKey = process.env.REACT_APP_API_KEY;
  const appId = process.env.REACT_APP_APP_ID;
  console.log(apiKey);
  console.log(appId);

  // Grabbing the recipe ID from the URL Params
  const params = useParams();
  const recipeId = params.recipeId;

  // Constructing the URL for fetching recipe data
  const url = `https://api.edamam.com/search?q=${recipeId}&app_id=${appId}&app_key=${apiKey}&to=12`;

  // State to hold the recipe data
  const [recipe, setRecipe] = useState(null);

  // Function to fetch recipe data
  const fetchRecipe = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  // useEffect to fetch recipe data when component mounts
  useEffect(
    () => {
      fetchRecipe();
    },
    // eslint-disable-next-line
    []
  );

  // Function to render recipe data when loaded
  const renderRecipe = () => {
    return (
      <div className="recipes">
        {recipe.hits.map((hit, index) => (
          <div key={index} className="result">
            <h1>{hit.recipe.label}</h1>
            <img src={hit.recipe.image} alt={hit.recipe.label}></img>

            <p>Calories: {hit.recipe.calories.toFixed(2)} (kcal) </p>
            <p>Cuisine Type: {hit.recipe.cuisineType[0]}</p>

            <ul>
              Ingredients:
              {hit.recipe.ingredientLines.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <a href={hit.recipe.url}>
              <button>Instruction</button>
            </a>
          </div>
        ))}
      </div>
    );
  };

  // Function to render loading state
  const renderLoading = () => {
    return <h1>Loading...</h1>;
  };

  // Render either the loaded recipe or loading state
  return recipe ? renderRecipe() : renderLoading();
}
