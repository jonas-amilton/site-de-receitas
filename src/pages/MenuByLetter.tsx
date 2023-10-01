import React, { useEffect, useState } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import TitlePage from "../components/TitlePage";

export const MenuByLetter: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <TitlePage
        title="Receitas por Letra"
      />
    </Grid>
  );
};
