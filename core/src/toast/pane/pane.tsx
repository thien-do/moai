import { ReactNode } from "react";
import { border, Border } from "../../border/border";
import { Button } from "../../button/button";
import { DivPx } from "../../div/div";
import { Icon, IconComponent } from "../../icon/icon";
import { coreIcons } from "../../icons/icons";
import { shadow } from "../../shadow/shadow";
import { Paragraph, text } from "../../text/text";
import s from "./pane.module.css";

export interface ToastPaneType {
	iconComponent: IconComponent;
	iconCls: string;
	className: string;
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
	<div>
		<div
			className={[
				s.container,
				ToastPane.styles.main,
				props.type.className,
			].join(" ")}
		>
			<div className={[s.icon, props.type.iconCls].join(" ")}>
				<Icon display="block" component={props.type.iconComponent} />
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
		iconComponent: coreIcons.success,
		iconCls: text.successWeak,
		className: s.dark,
	} as ToastPaneType,
	failure: {
		iconComponent: coreIcons.error,
		iconCls: text.failureWeak,
		className: s.dark,
	} as ToastPaneType,
};

ToastPane.styles = {
	main: [s.size, shadow.boxStrong, border.radius].join(" "),
};
