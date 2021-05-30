import { utilsArg } from "./arg";
import { utilsPageComponent } from "./page/component";
import { utilsPagePattern } from "./page/pattern";
import { utilsStory } from "./story";

/**
 * Utilities to work with Storybook
 */
export const Utils = {
	/**
	 * Try to generate a suitable control for passed "target"
	 */
	arg: utilsArg,
	/**
	 * Set options for a story, including name, expanded and description
	 */
	story: utilsStory,
	page: {
		/**
		 * Layout for Pattern pages
		 */
		pattern: utilsPagePattern,
		/**
		 * layout Component pages
		 */
		component: utilsPageComponent,
	},
};
