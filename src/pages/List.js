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

  return (
    <div className="list">
      {recipes.map((recipe) => {
        const { name, recipeId } = recipe;

        return (
          <Link to={`/recipe/${recipeId}`}>
            <h2>{name}</h2>
            <img></img>
          </Link>
        );
      })}
    </div>
  );
}
