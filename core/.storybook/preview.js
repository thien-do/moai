import * as M from "../src";
import "../src/font/remote.css";
import "./preview.css";
import { storyTheme } from "./theme";
import * as D from "@storybook/addon-docs/blocks";
import { useTheme } from "../src";

const Page = () => {
	useTheme();
	return (
		<div>
			<D.Title />
			<D.Subtitle />
			<D.Description />
			<div className="moai-hero">
				<div
					className={["moai-primary", M.background.strong].join(" ")}
				>
					<D.Primary />
				</div>
				<D.ArgsTable story={D.PRIMARY_STORY} />
			</div>
			<D.Stories />
		</div>
	);
};

export const parameters = {
	docs: {
		theme: storyTheme,
		// container: Container,
		page: Page,
	},
	viewMode: "docs",
	options: {
		storySort: {
			order: ["Components"],
		},
	},
};
