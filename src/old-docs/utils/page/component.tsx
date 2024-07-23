import {
	ArgsTable,
	Description,
	Primary,
	PRIMARY_STORY,
	Stories,
	Title,
} from "@storybook/addon-docs";
import { Meta } from "@storybook/react";
import React from "react";
import { background } from "../../../../core/src";
import s from "./component.module.css";

interface Props {
	shots: React.ReactNode[];
	primary: "sticky" | "none" | "default";
}

const ComponentPage = (props: Props): JSX.Element => (
	<div className={props.primary === "sticky" ? s.sticky : ""}>
		<Title />
		<Description />
		{props.shots.length > 0 && (
			<>
				<h3 id="props" className="sbdocs sbdocs-h3">
					Gallery
				</h3>
				<div className={s.shots}>{props.shots}</div>
			</>
		)}
		<Stories />
		<div>
			<h3 id="props" className="sbdocs sbdocs-h3">
				All Props
			</h3>
			{props.primary !== "none" && (
				<div className={[s.primary, background.strong].join(" ")}>
					<Primary />
				</div>
			)}
			<div className={s.table}>
				<ArgsTable story={PRIMARY_STORY} />
			</div>
		</div>
	</div>
);

export const utilsPageComponent = (meta: Meta, props: Props): void => {
	meta.parameters ??= {};
	meta.parameters.docs ??= {};
	meta.parameters.docs.page = () => <ComponentPage {...props} />;
};
