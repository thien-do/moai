import { ButtonProps } from "../button";
import s from "./size.module.css";

export interface ButtonSize {
	mainClassName: string;
	iconSize: number;
	iconMargin: number;
}

const largeCommon = { iconSize: 20, iconMargin: 12 };
const mediumCommon = { iconSize: 16, iconMargin: 8 };
const smallCommon = { iconSize: 12, iconMargin: 4 };

const large: ButtonSize = { mainClassName: s.large, ...largeCommon };
const largeIcon: ButtonSize = { mainClassName: s.largeIcon, ...largeCommon };
const medium: ButtonSize = { mainClassName: s.medium, ...mediumCommon };
const mediumIcon: ButtonSize = { mainClassName: s.mediumIcon, ...mediumCommon };
const small: ButtonSize = { mainClassName: s.small, ...smallCommon };
const smallIcon: ButtonSize = { mainClassName: s.smallIcon, ...smallCommon };

export const buttonSizes = {
	large,
	largeIcon,
	medium,
	mediumIcon,
	small,
	smallIcon,
};

export const getButtonSize = (props: ButtonProps): ButtonSize => {
	return props.size ?? buttonSizes.medium;
};
