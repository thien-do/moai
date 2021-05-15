import { useState } from "react";
import { Button, Switcher, DivPx } from "../../../core/src";
import s from "../styles.module.css";

const Theme = ({ fill }: { fill: boolean }): JSX.Element => {
	const [value, setValue] = useState("Auto");
	return (
		<Switcher
			options={["Light", "Auto", "Dark"].map((id) => ({
				value: id,
				label: id,
				disabled: id === "Disabled",
			}))}
			value={value}
			setValue={setValue}
			fill={fill}
		/>
	);
};

const Busy = (): JSX.Element => {
	const [busy, setBusy] = useState(false);
	return (
		<Button
			children="Fetch"
			busy={busy}
			onClick={() => {
				setBusy(true);
				window.setTimeout(() => {
					setBusy(false);
				}, 1000);
			}}
		/>
	);
};

const Toggle = (): JSX.Element => {
	const [selected, setSelected] = useState(false);
	return (
		<Button
			children="Toggle"
			selected={selected}
			onClick={() => setSelected(!selected)}
		/>
	);
};

export const GalleryButtonFunction = (): JSX.Element => (
	<div>
		<div className={s.flex}>
			<Toggle />
			<DivPx size={8} />
			<Busy />
			<DivPx size={8} />
			<Button target="_blank" href="https://moai.xyz" children="Link" />
		</div>
		<DivPx size={8} />
		<Theme fill={false} />
		<DivPx size={8} />
		<Theme fill={true} />
		<DivPx size={8} />
		<Button fill children="Full-width Button" />
	</div>
);
