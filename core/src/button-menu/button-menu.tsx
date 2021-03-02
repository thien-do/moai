import React from "react";
import { Button, ButtonProps } from "../button/button";
import { DivPx } from "../div/div";
import { MenuItem } from "../menu/item/item";
import { MenuItemProps } from "../menu/menu";
import { Popover, PopoverProps } from "../popover/popover";

interface Props {
	items: MenuItemProps[];
	button: Omit<ButtonProps, "onClick" | "selected">;
	placement?: PopoverProps["placement"];
}

export const ButtonMenu = (props: Props): JSX.Element => (
	<Popover
		placement={props.placement}
		content={(_popover) => (
			<div>
				<DivPx size={8} />
				{props.items.map((item, index) => (
					<MenuItem key={index} item={item} />
				))}
				<DivPx size={8} />
			</div>
		)}
		target={(popover) => (
			<Button
				{...props.button}
				selected={popover.opened}
				onClick={popover.toggle}
			/>
		)}
	/>
);
