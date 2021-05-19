import { Meta } from "@storybook/react";
import { DivPx, Pane } from "../core/src";

export default {
	title: "Draft/Pane",
	component: Pane,
} as Meta;

export const Primary = (): JSX.Element => (
	<div>
		<Pane>Content</Pane>
		<DivPx size={16} />
		<Pane noPadding>Content</Pane>
		<DivPx size={16} />
		<div style={{ height: 100 }}>
			<Pane fullHeight>Content</Pane>
		</div>
	</div>
);
