import { _Story } from "../_story";
import { TextArea } from "./text-area";

export default {
	title: "Components/TextArea",
	component: TextArea,
	argTypes: {
		style: _Story.arg(TextArea.styles),
		size: _Story.arg(TextArea.sizes),

		disabled: _Story.arg("boolean"),
		readOnly: _Story.arg("boolean"),
		rows: _Story.arg(null),

		defaultValue: _Story.arg(null),
		value: _Story.arg(null),
		forwardedRef: _Story.arg(null),
		setValue: _Story.arg(null),
		placeholder: _Story.arg(null),
		autoFocus: _Story.arg(null),
		autoSelect: _Story.arg(null),

		onBlur: _Story.arg(null),
		onFocus: _Story.arg(null),
		onKeyPress: _Story.arg(null),
		onKeyUp: _Story.arg(null),
		onKeyDown: _Story.arg(null),
	},
};

interface Props {
	style?: string;
	size?: string;
	disabled?: boolean;
	readOnly?: boolean;
}

export const Primary = (props: Props) => (
	<TextArea
		style={TextArea.styles[props.style]}
		size={TextArea.sizes[props.size]}
		disabled={props.disabled}
		readOnly={props.readOnly}
	/>
);

_Story.fixPrimary(Primary);
