import { _Story } from "../_story";
import { Input } from "./input";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { useState } from "react";
import { Dialog } from "../dialog/dialog";

export default {
	title: "Components/Input",
	component: Input,
	argTypes: {
		type: _Story.arg([
			"text",
			"number",
			"email",
			"password",
			"url",
			"color",
		]),
		style: _Story.arg(Input.styles),
		size: _Story.arg(Input.sizes),
		maxLength: _Story.arg("number"),
		disabled: _Story.arg("boolean"),
		readOnly: _Story.arg("boolean"),
		placeholder: _Story.arg(null),
		icon: _Story.arg(null),
		defaultValue: _Story.arg(null),
		forwardedRef: _Story.arg(null),

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

export const Primary = (props: Props): JSX.Element => {
	const [text, setText] = useState("");
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					Dialog.alert(`You entered: ${text}`);
				}}
			>
				<Input
					type={props.type}
					style={Input.styles[props.style]}
					size={Input.sizes[props.size]}
					maxLength={props.maxLength}
					disabled={props.disabled}
					readOnly={props.readOnly}
					setValue={setText}
					value={text}
				/>
				<DivPx size={8} />
				<Button type="submit" disabled={!text ? true : false} highlight>
					Submit
				</Button>
			</form>
		</>
	);
};

_Story.fixPrimary(Primary);
