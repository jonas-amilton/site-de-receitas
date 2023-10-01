import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TitlePage from "../components/TitlePage";
import axios from "axios";
import MultiActionAreaCard from "../components/Card";

// Função para limitar a descrição para um número específico de palavras
const limitDescription = (description: string, numWords: number) => {
  const words = description.split(" ");
  if (words.length <= numWords) {
    return description;
  }
  const limitWords = words.slice(0, numWords);
  return `${limitWords.join(" ")}...`;
};

export const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

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
        <MultiActionAreaCard
          key={recipe.idMeal}
          title={recipe.strMeal}
          description={limitDescription(recipe.strInstructions, 20)} // Limita para 20 palavras
          image={recipe.strMealThumb}
          urlYoutube={recipe.strYoutube}
        />
      ))}
    </Grid>
  );
};
