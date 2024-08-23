import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Recipe.css";

const Recipe = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/recipes/${recipeId}/`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the recipe:", error);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-container">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Steps</h3>
      <p>{recipe.steps}</p>
      <p>Created by: {recipe.created_by.username}</p>
      <p>Created at: {new Date(recipe.created_at).toLocaleString()}</p>
    </div>
  );
};

export default Recipe;
