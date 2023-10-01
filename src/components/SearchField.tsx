import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

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
