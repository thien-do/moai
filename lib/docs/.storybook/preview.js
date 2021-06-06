import * as D from "@storybook/addon-docs/blocks";
import { useEffect } from "react";
import "../../core/font/remote.css";
import "../../core/src/style/reset.css";
import "../../core/src/style/base.css";
import "./preview.css";
import "./typography.css";
import "./syntax.css";
import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "storybook-dark-mode";

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
