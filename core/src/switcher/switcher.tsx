import { ButtonGroup } from "../button-group/button-group";
import { Button, ButtonProps, ButtonSize, ButtonStyle } from "../button/button";

export interface SwitcherOption<T> {
	/**
	 * The value of the option
	 */
	value: T;
	/**
	 * The label of the option
	 */
	label?: string;
	/**
	 * The icon of the option. See the "Icon" guide for more detail.
	 */
	icon?: ButtonProps["icon"];
	/**
	 * The accessible label for the icon, if you provide no "label" prop.
	 */
	iconLabel?: ButtonProps["iconLabel"];
	/**
	 * The React's key for the option
	 */
	key?: string;
	/**
	 * Whether this option is disabled
	 */
	disabled?: boolean;
}

interface Props<T> {
	/**
	 * The selected value of the Switcher. This is required because Switcher
	 * does not support uncontrolled use case.
	 */
	value: T;
	/**
	 * Callback to set the selected value
	 */
	setValue: (value: T) => void;
	/**
	 * List of the switcher's options. See the "SwitcherOption" tab for detail.
	 */
	options: SwitcherOption<T>[];
	/**
	 * Whether the switcher (i.e. its buttons) should fill its container's
	 * space (similar to width: 100%)
	 */
	fill?: boolean;
	/**
	 * Whether the selected option is "highlighted" with a primary color. If
	 * not set, the selected option is dimmed, which is the default behaviour.
	 */
	highlight?: boolean;
	/**
	 * The sizes of the switcher's buttons. Choose one from "Switcher.sizes".
	 * See the "Button" page for more detail.
	 */
	size?: ButtonSize;
	/**
	 * The styles of the switcher's buttons. Choose one from "Switcher.styles".
	 * See the "Button" page for more detail.
	 */
	style?: ButtonStyle;
	/**
	 * Whether to disable the Switcher. This disables all buttons. To disable
	 * some option, use SwitcherOption.disabled attribute.
	 */
	disabled?: boolean;
}

/**
 * The Switcher component displays several options as grouped buttons for the
 * users to select. It should be used when there are less than 5 options.
 * 
 * Switchers only supports 1 selected option. To let the users select several
 * options, use Checkboxes or ButtonGroup.
 */
export const Switcher = <T,>(props: Props<T>): JSX.Element => (
	<ButtonGroup fill={props.fill}>
		{props.options.map((option) => {
			const selected = option.value === props.value;
			return (
				<Button
					key={option.label || option.key}
					icon={option.icon}
					iconLabel={option.iconLabel}
					children={option.label}
					onClick={() => {
						if (selected === false) props.setValue(option.value);
					}}
					disabled={props.disabled || option.disabled}
					fill={props.fill}
					size={props.size}
					style={props.style}
					{...(props.highlight
						? { highlight: selected }
						: { selected: selected })}
				/>
			);
		})}
	</ButtonGroup>
);

Switcher.styles = Button.styles;
Switcher.sizes = Button.sizes;
