import { ReactNode } from "react";
import { border, Border } from "../../border/border";
import { shadow } from "../../shadow/shadow";
import { Button } from "../../button/button";
import { DivPx } from "../../div/div";
import { Icon, IconPath } from "../../icon/icon";
import { coreIcons } from "../../icons/icons";
import { Paragraph, text } from "../../text/text";
import s from "./pane.module.css";

export interface ToastPaneType {
	iconPath: IconPath;
	iconCls: string;
}

interface Props {
	type: ToastPaneType;
	children: ReactNode;
	close?: () => void;
}

const Close = (props: Props): JSX.Element | null => {
	const close = props.close;
	if (close === undefined) return null;
	return (
		<>
			<Border color="strong" />
			<DivPx size={12} />
			<div className={s.button}>
				<Button
					size={Button.sizes.smallIcon}
					style={Button.styles.flat}
					icon={coreIcons.cross}
					iconLabel="Close"
					onClick={() => close()}
				/>
			</div>
		</>
	);
};

export const ToastPane = (props: Props): JSX.Element => (
	<div className="dark">
		<div
			className={[s.container, shadow.boxStrong, border.radius].join(" ")}
		>
			<div className={[s.icon, props.type.iconCls].join(" ")}>
				<Icon display="block" path={props.type.iconPath} />
			</div>
			<DivPx size={12} />
			<div className={s.children}>
				<Paragraph>{props.children}</Paragraph>
			</div>
			<DivPx size={12} />
			<Close {...props} />
		</div>
	</div>
);

ToastPane.types = {
	success: {
		iconPath: coreIcons.success,
		iconCls: text.successStrong,
	} as ToastPaneType,
	failure: {
		iconPath: coreIcons.error,
		iconCls: text.failureStrong,
	} as ToastPaneType,
};
