import React from "react";
import { Button, Stack } from "@mui/material";

interface IngredientButtonProps {
  ingredient: string;
}

export const IngredientButton: React.FC<IngredientButtonProps> = ({ ingredient }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        style={{ margin: "1em", color: "#000", backgroundColor: "#fff" }}
        sx={{ width: "36em" }}
        variant="contained"
      >
        {ingredient}
      </Button>
    </Stack>
  );
};
