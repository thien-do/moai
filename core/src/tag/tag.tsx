import { border } from "../border/border";
import s from "./tag.module.css";

export interface TagType {
	cls: string;
}

interface Props {
	children: string;
	type: TagType;
}

export const Tag = ({ children, type }: Props): JSX.Element => (
	<span
		className={[border.radius, s.container, type.cls].join(" ")}
		children={children}
	/>
);

Tag.types = {
	neutral: { cls: s.neutral } as TagType,
	highlight: { cls: s.highlight } as TagType,
	success: { cls: s.success } as TagType,
	failure: { cls: s.failure } as TagType,
};
