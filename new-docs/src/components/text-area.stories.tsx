import { TextArea } from "../../../core/src";
import { Utils } from "../utils/utils";

export default {
	title: "Draft/TextArea",
	component: TextArea,
	argTypes: {
		style: Utils.arg(TextArea.styles),
		size: Utils.arg(TextArea.sizes),
		disabled: Utils.arg("boolean"),
		readOnly: Utils.arg("boolean"),
	},
};

interface Props {
	style?: string;
	size?: string;
	disabled?: boolean;
	readOnly?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
	<TextArea
		// eslint-disable-next-line
		style={(TextArea.styles as any)[props.style!]}
		// eslint-disable-next-line
		size={(TextArea.sizes as any)[props.size!]}
		disabled={props.disabled}
		readOnly={props.readOnly}
	/>
);
