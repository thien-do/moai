import { ReactElement } from "react";
import { Steps } from "../../../core/src";

export function StepsExample(): ReactElement {
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
}
