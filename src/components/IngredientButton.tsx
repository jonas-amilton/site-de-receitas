import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import axios from "axios";

interface IngredientButtonProps {
  ingredient?: string;
}

export const IngredientButton: React.FC<IngredientButtonProps> = () => {
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
          console.log(ingredients);
          
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <Grid item xs={12} style={{ display: "contents" }}>
      {ingredients.map((ingredientName) => (
        <Button
          key={ingredientName}
          style={{ margin: "1em", color: "#000", backgroundColor: "#fff" }}
          sx={{ width: "36em" }}
          variant="contained"
        >
          {ingredientName}
        </Button>
      ))}
    </Grid>
  );
};
