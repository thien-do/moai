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

/**
 * Utilities to work with Storybook
 */
export const _Story = {
	arg,
	desc,
};
