import * as React from "react";
import { Button, Grid } from "@mui/material";

export function AlphabetButtons() {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const buttonStyle = {
    color: "#000",
    minWidth: "20px",
    transition: "background-color 0.3s",
  };

  return (
    <Grid container justifyContent="center" spacing={1}>
      {alphabet.map((letter) => (
        <Grid item key={letter}>
          <Button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#F97316";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#000";
            }}
          >
            {letter}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
