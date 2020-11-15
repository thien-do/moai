import * as React from "react";
import { DivPx } from "../../div/div";
import { Paragraph, Strong } from "../../text/text";

export type DialogMessage = string | React.ReactNode;

type Tuple = [React.ReactNode, React.ReactNode];

const isTuple = (target: DialogMessage): target is Tuple => {
	return Array.isArray(target) && target.length === 2;
};

interface Props {
	children: DialogMessage;
}

export const DialogMessageC = (props: Props) => {
	if (props.children === "string") {
		return <Paragraph children={props.children} />;
	}
	if (isTuple(props.children)) {
		const [title, description] = props.children;
		return (
			<>
				<Paragraph children={<Strong children={title} />} />
				<DivPx size={8} />
				<Paragraph children={description} />
			</>
		);
	}
	return <>{props.children}</>;
};
