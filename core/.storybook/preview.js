import { Border, DivPx, ThemeSwitcher } from "../src";

const Decorator = (Story) => (
	<div>
		<ThemeSwitcher />
		<DivPx size={16} />
		<Border color="strong" />
		<DivPx size={16} />
		<Story />
	</div>
);

export const decorators = [Decorator];

export const parameters = {};
