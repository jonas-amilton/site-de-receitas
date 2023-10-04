import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { TitlePage, MultiActionAreaCard } from "../components/index";
import { doGet } from "../api/index";
import { IRecipe } from "../Interfaces/IRecipe";
import { generateRandomIds } from "../utils";

export const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const getRandomRecipes = async () => {
    try {
      // IDs das receitas
      const recipeIds = generateRandomIds();

      const recipesData = await Promise.all(
        recipeIds.map(async (id) => {
          const response = await doGet(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          return response.meals ? response.meals[0] : null;
        })
      );
      setRecipes(recipesData.filter((recipe) => recipe !== null));
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return (
    <Grid container spacing={2}>
      <TitlePage title="Receitas Aleatórias" />
      {recipes.map((recipe) => (
        <MultiActionAreaCard
          key={recipe.idMeal}
          title={recipe.strMeal}
          description={recipe.strInstructions}
          image={recipe.strMealThumb}
          urlYoutube={recipe.strYoutube}
          categoria={recipe.strCategory}
          area={recipe.strArea}
          tag={recipe.strTags}
          ingredients={recipe}
          medidas={recipe}
        />
      ))}
    </Grid>
  );
};
