import { utilsArg } from "./arg";
import { utilsPageComponent } from "./page/component";

/**
 * Utilities to work with Storybook
 */
export const Utils = {
	/**
	 * Try to generate a suitable control for passed "target"
	 */
	arg: utilsArg,
	page: {
		/**
		 * layout Component pages
		 */
		component: utilsPageComponent,
	},
};
