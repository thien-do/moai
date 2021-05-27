import { ButtonGroupItemProps } from "@moai/core";
import { GoSearch } from "react-icons/go";
import { Button, ButtonGroup, Input } from "../../core/src";
import { Shot } from "./shot/shot";
import s from "./styles.module.css";
import { MATERIALS } from "./table/robots";

const ss = Input.sizes;

const Group = ({ disabled }: { disabled: boolean }): JSX.Element => {
	const d = { disabled };
	const input = <Input {...d} placeholder="With button" />;
	const button = <Button {...d} iconLabel="Search" icon={GoSearch} />;
	const children: ButtonGroupItemProps[] = [
		{ fill: true, element: input },
		{ fill: false, element: button },
	];
	return <ButtonGroup fill children={children} />;
};

export const GalleryInput2 = (): JSX.Element => (
	<Shot>
		<div className={s.cols}>
			<div className={[s.rows, s.col].join(" ")}>
				<Input
					placeholder="Autocomplete"
					list={{ id: "materials", values: MATERIALS }}
				/>
				<Input size={ss.large} placeholder="Large" />
				<Input size={ss.medium} placeholder="Medium" />
				<Input size={ss.small} placeholder="Small" />
			</div>
			<div className={[s.rows, s.col].join(" ")}>
				<Input type="date" />
				<Input icon={GoSearch} placeholder="With icon" />
				<Group disabled={false} />
				<Group disabled={true} />
			</div>
		</div>
	</Shot>
);
