import { storiesOf } from "@storybook/react";
import { Steps } from "./step";

storiesOf("Steps", module).add("Main", () => (
	<Steps
		steps={[
			{ title: "First" },
			{ title: "Second" },
			{ title: "Third and long long" },
		]}
		current={1}
	/>
));
