import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { TitlePage, IngredientButton } from "../components/index";
import axios from "axios";

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);

    if (response.data && response.data.meals) {
      return response.data.meals.map((meal: any) => meal.strIngredient);
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }

  return [];
};

export const MenuIngredients: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetchData(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );

      setIngredients(response);
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
