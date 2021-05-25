import { Meta } from "@storybook/react";
import { Tag } from "../../core/src";
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

Utils.page.component(meta, {
	sticky: true,
	shots: [<GalleryFeedbackTag key="1" />],
});

export default meta;

interface Props {
	children: string;
	color?: string;
}

export const Primary = (props: Props): JSX.Element => {
	return (
		// eslint-disable-next-line
		<Tag color={(Tag.colors as any)[props.color ?? "gray"]}>
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
