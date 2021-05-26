import { Meta } from "@storybook/react";
import { Pane } from "../../core/src";
import { Utils } from "./utils";
import { GalleryContainerPane } from "../../gallery/src/container/pane";

const meta: Meta = {
	title: "Components/Pane",
	component: Pane,
	argTypes: {
		children: Utils.arg("React.ReactNode"),
		noPadding: Utils.arg("boolean"),
		fullHeight: Utils.arg("boolean"),
	},
};

Utils.page.component(meta, {
	sticky: true,
	shots: [<GalleryContainerPane key="1" />],
});

export default meta;

interface Props {
	noPadding?: boolean;
	fullHeight?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
	<div>
		<div style={{ height: 100 }}>
			<Pane noPadding={props.noPadding} fullHeight={props.fullHeight}>
				<div>FOO</div>
				<div>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				</div>
			</Pane>
		</div>
	</div>
);

export const Basic = (): JSX.Element => {
	return (
		<Pane>
			<div>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Temporibus sapiente vero ad eius fuga atque repellendus?
				Repellat sint veniam adipisci accusamus, nihil explicabo odio,
				id neque ducimus voluptate nulla? Maiores?
			</div>
		</Pane>
	);
};

Utils.desc(Basic)(`
To begin, you only need to provide the content inside pane via children.
`);
