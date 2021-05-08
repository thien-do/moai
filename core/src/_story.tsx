import { ArgType } from "@storybook/addons";
import * as D from "@storybook/addon-docs/blocks";
import { background } from "./background/background";

type ArgTarget = Record<string, unknown> | null | string;

const argControl = (target: ArgTarget) => {
	if (target === null) {
		return { type: null };
	} else if (Array.isArray(target)) {
		const type = target.length > 4 ? "select" : "radio";
		return { type, options: target };
	} else if (typeof target === "object") {
		const options = Object.keys(target);
		const type = options.length > 4 ? "select" : "radio";
		return { type, options };
	} else {
		return { type: target };
	}
};

const arg = (target: ArgTarget, category?: string): ArgType => {
	const table = category ? { category } : undefined;
	const control = argControl(target);
	return { control, table };
};

// eslint-disable-next-line
const desc = (story: any) => (text: string): void => {
	story.parameters ??= {};
	story.parameters.docs ??= {};
	story.parameters.docs.description ??= {};
	story.parameters.docs.description.story = text;
};

// eslint-disable-next-line
const expanded = (story: any): void => {
	story.parameters ??= {};
	story.parameters.docs ??= {};
	story.parameters.docs.source ??= {};
	story.parameters.docs.source.isExpanded = true;
};

// eslint-disable-next-line
const fixPrimary = (story: any): void => {
	story.parameters ??= {};
	story.parameters.docs ??= {};
	story.parameters.docs.source ??= {};
	story.parameters.docs.source.type = "code";
};

// eslint-disable-next-line
const name = (story: any, text: string): void => {
	story.storyName = text;
};

const PageNoPrimary = (): JSX.Element => (
	<>
		<D.Title />
		<D.Description />
		<D.Stories />
	</>
);

const PageStickyPrimary = (): JSX.Element => (
	<>
		<D.Title />
		<D.Subtitle />
		<D.Description />
		<div className="moai-hero">
			<div className={["moai-primary", background.strong].join(" ")}>
				<D.Primary />
			</div>
			<D.ArgsTable story={D.PRIMARY_STORY} />
		</div>
		<D.Stories />
	</>
);

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
	 * Show code by default
	 */
	expanded,
	/**
	 * Override the story's name
	 */
	name,
	page: {
		/**
		 * Make the Primary story sticky so the user can see effects of
		 * controls in the ArgsTable
		 */
		stickyPrimary: PageStickyPrimary,
		/**
		 * Skip the rendering of Primary (and its ArgsTable). Useful for
		 * Pattern pages
		 */
		noPrimary: PageNoPrimary,
	},
};
