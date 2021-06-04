import * as D from "@storybook/addon-docs/blocks";
import { useEffect } from "react";
import "../../core/font/remote.css";
import "../../core/src/style/reset.css";
import "../../core/src/style/base.css";
import "./preview.css";
import "./typography.css";
import "./syntax.css";
import { lightTheme, darkTheme } from "./theme";

const Container = ({ children, context }) => {
	useEffect(() => {
		const ls = window.document.documentElement.classList;
		const theme = "dark";
		// const theme = "dark";
		ls.add(theme);
		return () => ls.remove(theme);
	}, []);
	return <D.DocsContainer context={context}>{children}</D.DocsContainer>;
};

export const parameters = {
	docs: {
		// theme: lightTheme,
		theme: darkTheme,
		container: Container,
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
