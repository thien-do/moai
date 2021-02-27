import { themes } from "@storybook/theming";
import { useEffect, useState } from "react";
import * as M from "../src";
import "./preview.css";
import { storyTheme } from "./theme";
import * as D from "@storybook/addon-docs/blocks";

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
		<D.DocsContainer context={context}>
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
		</D.DocsContainer>
	);
};

const Page = () => (
	<div>
		<D.Title />
		<D.Subtitle />
		<D.Description />
		<div className="moai-hero">
			<div className="moai-primary">
				<D.Primary />
			</div>
			<D.ArgsTable story={D.PRIMARY_STORY} />
		</div>
		<D.Stories />
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
