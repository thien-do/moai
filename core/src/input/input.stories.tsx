import { _Story } from "../_story";
import { Input } from "./input";

export default {
	title: "Components/Input",
	component: Input,
	argTypes: {
		type: _Story.arg(null),
		style: _Story.arg(Input.styles),
		size: _Story.arg(Input.sizes),
		maxLength: _Story.arg("number"),
		disabled: _Story.arg("boolean"),
		readOnly: _Story.arg("boolean"),
		placeholder: _Story.arg(null),
		icon: _Story.arg(null),

		value: _Story.arg(null),
		setValue: _Story.arg(null),

		list: _Story.arg(null),

		id: _Story.arg(null),
		autoFocus: _Story.arg(null),
		autoSelect: _Story.arg(null),
		"aria-label": _Story.arg(null),
		"aria-labelledby": _Story.arg(null),

		onBlur: _Story.arg(null),
		onFocus: _Story.arg(null),
		onKeyPress: _Story.arg(null),
		onKeyUp: _Story.arg(null),
		onKeyDown: _Story.arg(null),
		onClick: _Story.arg(null),
		onChange: _Story.arg(null),
	},
};

interface Props {
	type?: string;
	style?: string;
	size?: string;
	maxLength?: number;
	disabled?: boolean;
	readOnly?: boolean;
}

export const Primary = (props: Props) => {
	return (
		<Input
			type={props.type}
			style={Input.styles[props.style]}
			size={Input.sizes[props.size]}
			maxLength={props.maxLength}
			disabled={props.disabled}
			readOnly={props.readOnly}
		/>
	);
};
