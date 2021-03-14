import * as D from "@storybook/addon-docs/blocks";
import { useEffect } from "react";
import "../font/remote.css";
import "./preview.css";
import "./typography.css";
import "./syntax.css";
import { storyTheme } from "./theme";

const Container = ({ children, context }) => {
	useEffect(() => {
		const ls = window.document.documentElement.classList;
		ls.add("light");
		return () => ls.remove("light");
	}, []);
	return <D.DocsContainer context={context}>{children}</D.DocsContainer>;
};

export const parameters = {
	docs: {
		theme: storyTheme,
		container: Container,
		// page: Page,
	},
	viewMode: "docs",
	options: {
		storySort: {
			method: "alphabetical",
			order: ["Quick Start", "Proper Start", "Widget Gallery"],
		},
	},
};
