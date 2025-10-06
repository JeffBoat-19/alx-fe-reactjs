import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded w-full h-64 object-cover mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4 text-gray-700">{recipe.summary}</p>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
        <h2 className="font-semibold mt-4 mb-2">Instructions</h2>
        <p className="text-gray-700">
          Step 1: Do something. Step 2: Finish the dish.
        </p>
      </div>
    </div>
  );
}

export default RecipeDetail;
