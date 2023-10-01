import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TitlePage from "../components/TitlePage";
import MultiActionAreaCard from "../components/Card";
import { limitDescription } from "../utils/limitDescription";
import axios from "axios";
import SearchField from "../components/SearchField";

export const MenuByName: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getRecipesByName = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );

      if (response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  useEffect(() => {
    getRecipesByName();
  }, [searchQuery]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <TitlePage title="Procurar Receitas por Nome" />
      <SearchField onChange={handleSearchInputChange} />
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
