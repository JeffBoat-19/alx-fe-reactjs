import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!instructions.trim())
      newErrors.instructions = "Instructions are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", {
        title,
        ingredients,
        instructions,
        steps,
      });

      // clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow md:max-w-2xl">
      {/* ✅ added md:max-w-2xl for larger screens */}
      <h2 className="text-2xl font-bold mb-4 md:text-3xl">Add a New Recipe</h2>
      {/* ✅ added md:text-3xl for heading on medium+ screens */}
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* ✅ md:space-y-6 to increase spacing on medium+ screens */}

        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 md:px-4 md:py-3"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded px-3 py-2 md:px-4 md:py-3"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold mb-1">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border rounded px-3 py-2 md:px-4 md:py-3"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm">{errors.instructions}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-1">Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded px-3 py-2 md:px-4 md:py-3"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 md:px-6 md:py-3"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
