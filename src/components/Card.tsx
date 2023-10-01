import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props: {
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
