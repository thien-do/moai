import * as D from "@storybook/addon-docs/blocks";
import { useDarkMode } from "storybook-dark-mode";
import "../../core/font/remote.css";
import "../../core/src/global/global.css";
import "./preview.css";
import "./syntax.css";
import { darkTheme, lightTheme } from "./theme";
import "./typography.css";

const Container = (props) => {
	const dark = useDarkMode();
	const context = { ...props.context };
	context.parameters = { ...context.parameters };
	context.parameters.docs = { ...context.parameters.docs };
	context.parameters.docs.theme = dark ? darkTheme : lightTheme;
	return <D.DocsContainer context={context} children={props.children} />;
};

export const parameters = {
	docs: {
		container: Container,
	},
	darkMode: {
		stylePreview: true,
		classTarget: "html",
		light: lightTheme,
		dark: darkTheme,
	},
	viewMode: "docs",
	options: {
		storySort: {
			method: "alphabetical",
			order: [
				"Intro",
				["Quick Start", "Proper Start"],
				"Patterns",
				"Components",
			],
		},
	},
};
