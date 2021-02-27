import { background } from "../background/background";
import { border } from "../border/border";
import { Icon } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { text } from "../text/text";
import s from "./step.module.css";

interface Step {
	title: string;
}

interface Props {
	steps: Step[];
	current: number;
}

interface StepProps {
	step: Step;
	index: number;
	current: Props["current"];
}

const Title = (props: StepProps): JSX.Element => (
	<div className={s.step}>
		<div
			className={[
				s.icon,
				props.index <= props.current
					? s.done
					: [s.notDone, text.muted].join(" "),
			].join(" ")}
		>
			{props.index < props.current ? (
				<Icon path={coreIcons.tick} size={16} display="block" />
			) : (
				<span>{props.index + 1}</span>
			)}
		</div>
		<span
			className={[
				s.title,
				props.index === props.current ? s.current : "",
				props.index > props.current ? text.muted : "",
			].join(" ")}
			children={props.step.title}
		/>
	</div>
);

const Divider = (): JSX.Element => (
	<div className={[s.divider, border.strong].join(" ")} />
);

export const Steps = (props: Props): JSX.Element => {
	const children: JSX.Element[] = [];
	props.steps.forEach((step, index) => {
		children.push(
			<Title
				key={`${index}-title`}
				step={step}
				index={index}
				current={props.current}
			/>,
			<Divider key={`${index}-divider`} />
		);
	});
	children.pop();
	return (
		<div className={s.wrapper}>
			<div className={s.container} children={children} />
		</div>
	);
};
