import colors from "./colors.module.css";

export type CategoryColor = string;

export const categoryColors = {
  red: colors.red,
  yellow: colors.yellow,
  green: colors.green,
  blue: colors.blue,
  indigo: colors.indigo,
  purple: colors.purple,
  pink: colors.pink,
  gray: colors.gray,
};

export const categoryColorNames = Object.keys(categoryColors);
