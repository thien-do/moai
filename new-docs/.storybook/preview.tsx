import "../../core/font/remote.css";
import "../../core/src/global/global.css";
// This is kind of a temporary workaround.. it's necessary because @moai/gallery
// does not use the src of core like the docs, but instead use the dist build
import "@moai/core/dist/bundle.css";
import { DocsContainer } from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import React, { ReactElement } from "react";
import "./preview.css";
import "./syntax.css";
import "./typography.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
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
		docs: {
			// Defines the container of docs
			container: ({ children, context, ...props }) => {
				return (
					<DocsContainer context={context} {...props}>
						<div className="light">{children}</div>
					</DocsContainer>
				);
			},
		},
	},
	tags: ["autodocs"],
	decorators: [
		// Define the container of stories
		(Story: () => ReactElement) => {
			return (
				<div className="light">
					<Story />
				</div>
			);
		},
	],
};

export default preview;
