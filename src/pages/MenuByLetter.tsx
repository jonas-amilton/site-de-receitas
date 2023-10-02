import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import {
  AlphabetButtons,
  TitlePage,
  MultiActionAreaCard,
} from "../components/index";
import { limitDescription } from "../utils/limitDescription";
import axios from "axios";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
}

export const MenuByLetter: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);

  const fetchRecipesByLetter = async () => {
    if (selectedLetter) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter}`
        );

        if (!response.data.meals || response.data.meals.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
          setRecipes(response.data.meals);
        }
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    }
  };

  useEffect(() => {
    fetchRecipesByLetter();
  }, [selectedLetter]);

  return (
    <Grid container spacing={2}>
      <TitlePage title="Receitas por Letra" />
      <Grid item xs={12}>
        <AlphabetButtons onSelectLetter={setSelectedLetter} />
      </Grid>
      <Grid item xs={12} style={{ display: "contents" }}>
        {noResults ? (
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            m={4}
          >
            <Typography variant="body1">Receitas não encontradas</Typography>
          </Grid>
        ) : (
          recipes.map((recipe) => (
            <MultiActionAreaCard
              key={recipe.idMeal}
              title={recipe.strMeal}
              description={limitDescription(recipe.strInstructions, 20)} // Limita para 20 palavras
              image={recipe.strMealThumb}
              urlYoutube={recipe.strYoutube}
            />
          ))
        )}
      </Grid>
    </Grid>
  );
};
