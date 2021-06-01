import { Meta } from "@storybook/react";
import { Icon, coreIcons, DivPx } from "../../../core/src";
import { Utils } from "../utils/utils";

const meta: Meta = {
	title: "Components/Icon",
	component: Icon,
	argTypes: {
		display: Utils.arg(["block", "inline"]),
		component: Utils.arg(Object.keys(coreIcons)),
		size: Utils.arg("number"),
	},
};

Utils.page.component(meta, {
	primary: "sticky",
	shots: [],
});

export default meta;

interface Props {
	display: "block" | "inline";
	component: string;
	size?: number;
}

export const Primary = (props: Props): JSX.Element => {
	const { display = "inline", component = "caret" } = props;
	const icons = Object.entries(coreIcons);
	return (
		<div style={{ display: "flex" }}>
			Foo
			<DivPx size={16} />
			<Icon
				display={display}
				component={
					icons.filter((value) => value[0] === component)[0][1]
				}
				size={props.size}
			/>
		</div>
	);
};

export const Basic = (): JSX.Element => (
	<div style={{ display: "flex" }}>
		Foo
		<DivPx size={16} />
		<Icon display="inline" component={coreIcons.caret} />
	</div>
);
Utils.story(Basic, {
	desc: `
To get started, you need to provide the icon to be displayed via component and
how to display it. There are 2 options for displaying an icon: block and inline.
`,
});
