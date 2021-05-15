import { Meta } from "@storybook/react";
import { DivPx, ProgressCircle } from "../../core/src";

export default {
	title: "Draft/Progress Circle",
	component: ProgressCircle,
} as Meta;

export const Primary = (): JSX.Element => (
	<div>
		<div>
			<ProgressCircle size={16} value="indeterminate" />
		</div>
		<DivPx size={16} />
		<div>
			<ProgressCircle
				size={16}
				value="indeterminate"
				color={ProgressCircle.colors.highlight}
			/>
		</div>
		<DivPx size={16} />
		<div style={{ background: "var(--highlight-5)", padding: 8 }}>
			<ProgressCircle
				size={16}
				value="indeterminate"
				color={ProgressCircle.colors.inverse}
			/>
		</div>
	</div>
);
