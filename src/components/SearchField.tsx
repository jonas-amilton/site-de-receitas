import React, { ChangeEvent } from "react";
import { Grid, TextField } from "@mui/material";

interface SearchFieldProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchField({ onChange }: SearchFieldProps) {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        id="outlined-search"
        label="Procurar por receitas"
        type="search"
        onChange={onChange}
      />
    </Grid>
  );
}
