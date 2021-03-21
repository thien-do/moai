const arg = (target: object | null | string) => {
	if (target !== null && typeof target === "object") {
		return { control: { type: "radio", options: Object.keys(target) } }
	} else {
		return { control: { type: target }}
	}
}

const desc = (story: any) => (text: string) => {
	story.parameters ??= {};
	story.parameters.docs ??= {};
	story.parameters.docs.description ??= {};
	story.parameters.docs.description.story = text;
};

const fixPrimary = (story: any) => {
	story.parameters ??= {};
	story.parameters.docs ??= {};
	story.parameters.docs.source ??= {};
	story.parameters.docs.source.type = "code";
}

const name = (story: any, text: string) => {
	story.storyName = text;
};

/**
 * Utilities to work with Storybook
 */
export const _Story = {
	/**
	 * Try to generate the suitable controls for passed "target"
	 */
	arg,
	/**
	 * Add Markdown-based description for the story. This will be rendered
	 * above the story's canvas.
	 */
	desc,
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
	fixPrimary,
	/**
	 * Override the story's name
	 */
	name,
};
