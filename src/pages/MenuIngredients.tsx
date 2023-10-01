import React from "react";
import { Grid } from "@mui/material";
import { TitlePage } from "../components/index";

export const MenuIngredients: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <TitlePage title="Ingredientes" />
    </Grid>
  );
};
