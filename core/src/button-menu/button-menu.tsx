import React from "react";
import { usePopper } from "react-popper";
import { Button, ButtonSize, ButtonStyle } from "../button/button";
import { IconPath } from "../icon/icon";
import { ButtonMenuItem } from "./item/item";
import { ButtonMenuMenu } from "./menu/menu";

export { ButtonMenuItem };

interface Props {
	items: ButtonMenuItem[];
	// Like Button:
	children?: React.ReactNode;
	icon?: IconPath;
	// Styles
	size: ButtonSize;
	style: ButtonStyle;
}

export const ButtonMenu = (props: Props) => {
	const [menuVisible, setMenuVisible] = React.useState(false);
	const [button, setButton] = React.useState<HTMLDivElement | null>(null);
	const [menu, setMenu] = React.useState<HTMLDivElement | null>(null);
	const [arrow, setArrow] = React.useState<HTMLDivElement | null>(null);
	const { styles, attributes, update } = usePopper(button, menu, {
		placement: "bottom-start",
		modifiers: [
			{ name: "offset", options: { offset: [0, 8] } },
			{ name: "arrow", options: { element: arrow } },
		],
	});

	// Because Arrow and Menu is rendered conditionally, the position of arrow
	// in initial render may be wrong. This forces a Popper's update to fix it
	React.useEffect(() => {
		if (menuVisible === false) return;
		if (update === null) return;
		update();
	}, [menuVisible, update]);

	// Close on outside click
	React.useEffect(() => {
		if (menuVisible === false) return;
		if (menu === null) return;
		const listener = (event: MouseEvent) => {
			if (!(event.target instanceof Node)) return;
			if (menu.contains(event.target)) return;
			setMenuVisible(false);
		};
		document.addEventListener("click", listener);
		return () => document.removeEventListener("click", listener);
	}, [menuVisible, menu]);

	return (
		<div>
			<div ref={setButton}>
				<Button
					onClick={() => setMenuVisible(!menuVisible)}
					size={props.size}
					style={props.style}
					icon={props.icon}
					children={props.children}
				/>
			</div>
			{menuVisible && (
				<ButtonMenuMenu
					setArrow={setArrow}
					setMenu={setMenu}
					styles={styles}
					attributes={attributes}
					closeMenu={() => setMenuVisible(false)}
					items={props.items}
				/>
			)}
		</div>
	);
};

ButtonMenu.defaultProps = {
	size: Button.defaultProps.size,
	style: Button.defaultProps.style,
};

ButtonMenu.size = Button.size;
ButtonMenu.style = Button.style;
