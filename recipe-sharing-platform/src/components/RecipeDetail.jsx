import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // make sure data.json is in src/

function RecipeDetail() {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // simulate fetching recipe from local data.json
    const found = data.find((item) => item.id.toString() === id);
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found.</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>

      {/* image requirement */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded mb-4"
      />

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Ingredients</h3>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Instructions</h3>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
