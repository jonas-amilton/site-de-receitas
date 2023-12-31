import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Box,
  Modal,
  Grid,
  useTheme,
} from "@mui/material";

import { limitDescription } from "../utils/index";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

export function MultiActionAreaCard(props: {
  title: string;
  description: string;
  image: string;
  urlYoutube: string;
  categoria?: string;
  area?: string;
  tag?: string;
  ingredients?: any;
  medidas?: any;
}) {
  const {
    title,
    description,
    image,
    urlYoutube,
    categoria,
    area,
    tag,
    ingredients,
    medidas,
  } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  return (
    <div style={{ margin: "1em" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ padding: ".2em" }}>
            <Typography
              style={{ color: "#F97316", fontWeight: "bold" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
              gutterBottom
            >
              {title}
            </Typography>
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              xs={12}
            >
              <CardMedia
                component="img"
                height="360"
                image={image}
                alt={title}
                sx={{
                  minWidth: '10em',
                  maxWidth: '30em' ,
                  height: "auto",
                  margin: ".6em",
                  [theme.breakpoints.down("lg")]: {
                    width: "30em",
                  },
                  [theme.breakpoints.down("md")]: {
                    width: "30em",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "18em",
                    margin: ".4em",
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: "10em",
                    margin: ".4em",
                  },
                }}
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  id="modal-modal-description"
                  gutterBottom
                >
                  Categoria: {categoria}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  id="modal-modal-description"
                  gutterBottom
                >
                  Área: {area}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  id="modal-modal-description"
                  gutterBottom
                >
                  Tags: {tag}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  Ingredientes
                </Typography>
                {Array.from({ length: 50 }).map((_, i) => {
                  const ingredient = ingredients[`strIngredient${i + 1}`];
                  if (
                    ingredient !== undefined &&
                    ingredient !== null &&
                    ingredient !== "" &&
                    ingredient !== " "
                  ) {
                    return (
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        key={i}
                        gutterBottom
                      >
                        {`${1 + i}. ${ingredient}`}
                      </Typography>
                    );
                  }
                  return null;
                })}
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  Medidas
                </Typography>
                {Array.from({ length: 50 }).map((_, i) => {
                  const medida = medidas[`strMeasure${i + 1}`];
                  if (
                    medida !== undefined &&
                    medida !== null &&
                    medida !== "" &&
                    medida !== " "
                  ) {
                    return (
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        key={i}
                        gutterBottom
                      >
                        {`${1 + i}. ${medida}`}
                      </Typography>
                    );
                  }
                  return null;
                })}
              </Grid>
            </Grid>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Button
                style={{ background: "#F97316", color: "#fff" }}
                size="small"
                href={urlYoutube}
                target="_blank"
              >
                Youtube
              </Button>
            </div>
          </div>
        </Box>
      </Modal>

      <Card
        className="cards"
        sx={{
          width: "22em",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
          [theme.breakpoints.down("lg")]: {
            width: "16rem",
          },
          [theme.breakpoints.down("md")]: {
            width: "21rem",
          },
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            margin: ".4em",
          },
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography minHeight="4em" variant="body2" color="text.secondary">
              {limitDescription(description, 20)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            style={{ background: "#F97316", color: "#fff" }}
            size="small"
            href={urlYoutube}
            target="_blank"
          >
            Youtube
          </Button>
          <Button
            style={{ background: "#F97316", color: "#fff" }}
            size="small"
            href={""}
            onClick={handleOpen}
          >
            Detalhes
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
