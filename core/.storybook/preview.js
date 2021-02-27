import { DocsContainer } from "@storybook/addon-docs/blocks";
import { themes } from "@storybook/theming";
import { useEffect, useState } from "react";
import * as M from "../src";
import "./preview.css";
import { storyTheme } from "./theme";

const Container = ({ children, context }) => {
	const { theme, setTheme } = M.useTheme();

	useEffect(() => {
		const cls = M.getThemeClass(theme);
		const docsTheme = cls === "dark" ? themes.dark : themes.light;
		context.parameters.docs.theme = docsTheme;
		// Force a re-render with updated context
		setValue({});
	}, [theme]);

	const setValue = useState({})[1];
	return (
		<DocsContainer context={context}>
			<div
				className={[
					"moai-toolbar",
					M.background.strong,
					M.border.weak,
				].join(" ")}
			>
				<M.Switcher
					options={M.getThemeOptions()}
					setValue={setTheme}
					value={theme}
				/>
				<M.BackgroundSwitcher />
			</div>
			<div className="moai-body">{children}</div>
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
