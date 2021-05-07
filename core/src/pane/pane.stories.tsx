import { Meta } from "@storybook/react";
import React from "react";
import { DivPx } from "../div/div";
import { Pane } from "./pane";

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
