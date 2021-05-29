import { TextArea } from "../../../core/src";
import { Utils } from "../utils/utils";

export default {
	title: "Components/TextArea",
	component: TextArea,
	argTypes: {
		style: Utils.arg(TextArea.styles),
		size: Utils.arg(TextArea.sizes),

		disabled: Utils.arg("boolean"),
		readOnly: Utils.arg("boolean"),
		rows: Utils.arg(null),

		defaultValue: Utils.arg(null),
		value: Utils.arg(null),
		forwardedRef: Utils.arg(null),
		setValue: Utils.arg(null),
		placeholder: Utils.arg(null),
		autoFocus: Utils.arg(null),
		autoSelect: Utils.arg(null),

		onBlur: Utils.arg(null),
		onFocus: Utils.arg(null),
		onKeyPress: Utils.arg(null),
		onKeyUp: Utils.arg(null),
		onKeyDown: Utils.arg(null),
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
