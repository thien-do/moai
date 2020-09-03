import * as React from "react";
import { ButtonMenu } from "../button-menu/button-menu";
import { Button } from "../button/button";
import { Select } from "../select/select";
import s from "./button-group.module.scss";

interface ItemProps {
	fill?: boolean;
	element: JSX.Element;
}

interface Props {
	children: (ItemProps | JSX.Element)[];
	fill?: boolean;
}

const normalizeChild = (defaultFill: boolean | undefined) => {
	return (raw: ItemProps | JSX.Element): ItemProps => {
		// If child is full Item already
		if ((raw as any).element) return raw as ItemProps;
		// If child is only an element ---> fill should be inherited
		return { element: raw as JSX.Element, fill: defaultFill };
	};
};

const SUPPORTED_CHILD_TYPES = [Button, ButtonMenu, Select];

export const ButtonGroup = (props: Props) => (
	<div className={[s.container, props.fill ? s.containerFill : ""].join(" ")}>
		{props.children.map(normalizeChild(props.fill)).map((child, index) => {
			if (SUPPORTED_CHILD_TYPES.includes(child.element.type) === false)
				throw Error(`Unsupported child type: ${child.element.type}`);

			const cls = [];
			if (index !== 0) cls.push("group-tail");
			if (index !== props.children.length - 1) cls.push("group-init");
			cls.push(child.fill ? s.childFill : s.childFix);

			return (
				<div className={cls.join(" ")} key={index}>
					{child.element}
				</div>
			);
		})}
	</div>
);
