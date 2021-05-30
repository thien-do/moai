// eslint-disable-next-line
type Story = any;

interface StoryOptions {
	/**
	 * Override the story's name
	 */
	name?: string;
	/**
	 * Add Markdown-based description for the story. This will be rendered
	 * above the story's canvas.
	 */
	desc?: string;
	/**
	 * Storybook Docs plugin has a "smart" feature that will dynamically
	 * "correct" our source code for a story if it uses the story Args. This
	 * usually happens with the Primary story. However, the feature is not
	 * really smart and often drop necessary code. This function fixes the
	 * behavior by forcing the use of our raw source code.
	 *
	 * See the "docs.source.type" section on [DocsPage][1].
	 *
	 * [1]: https://storybook.js.org/docs/react/writing-docs/doc-blocks#docspage-1
	 */
	fixPrimary?: boolean;
	/**
	 * Avoid showing source code by default
	 */
	noExpanded?: boolean;
}

export const utilsStory = (story: Story, options: StoryOptions): void => {
	const { desc, noExpanded, name, fixPrimary } = options;
	story.parameters ??= {};
	story.parameters.docs ??= {};

	if (typeof name === "string") {
		story.storyName = name;
	}
	if (typeof desc === "string") {
		story.parameters.docs.description ??= {};
		story.parameters.docs.description.story = desc;
	}
	if (noExpanded !== true && fixPrimary !== true) {
		story.parameters.docs.source ??= {};
		story.parameters.docs.source.state = "open";
	}
	if (fixPrimary === true) {
		story.parameters.docs.source ??= {};
		story.parameters.docs.source.type = "code";
	}
};
