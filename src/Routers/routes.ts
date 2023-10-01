import React from "react";
import { Home, MenuByLetter, MenuByName, MenuIngredients } from "../pages/index";

export type TMapRoutes = {
  label: string;
  path: string;
  // eslint-disable-next-line no-undef
  component: React.FC;
};

export const routes: TMapRoutes[] = [
  {
    label: "Pesquisar Receitas",
    path: "/by-name",
    component: MenuByName,
  },
  {
    label: "Receitas por Letra",
    path: "/by-letter",
    component: MenuByLetter,
  },
  {
    label: "Receitas por Ingredientes",
    path: "/ingredients",
    component: MenuIngredients,
  },
];
