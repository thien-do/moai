import * as React from "react";
import { DivPx } from "../../div/div";
import { Paragraph, Strong, text } from "../../text/text";

export type DialogMessageChildren = string | React.ReactNode;

type Tuple = [React.ReactNode, React.ReactNode];

const isTuple = (target: DialogMessageChildren): target is Tuple => {
	return Array.isArray(target) && target.length === 2;
};

interface Props {
	children: DialogMessageChildren;
}

export const DialogMessage = (props: Props) => {
	if (props.children === "string") {
		return <Paragraph children={props.children} />;
	}
	if (isTuple(props.children)) {
		const [title, description] = props.children;
		return (
			<>
				<div className={[text.big, text.strong].join(" ")}>
					<Paragraph children={title} />
				</div>
				<DivPx size={8} />
				<Paragraph children={description} />
			</>
		);
	}
	return <>{props.children}</>;
};
