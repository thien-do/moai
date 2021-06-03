import s from "./icon.module.css";
import { IconType } from "react-icons";

export type IconComponent = IconType;

export interface IconProps {
	/**
	 * How the icon will be displayed
	 */
	display: "block" | "inline";
	/**
	 * Which icon will be display (recommend choose one from coreIcons)
	 */
	component: IconComponent;
	/**
	 * Size of the icon
	 */
	size?: number;
}

/**
 * Icons are a great tool for visualize and emphasize to the content where you
 * want user's attention. The Icon component is used to generate icons that have
 * IconType. You can use the ones that are defined in our coreIcons component or
 * you can define your own icons set by using [react-icons][1].
 *
 * Moreover, you can also display an icon inside a component by using the icon
 * prop. See [here][2] for more information.
 *
 * [1]: https://react-icons.github.io/react-icons
 * [2]: https://docs.moaijs.com/?path=/docs/patterns-icon--primary
 */
export const Icon = (props: IconProps): JSX.Element => {
	const size = props.size ?? 16;
	return props.component({
		// react-icons support "size" option but avoid that because we want to
		// support all generic components
		style: { width: size, height: size },
		className: props.display === "block" ? s.block : s.inline,
	});
};
