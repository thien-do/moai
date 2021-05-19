import { Meta } from "@storybook/react";
import { Steps } from "../core/src";

export default {
	title: "Draft/Steps",
	component: Steps,
} as Meta;

export const Primary = (): JSX.Element => (
	<Steps
		steps={[
			{ title: "First" },
			{ title: "Second" },
			{ title: "Third and long long" },
		]}
		current={1}
	/>
);
