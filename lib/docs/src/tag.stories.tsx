import { Meta } from "@storybook/react";
import { Fragment } from "react";
import { Button, DivPx, Tag } from "../../core/src";
import { Utils } from "./utils";

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

const meta: Meta = {
	title: "Components/Tag",
	component: Tag,
	argTypes: {
		children: Utils.arg("text"),
		color: Utils.arg(colors),
	},
};

Utils.page.component(meta, { sticky: true, shots: [] });

export default meta;

interface Props {
	children?: string;
	color?: string;
}

export const Primary = (props: Props): JSX.Element => {
	return (
		<Tag color={(Tag.colors as any)[props.color ? props.color : "gray"]}>
			{props.children ?? "Default"}
		</Tag>
	);
};

export const Basic = (): JSX.Element => {
	return <Tag color={Tag.colors.green}>Tag</Tag>;
};

Utils.desc(Basic)(`
Tags are used to provide additional information about something. To begin, you need to provide a color from Tag.color and some information as string via children.
`);

export const Usage = (): JSX.Element => {
	return (
		<div>
			<div style={{ display: "flex" }}>
				{colors.map((color) => (
					<Fragment key={color}>
						{/* eslint-disable-next-line */}
						<Tag color={(Tag.colors as any)[color]}>{color}</Tag>
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
					<Fragment key={color}>
						<Button>
							<div style={{ padding: "5px 0", margin: "0" }}>
								<span>Button</span>
								<Tag color={(Tag.colors as any)[color]}>3</Tag>
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
