import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";

export function MultiActionAreaCard(props: {
  title: string;
  description: string;
  image: string;
  urlYoutube: string;
}) {
  const { title, description, image, urlYoutube } = props;

  return (
    <Card sx={{ maxWidth: 345, margin: "1.2em" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          style={{ background: "#F97316", color: "#fff" }}
          size="small"
          href={urlYoutube}
          target="_blank"
        >
          Youtube
        </Button>
      </CardActions>
    </Card>
  );
}
