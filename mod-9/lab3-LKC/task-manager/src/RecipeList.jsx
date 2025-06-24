import RecipeItem from "./RecipeItem";

function RecipeList({ recipes }) {
  console.log("RECIPE LIST: ", recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <div>
        {recipes &&
          recipes.map((recipe) => (
            <RecipeItem
                recipe={recipe}
                key={recipe.id}
            />
          ))}
      </div>
    </div>
  );
}

export default RecipeList;