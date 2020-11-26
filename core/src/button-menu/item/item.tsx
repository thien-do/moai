import * as React from "react";
import { Border } from "../../border/border";
import { Button } from "../../button/button";
import { DivPx } from "../../div/div";
import s from "./item.module.css";

interface Props {
	closeMenu: () => void;
	item: ButtonMenuItem;
}

interface ItemAction {
	label: string;
	fn?: () => void;
	disabled?: boolean;
}

export type ButtonMenuItem = ItemAction | "divider";

export const ButtonMenuItemComponent = ({ item, closeMenu }: Props) =>
	item === "divider" ? (
		<div>
			<DivPx size={8} />
			<Border color="weak" />
			<DivPx size={8} />
		</div>
	) : (
		<button
			onClick={() => {
				item.fn?.();
				closeMenu();
			}}
			disabled={item.disabled}
			children={item.label}
			className={[
				s.action,
				Button.style.flat.main,
				Button.size.medium.main,
				item.disabled ? Button.style.flat.disabled : "",
			].join(" ")}
		/>
	);
