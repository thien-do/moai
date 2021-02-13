import { DocsContainer } from "@storybook/addon-docs/blocks";
import { themes } from "@storybook/theming";
import { useEffect, useState } from "react";
import { BackgroundSwitcher } from "../src/background/switcher";
import "../src/global/global";
import { Switcher } from "../src/switcher/switcher";
import { getThemeClass, getThemeOptions, useTheme } from "../src/theme/theme";
import "./preview.css";
import { storyTheme } from "./theme";

const Container = ({ children, context }) => {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const cls = getThemeClass(theme);
		const docsTheme = cls === "dark" ? themes.dark : themes.light;
		context.parameters.docs.theme = docsTheme;
		// Force a re-render with updated context
		setValue({});
	}, [theme]);

	const setValue = useState({})[1];
	return (
		<DocsContainer context={context}>
			<div className="moai-toolbar">
				<Switcher
					options={getThemeOptions()}
					setValue={setTheme}
					value={theme}
				/>
				<BackgroundSwitcher />
			</div>
			{children}
		</DocsContainer>
	);
};

export const parameters = {
	docs: {
		theme: storyTheme,
		container: Container,
	},
	viewMode: "docs",
	options: {
		storySort: {
			order: ["Components"],
		},
	},
};
