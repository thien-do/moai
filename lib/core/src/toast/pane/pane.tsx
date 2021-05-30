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
	/**
	 * The type of the toast. This controls the toast's color and icon. Choose
	 * one from `ToastPane.types`.
	 */
	type: ToastPaneType;
	/**
	 * The message to render inside the toast.
	 */
	children: ReactNode;
	/**
	 * If defined, the toast will have a close button that triggers this
	 * callback when clicked.
	 */
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

/**
 * Toasts are pop-up notification that tell users about events briefly, without
 * forcing them to react. Users can dismiss them, or they will also
 * automatically go away after a few seconds.
 * 
 * Moai's Toast support both [imperative][1] (i.e. call them in a function)
 * and [declarative][2] (i.e. render them in-place) usages.
 * 
 * [1]: #basic
 * [2]: #pane
 */
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
