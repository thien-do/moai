import { Meta } from "@storybook/react";
import { Fragment } from "react";
import { DivPx } from "../div/div";
import { Tag } from "./tag";

export default {
	title: "Draft/Tag",
	component: Tag,
} as Meta;

export const Primary = (): JSX.Element => {
	const colors: string[] = [
		"red",
		"yellow",
		"green",
		"blue",
		"indigo",
		"purple",
		"pink",
		"gray",
	];

	return (
		<div>
			<div style={{ display: "flex" }}>
				{colors.map((color) => (
					<Fragment key={color}>
						<Tag color={Tag.colors[color]}>{color}</Tag>
						<DivPx size={8} />
					</Fragment>
				))}
			</div>
			<DivPx size={16} />
			<div>
				<span>
					<Tag color={Tag.colors.gray}>Test height</Tag>
				</span>
			</div>
		</div>
	);
};
