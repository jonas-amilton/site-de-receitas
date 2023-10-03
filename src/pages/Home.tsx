import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { TitlePage, MultiActionAreaCard } from "../components/index";
import axios from "axios";
import { IRecipe } from "../Interfaces/IRecipe";


export const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  
  const getRandomRecipes = async () => {
    try {
      // IDs das receitas
      const recipeIds = [
        52938, 52892, 52833, 52796, 52772, 52765, 52940, 52939, 52942, 52944,
        52945, 52947,
      ];
      const recipesData = await Promise.all(
        recipeIds.map(async (id) => {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          return response.data.meals ? response.data.meals[0] : null;
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
        <>
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
        </>
      ))}
    </Grid>
  );
};
