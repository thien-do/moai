import { useState } from "react";
import * as Go from "react-icons/go";
import { Button, ButtonProps } from "../../../core/src";
import { Shot } from "../shot/shot";

const ss = Button.sizes;
const icon = Button.sizes.mediumIcon;

const Row1 = (props: ButtonProps): JSX.Element => (
	<div style={{ display: "flex", gap: 8 }}>
		<Button {...props} highlight icon={Go.GoChevronLeft} children="Back" />
		<Button {...props} icon={Go.GoChevronRight} children="Next" />
		<Button {...props} icon={Go.GoSearch} iconLabel="Search" />
		<Button {...props} icon={Go.GoSearch} iconLabel="Search" size={icon} />
	</div>
);

const Busy = (): JSX.Element => {
	const [busy, setBusy] = useState(false);
	const fetch = () => {
		setBusy(true);
		window.setTimeout(() => void setBusy(false), 1000);
	};
	return <Button minWidth children="Fetch" busy={busy} onClick={fetch} />;
};

const Toggle = (): JSX.Element => {
	const [selected, setSelected] = useState(false);
	const toggle = () => setSelected(!selected);
	return (
		<Button
			minWidth
			children="Toggle"
			selected={selected}
			onClick={toggle}
		/>
	);
};

const Row2 = (): JSX.Element => (
	<div style={{ display: "flex", gap: 8 }}>
		<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
			<Button icon={Go.GoPlus} size={ss.large} children="Large" />
			<Button icon={Go.GoPlus} size={ss.medium} children="Medium" />
			<Button icon={Go.GoPlus} size={ss.small} children="Small" />
		</div>
		<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
			<Toggle />
			<Busy />
			<Button
				target="_blank"
				href="https://moaijs.com"
				children="Link"
				minWidth
			/>
		</div>
	</div>
);

export const ButtonShot2 = (): JSX.Element => (
	<Shot>
		<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
			<Row1 />
			<Row1 disabled />
			<Row2 />
		</div>
	</Shot>
);
