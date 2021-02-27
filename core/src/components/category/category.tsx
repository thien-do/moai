import colors from "./colors.module.css";

export type CategoryColor = string;

export const categoryColors: {
	[key: string]: string;
} = {
	gray: colors.gray,
	red: colors.red,
	yellow: colors.yellow,
	green: colors.green,
	blue: colors.blue,
	indigo: colors.indigo,
	purple: colors.purple,
	pink: colors.pink,
};
