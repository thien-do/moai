import { Meta } from "@storybook/react";
import { Fragment, useState } from "react";
import { Button, DivPx, Tag } from "../../core/src";
import { Utils } from "./utils";
import { GalleryFeedbackTag } from "../../gallery/src/feedback/tag";

const meta: Meta = {
	title: "Components/Tag",
	component: Tag,
	argTypes: {
		children: Utils.arg("text"),
		color: Utils.arg(Object.keys(Tag.colors)),
	},
};

Utils.page.component(meta, { sticky: true, shots: [<GalleryFeedbackTag />] });

export default meta;

interface Props {
	children: string;
	color: string;
}

export const Primary = (props: Props): JSX.Element => {
	const color = Object.entries(Tag.colors).filter(
		(value) => value[0] == props.color
	);
	console.log(color);
	return (
		<Tag color={(color && color[0] && color[0][1]) ?? Tag.colors.gray}>
			{props.children ?? "Default"}
		</Tag>
	);
};

export const Basic = (): JSX.Element => {
	return <Tag color={Tag.colors.green}>Foo</Tag>;
};

Utils.desc(Basic)(`
To begin, you need to provide a color from Tag.colors and a label via children.
`);

export const Usage = (): JSX.Element => {
	const colors = Object.entries(Tag.colors);
	return (
		<div>
			<div style={{ display: "flex" }}>
				{colors.map((color) => (
					<Fragment key={color[0]}>
						{/* eslint-disable-next-line */}
						<Tag color={color[1]}>{color[0]}</Tag>
						<DivPx size={8} />
					</Fragment>
				))}
			</div>
			<DivPx size={20} />
			<div
				style={{
					display: "flex",
				}}
			>
				{colors.map((color) => (
					<Fragment key={color[0]}>
						<Button>
							<div style={{ padding: "5px 0", margin: "0" }}>
								<span>Button</span>
								<Tag color={color[1]}>3</Tag>
							</div>
						</Button>
						<DivPx size={8} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

Utils.desc(Usage)(`
As mention earlier, the color of any tag come from Tag.colors. The options are: red, yellow, green, blue, indigo, purple, pink, and gray. Futhermore, users usually use tag next to another component or inside the component whose additional information needed.
`);
