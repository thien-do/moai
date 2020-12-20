import * as React from "react";
import { background } from "../background/background";
import { borderColor } from "../border/border";
import { boxShadow } from "../box-shadow/box-shadow";
import { DivPx } from "../div/div";
import { MenuItem } from "./item/item";
import s from "./menu.module.css";

export interface MenuItemAction {
	label: string;
	fn?: () => void;
	disabled?: boolean;
}

export type MenuItemProps = MenuItemAction | "divider";

interface Props {
	items: MenuItemProps[];
	onEsc?: () => void;
}

export const Menu = (props: Props) => {
	const { onEsc } = props;

	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (onEsc === undefined) return;
		const listener = (event: MouseEvent) => {
			const element = ref.current;
			if (!(event.target instanceof Node)) return;
			if (element?.contains(event.target)) return;
			onEsc();
		};
		document.addEventListener("click", listener);
		return () => document.removeEventListener("click", listener);
	}, [onEsc]);

	return (
		<div
			className={[
				s.container,
				background.primary,
				borderColor.strong,
				boxShadow.strong,
			].join(" ")}
			ref={ref}
		>
			<DivPx size={8} />
			{props.items.map((item, index) => (
				<MenuItem key={index} item={item} />
			))}
			<DivPx size={8} />
		</div>
	);
};
