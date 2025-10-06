function RecipeDetail({ recipe }) {
  if (!recipe) {
    return <p>No recipe selected.</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Ingredients</h3>
        <ul className="list-disc list-inside">
          {recipe.ingredients &&
            recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Instructions</h3>
        <ol className="list-decimal list-inside">
          {recipe.instructions &&
            recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
