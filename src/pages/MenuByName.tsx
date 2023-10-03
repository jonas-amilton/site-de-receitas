import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  TitlePage,
  MultiActionAreaCard,
  SearchField,
} from "../components/index";
import axios from "axios";
import { IRecipe } from "../Interfaces/IRecipe";

export const MenuByName: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
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
