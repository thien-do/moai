import { Meta } from "@storybook/react";
import { DivPx, ProgressCircle } from "../../core/src";
import { GalleryFeedbackProgress } from "../../gallery/src/feedback/progress";
import { Utils } from "./utils";

const meta: Meta = {
	title: "Components/Progress Circle",
	component: ProgressCircle,
	argTypes: {
		size: Utils.arg("number"),
		value: Utils.arg("number"),
		color: Utils.arg(ProgressCircle.colors),
	},
};

Utils.page.component(meta, {
	sticky: true,
	shots: [<GalleryFeedbackProgress key="1" />],
});

export default meta;

interface Props {
	size: number;
	value: number | "indeterminate";
	color?: string;
}

export const Primary = (props: Props): JSX.Element => (
	<ProgressCircle
		size={props.size ?? 20}
		value={props.value ?? "indeterminate"}
		color={(ProgressCircle.colors as any)[props.color!]}
	/>
);

export const Basic = (): JSX.Element => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<ProgressCircle size={20} value={"indeterminate"} />
			<DivPx size={16} />
			<ProgressCircle size={20} value={0.5} />
		</div>
	);
};

Utils.desc(Basic)(`
To begin, you need to provide the size of the circle and its value. Notice that
value can vary from 0 to 1 or indeterminate.
`);
