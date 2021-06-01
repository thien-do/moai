import s from "./icon.module.css";
import { IconType } from "react-icons";

export type IconComponent = IconType;

export interface IconProps {
	/**
	 * How the icon will be displayed
	 */
	display: "block" | "inline";
	/**
	 * Which icon will be display (choose one from coreIcons)
	 */
	component: IconComponent;
	/**
	 * Size of the icon
	 */
	size?: number;
}

/**
 * Icons are a great tool to visualize and emphasize the content that you want
 * user's attention. The icon component is used to generate icons that are
 * defined in coreIcons component or you can define your own icon set with
 * [react-icons](https://react-icons.github.io/react-icons).
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
