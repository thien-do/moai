import { IconType } from "react-icons";
import { ButtonGroup } from "../button-group/button-group";
import { Button, ButtonSize, ButtonStyle } from "../button/button";

export interface SwitcherOption<T> {
	value: T;
	label?: string;
	icon?: IconType;
	key?: string;
	disabled?: boolean;
}

interface Props<T> {
	value: T;
	setValue: (value: T) => void;
	options: SwitcherOption<T>[];
	fill?: boolean;
	highlight?: boolean;
	size?: ButtonSize;
	style?: ButtonStyle;
	/**
	 * Whether to disable the Switcher. This disables all buttons. To disable
	 * some option, use SwitcherOption.disabled attribute.
	 */
	disabled?: boolean;
}

export const Switcher = <T,>(props: Props<T>): JSX.Element => (
	<ButtonGroup fill={props.fill}>
		{props.options.map((option) => {
			const selected = option.value === props.value;
			return (
				<Button
					key={option.label || option.key}
					icon={option.icon}
					children={option.label}
					onClick={() => {
						if (selected === false) props.setValue(option.value);
					}}
					disabled={props.disabled || option.disabled}
					fill={props.fill}
					size={props.size}
					style={props.style}
					{...(props.highlight
						? { selected: selected }
						: { highlight: selected })}
				/>
			);
		})}
	</ButtonGroup>
);
