import {
	ArgsTable,
	Description,
	Primary,
	PRIMARY_STORY,
	Stories,
	Title,
} from "@storybook/addon-docs/blocks";
import React from "react";
import { background } from "../../../core/src";
import s from "./component.module.css";

export interface ComponentPageProps {
	shots: React.ReactNode[];
	sticky: boolean;
}

export const ComponentPage = (props: ComponentPageProps): JSX.Element => (
	<div className={props.sticky ? s.sticky : ""}>
		<Title />
		<Description />
		<h3 id="props" className="sbdocs sbdocs-h3">
			Gallery
		</h3>
		<div className={s.shots}>{props.shots}</div>
		<Stories />
		<div>
			<h3 id="props" className="sbdocs sbdocs-h3">
				All Props
			</h3>
			<div className={[s.primary, background.strong].join(" ")}>
				<Primary />
			</div>
			<div className={s.table}>
				<ArgsTable story={PRIMARY_STORY} />
			</div>
		</div>
	</div>
);
