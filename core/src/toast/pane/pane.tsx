import { ReactNode } from "react";
import { background } from "../../background/background";
import { Border } from "../../border/border";
import { boxShadow } from "../../box-shadow/box-shadow";
import { Button } from "../../button/button";
import { DivPx } from "../../div/div";
import { Icon, IconPath } from "../../icon/icon";
import { coreIcons } from "../../icons/icons";
import { Paragraph, text } from "../../text/text";
import s from "./pane.module.css";

export interface ToastPaneType {
	iconPath: IconPath;
	iconCls: string;
	barCls: string;
}

interface Props {
	type: ToastPaneType;
	children: ReactNode;
	close: () => void;
}

export const ToastPane = (props: Props): JSX.Element => (
	<div className="dark">
		<div
			className={[
				s.container,
				background.primary,
				boxShadow.strong,
			].join(" ")}
		>
			<div className={[s.icon, props.type.iconCls].join(" ")}>
				<Icon display="block" path={props.type.iconPath} />
			</div>
			<DivPx size={12} />
			<div className={s.children}>
				<Paragraph>{props.children}</Paragraph>
			</div>
			<DivPx size={12} />
			<Border color="strong" />
			<DivPx size={12} />
			<div className={s.button}>
				<Button
					size={Button.sizes.smallIcon}
					style={Button.styles.flat}
					icon={coreIcons.cross}
					iconLabel="Close"
					onClick={() => props.close()}
				/>
			</div>
		</div>
	</div>
);

ToastPane.types = {
	success: {
		iconPath: coreIcons.success,
		iconCls: text.greenStrong,
		barCls: background.greenStrong,
	} as ToastPaneType,
	failure: {
		iconPath: coreIcons.error,
		iconCls: text.redStrong,
		barCls: background.redStrong,
	} as ToastPaneType,
};
