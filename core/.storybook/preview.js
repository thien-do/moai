import { themes } from "@storybook/theming";
import { useEffect, useState } from "react";
import * as M from "../src";
import "./preview.css";
import { storyTheme } from "./theme";
import {
	Title,
	Subtitle,
	Description,
	Primary,
	ArgsTable,
	Stories,
	PRIMARY_STORY,
	DocsContainer,
} from "@storybook/addon-docs/blocks";

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

const Page = () => (
	<div>
		<Title />
		<Subtitle />
		<Description />
		<div className="primary-container">
			<div className="primary">
				<Primary />
			</div>
			<ArgsTable story={PRIMARY_STORY} />
		</div>
		<Stories />
	</div>
);

export const parameters = {
	docs: {
		theme: storyTheme,
		container: Container,
		page: Page,
	},
	viewMode: "docs",
	options: {
		storySort: {
			order: ["Components"],
		},
	},
};
