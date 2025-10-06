import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({}); // ✅ required

  // ✅ validation function
  const validate = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!instructions.trim())
      newErrors.instructions = "Instructions are required";

    setErrors(newErrors); // ✅ update errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // ✅ valid form, handle submission
      console.log("Form submitted:", { title, ingredients, instructions });

      // Clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
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
            className="w-full border rounded px-3 py-2"
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
            className="w-full border rounded px-3 py-2"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
