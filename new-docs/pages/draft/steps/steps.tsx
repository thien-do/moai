import { Steps } from "@moai/core/src";

export const StepsExample = (): JSX.Element => {
	return (
		<Steps
			steps={[
				{ title: "First" },
				{ title: "Second" },
				{ title: "Third and long long" },
			]}
			current={1}
		/>
	);
};
