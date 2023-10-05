import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import {
  AlphabetButtons,
  TitlePage,
  MultiActionAreaCard,
} from "../components/index";
import { doGet } from "../api/index";
import { IRecipe } from "../Interfaces/IRecipe";

export const MenuByLetter: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);

  const fetchRecipesByLetter = async () => {
    if (selectedLetter) {
      try {
        const response = await doGet(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter}`
        );

        if (!response.meals || response.meals.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
          setRecipes(response.meals);
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
    <Grid
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      container
      spacing={2}
    >
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
              description={recipe.strInstructions}
              image={recipe.strMealThumb}
              urlYoutube={recipe.strYoutube}
              categoria={recipe.strCategory}
              area={recipe.strArea}
              tag={recipe.strTags}
              ingredients={recipe}
              medidas={recipe}
            />
          ))
        )}
      </Grid>
    </Grid>
  );
};
