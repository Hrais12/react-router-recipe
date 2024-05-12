import { Link } from "react-router-dom";

export default function List(props) {
  const recipes = [
    // { name: "Our favorite recipes" },
    { name: "Bread", recipeId: "Bread" },
    { name: "Chicken", recipeId: "Chicken" },
    { name: "Pizza", recipeId: "Pizza" },
    { name: "Breakfast", recipeId: "Breakfast" },
    { name: "Dessert", recipeId: "Dessert" },
    { name: "Smoothie", recipeId: "Smoothie" },
    { name: "Appetizers", recipeId: "Appetizers" },
    { name: "Salad", recipeId: "Salad" },
    { name: "International", recipeId: "International" },
  ];

  const meals = [
    { name: "Breakfast", recipeId: "Breakfast" },
    { name: "Lunch", recipeId: "Lunch" },
    { name: "Dinner", recipeId: "Dinner" },
    { name: "Appetizer", recipeId: "Appetizer" },
    { name: "Drinks", recipeId: "Drinks" },
    { name: "Snacks", recipeId: "Snacks" },
    { name: "Desserts", recipeId: "Desserts" },
  ];
  const fav = [
    { name: "Vegan", recipeId: "Vegan" },
    { name: "Pasta", recipeId: "Pasta" },
    { name: "Soups", recipeId: "Soups" },
    { name: "Most Popular", recipeId: "Most Popular" },
    { name: "Instant Pot", recipeId: "Instant Pot" },
    { name: "Vegetarian", recipeId: "Vegetarian" },
    { name: "Tacos", recipeId: "Tacos" },
  ];

  return (
    <>
      <div className="list">
        <h2>TOP RATED RECIPES</h2>
        <hr></hr>
        <div className="listMap">
          {recipes.map((recipe) => {
            const { name, recipeId } = recipe;

            return (
              <Link to={`/recipe/${recipeId}`}>
                <h2>{name}</h2>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="list">
        <h2>POPULAR CATEGORIES</h2>
        <hr></hr>
        <div className="listMap">
          {fav.map((recipe) => {
            const { name, recipeId } = recipe;

            return (
              <ul>
                <Link to={`/recipe/${recipeId}`}>
                  <h2>{name}</h2>
                </Link>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="list">
        <h2>RECIPES BY MEAL TYPE</h2>
        <hr></hr>
        <div className="listMap">
          {meals.map((recipe) => {
            const { name, recipeId } = recipe;

            return (
              <ul>
                <Link to={`/recipe/${recipeId}`}>
                  <h2>{name}</h2>
                </Link>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
