import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { TitlePage, IngredientButton } from "../components/index";
import axios from "axios";

export const MenuIngredients: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        );

        if (response.data && response.data.meals) {
          const ingredientNames = response.data.meals.map(
            (meal: any) => meal.strIngredient
          );
          setIngredients(ingredientNames);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <Grid container spacing={2}>
      <TitlePage title="Ingredientes" />
      {ingredients.map((ingredient) => (
        <IngredientButton key={ingredient} ingredient={ingredient} />
      ))}
    </Grid>
  );
};
