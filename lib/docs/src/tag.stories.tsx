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

export default {
	title: "Components/Tag",
	component: Tag,
	argTypes: {
		children: Utils.arg("text"),
		color: Utils.arg(colors),
	},
} as Meta;

interface Props {
	children?: string;
	color?: string;
}

export const Primary = (props: Props): JSX.Element => {
	return (
		<Tag color={(Tag.colors as any)[props.color ? props.color : "gray"]}>
			{props.children ? props.children : "Default"}
		</Tag>
	);
};

export const Gallery = (): JSX.Element => {
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

Utils.desc(Gallery)(
	`Tag can be used alone, next to another component or inside the component.`
);
