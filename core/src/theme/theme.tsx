import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Switcher } from "../switcher/switcher";

type ThemeOption = "light" | "dark" | "system";
type ThemeClass = "light" | "dark";

const KEY = "moai-theme";

const applyThemeClass = (theme: ThemeClass): void => {
	const classes = window.document.documentElement.classList;
	if (classes.contains(theme)) return;
	classes.remove(theme === "light" ? "dark" : "light");
	classes.add(theme);
};

const getThemeClass = (option: ThemeOption): ThemeClass => {
	if (option !== "system") return option;
	const media = window.matchMedia("(prefers-color-scheme: dark)");
	return media.matches ? "dark" : "light";
};

export const useTheme = (): {
	theme: ThemeOption;
	setTheme: Dispatch<SetStateAction<ThemeOption>>;
} => {
	const [theme, setTheme] = useState<ThemeOption>(() => {
		if (!window) return "system"; // Server-side rendering
		const stored = window.localStorage.getItem(KEY) as ThemeOption | null;
		return stored ?? "system";
	});

	useEffect(() => {
		window.localStorage.setItem(KEY, theme);
		applyThemeClass(getThemeClass(theme));
	}, [theme]);

	// Watch if auto
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

export const ThemeSwitcher = (): JSX.Element => {
	const { theme, setTheme } = useTheme();

	return (
		<Switcher<ThemeOption>
			options={[
				{ value: "light", label: "Light" },
				{ value: "system", label: "System" },
				{ value: "dark", label: "Dark" },
			]}
			setValue={setTheme}
			value={theme}
		/>
	);
};
