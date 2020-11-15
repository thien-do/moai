import * as React from "react";
import ReactDOM from "react-dom";
import { background } from "../../background/background";
import { borderColor } from "../../border/border";
import { DivPx } from "../../div/div";
import { portalContainer } from "../../utils/utils";
import { ButtonMenuArrow } from "../arrow/arrow";
import { ButtonMenuItem, ButtonMenuItemComponent } from "../item/item";
import s from "./menu.module.scss";
import sArrow from "../arrow/arrow.module.scss";
import { boxShadow } from "../../box-shadow/box-shadow";

interface Props {
	setMenu: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
	setArrow: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
	attributes: { [key: string]: { [key: string]: string } | undefined };
	styles: { [key: string]: React.CSSProperties };
	items: ButtonMenuItem[];
	closeMenu: () => void;
}

export const ButtonMenuMenu = (props: Props) =>
	ReactDOM.createPortal(
		<div
			style={props.styles.popper}
			className={[
				s.menu,
				sArrow.menu,
				background.primary,
				borderColor.strong,
				boxShadow.strong,
			].join(" ")}
			ref={props.setMenu}
			{...props.attributes.popper}
		>
			<DivPx size={8} />
			{props.items.map((item, index) => (
				<ButtonMenuItemComponent
					key={index}
					item={item}
					closeMenu={props.closeMenu}
				/>
			))}
			<DivPx size={8} />
			<ButtonMenuArrow
				style={props.styles.arrow}
				attributes={props.attributes.arrow}
				setArrow={props.setArrow}
			/>
		</div>,
		portalContainer
	);
