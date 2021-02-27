import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Switcher, SwitcherOption } from "../switcher/switcher";

export type Theme = "light" | "dark" | "system";
type ThemeClass = "light" | "dark";

const KEY = "moai-theme";

const applyThemeClass = (theme: ThemeClass): void => {
	const classes = window.document.documentElement.classList;
	if (classes.contains(theme)) return;
	classes.remove(theme === "light" ? "dark" : "light");
	classes.add(theme);
};

export const getThemeClass = (option: Theme): ThemeClass => {
	if (option !== "system") return option;
	const media = window.matchMedia("(prefers-color-scheme: dark)");
	return media.matches ? "dark" : "light";
};

export interface ThemeState {
	theme: Theme;
	setTheme: Dispatch<SetStateAction<Theme>>;
}

export const useTheme = (): ThemeState => {
	const [theme, setTheme] = useState<Theme>("system");

	useEffect(() => {
		// Set initial theme in an effect instead of useState to avoid mismatch
		// between server and client rendering
		const stored = window.localStorage.getItem(KEY) as Theme | null;
		setTheme(stored ?? "system");
	}, []);

	useEffect(() => {
		window.localStorage.setItem(KEY, theme);
		applyThemeClass(getThemeClass(theme));
	}, [theme]);

	// Watch if system
	useEffect(() => {
		if (theme !== "system") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const listener = (ev: MediaQueryListEvent): void => {
			applyThemeClass(ev.matches ? "dark" : "light");
		};
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [theme]);

	return { theme, setTheme };
};

export const getThemeOptions = (): SwitcherOption<Theme>[] => [
	{ value: "light", label: "Light" },
	{ value: "system", label: "System" },
	{ value: "dark", label: "Dark" },
];

export const ThemeSwitcher = (): JSX.Element => {
	const { theme, setTheme } = useTheme();
	return (
		<Switcher<Theme>
			options={getThemeOptions()}
			setValue={setTheme}
			value={theme}
		/>
	);
};
