import { storiesOf } from "@storybook/react";
import React from "react";
import { DivPx } from "../div/div";
import { Tag } from "./tag";

storiesOf("Tag", module).add("Main", () => {
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
					<React.Fragment key={color}>
						<Tag color={Tag.colors[color]}>{color}</Tag>
						<DivPx size={8} />
					</React.Fragment>
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
});
