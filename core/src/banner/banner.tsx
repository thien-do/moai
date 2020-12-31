import { ReactNode } from "react";
import { background } from "../background/background";
import { Border } from "../border/border";
import { boxShadow } from "../box-shadow/box-shadow";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { Icon, IconPath } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { text } from "../text/text";
import s from "./banner.module.css";

interface BannerType {
	iconPath: IconPath;
	iconCls: string;
	barCls: string;
}

interface Props {
	type: BannerType;
	children: ReactNode;
}

export const Banner = (props: Props): JSX.Element => (
	<div className="dark">
		<div
			className={[
				s.container,
				background.secondary,
				boxShadow.strong,
			].join(" ")}
		>
			<div className={[s.bar, props.type.barCls].join(" ")} />
			<DivPx size={8} />
			<div className={[s.icon, props.type.iconCls].join(" ")}>
				<Icon display="block" path={props.type.iconPath} />
			</div>
			<DivPx size={12} />
			<div className={s.children}>
				<div>{props.children}</div>
			</div>
			<DivPx size={12} />
			<Border color="strong" />
			<DivPx size={12} />
			<div className={s.button}>
				<Button
					size={Button.size.smallIcon}
					style={Button.style.flat}
					icon={coreIcons.cross}
					iconLabel="Close"
				/>
			</div>
		</div>
	</div>
);

Banner.colors = {
	positive: {
		iconPath: coreIcons.success,
		iconCls: text.greenStrong,
		barCls: background.greenStrong,
	} as BannerType,
	negative: {
		iconPath: coreIcons.error,
		iconCls: text.redStrong,
		barCls: background.redStrong,
	} as BannerType,
};
