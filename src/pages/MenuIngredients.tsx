import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { TitlePage, IngredientButton } from "../components/index";
import axios from "axios";

export const MenuIngredients: React.FC = () => {
 
  return (
    <Grid container spacing={2}>
      <TitlePage title="Ingredientes" />
  
        <IngredientButton />

    </Grid>
  );
};
