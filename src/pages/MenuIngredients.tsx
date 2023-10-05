import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { SearchField, TitlePage } from "../components/index";
import { doGet } from "../api/index";

interface IngredientButtonProps {
  ingredient?: string;
}

export const MenuIngredients: React.FC<IngredientButtonProps> = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(
    null
  );
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await doGet(
          "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        );

        if (response && response.meals) {
          const ingredientNames = response.meals.map(
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

  useEffect(() => {
    const fetchRecipesByIngredient = async () => {
      if (selectedIngredient) {
        try {
          const response = await doGet(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`
          );

          if (response && response.meals) {
            setFilteredRecipes(response.meals);
          } else {
            setFilteredRecipes([]);
          }
        } catch (error) {
          console.error("Erro ao buscar receitas:", error);
        }
      }
    };

    fetchRecipesByIngredient();
  }, [selectedIngredient]);

  const handleIngredientClick = (ingredientName: string) => {
    setSelectedIngredient(ingredientName);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  const shouldShowButtons = selectedIngredient === null;

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.toLowerCase().includes(searchText.toLowerCase())
  );

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
      <TitlePage title="Lista de Ingredientes" />
      <SearchField onChange={handleSearchInputChange} />

      <Grid item xs={12} style={{ display: "contents" }}>
        {shouldShowButtons &&
          filteredIngredients.map((ingredientName) => (
            <Button
              key={ingredientName}
              style={{
                margin: "1em",
                color: "#000",
                backgroundColor: "#fff",
              }}
              sx={{ width: "36em" }}
              variant="contained"
              onClick={() => handleIngredientClick(ingredientName)}
            >
              {ingredientName}
            </Button>
          ))}
      </Grid>

      <TitlePage
        title={selectedIngredient ? `Receitas com ${selectedIngredient}:` : ""}
      />
      {selectedIngredient && (
        <Grid item xs={12} style={{ display: "contents" }}>
          {filteredRecipes.map((recipe) => (
            <Card
              sx={{
                width: "22em",
                margin: ".4em",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                cursor: "pointer",
              }}
            >
              <CardMedia
                key={recipe.idMeal}
                sx={{ height: 140 }}
                image={recipe.strMealThumb}
                title={recipe.strMeal}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.strMeal}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      )}
    </Grid>
  );
};
