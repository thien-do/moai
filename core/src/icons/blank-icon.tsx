import { GenIcon, IconBaseProps, IconType } from "react-icons";

export const BlankIcon: IconType = (props: IconBaseProps): JSX.Element => {
	return GenIcon({ tag: "svg", attr: { viewBox: "0 0 16 16" }, child: [] })(
		props,
	);
};
