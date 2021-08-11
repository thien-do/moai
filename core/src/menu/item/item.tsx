import { Border } from "../../border/border";
import { Button } from "../../button/button";
import { DivPx } from "../../div/div";
import { MenuItemProps as IMenuItem } from "../menu";
import s from "./item.module.css";

interface Props {
	item: IMenuItem;
}

export const MenuItem = ({ item }: Props): JSX.Element =>
	item === "divider" ? (
		<div>
			<DivPx size={8} />
			<Border color="weak" />
			<DivPx size={8} />
		</div>
	) : (
		<button
			onClick={() => item.fn?.()}
			disabled={item.disabled}
			children={item.label}
			className={[
				s.action,
				Button.styles.flat.mainClassName,
				Button.sizes.medium.mainClassName,
			].join(" ")}
		/>
	);
