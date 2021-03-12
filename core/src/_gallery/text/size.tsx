import { Input, Button, ButtonGroup, coreIcons, DivPx } from "..";
import s from "../styles.module.css";

const ss = Input.sizes;

const Group = ({ disabled }: { disabled: boolean }): JSX.Element => {
	const d = { disabled };
	const input = <Input {...d} placeholder="With button" />;
	const button = <Button {...d} iconLabel="Search" icon={coreIcons.search} />;
	return (
		<ButtonGroup
			fill
			children={[
				{ fill: true, element: input },
				{ fill: false, element: button },
			]}
		/>
	);
};

export const GalleryTextSize = (): JSX.Element => (
	<div className={s.flex}>
		<div>
			<Input size={ss.large} placeholder="Large" />
			<DivPx size={8} />
			<Input size={ss.medium} placeholder="Medium" />
			<DivPx size={8} />
			<Input size={ss.small} placeholder="Small" />
		</div>
		<DivPx size={8} />
		<div>
			<Input icon={coreIcons.search} placeholder="With icon" />
			<DivPx size={8} />
			<Group disabled={false} />
			<DivPx size={8} />
			<Group disabled={true} />
		</div>
	</div>
);
