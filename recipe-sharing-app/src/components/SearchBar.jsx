import React from "react";
import useRecipeStore from "./recipeStore"; // Adjust the import path as necessary

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={handleChange}
      style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
    />
  );
};
export default SearchBar;
