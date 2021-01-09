import { useState } from "react";
import { Button, Switcher } from "@moai/core";

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

export const Button2Gallery = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<Toggle />
			<Busy />
			<Button target="_blank" href="https://moai.xyz" children="Link" />
		</div>
		<Theme fill={false} />
		<Theme fill={true} />
		<Button fill children="Full-width Button" />
	</div>
);
