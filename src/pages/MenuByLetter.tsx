import React from "react";
import { Grid } from "@mui/material";
import {TitlePage} from "../components/index";

export const MenuByLetter: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <TitlePage
        title="Receitas por Letra"
      />
    </Grid>
  );
};
