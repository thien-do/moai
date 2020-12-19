import { useState } from "react";
import { Button, Switcher } from "../../../core/src";

const Theme = () => {
	const [value, setValue] = useState("Auto");
	return (
		<Switcher
			options={["Light", "Auto", "Dark", "Disabled"].map((id) => ({
				value: id,
				label: id,
				disabled: id === "Disabled",
			}))}
			value={value}
			setValue={setValue}
		/>
	);
};

const Busy = (): JSX.Element => {
	const [busy, setBusy] = useState(false);
	return (
		<Button
			children="Click to Load"
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
			children="Click to Toggle"
			selected={selected}
			onClick={() => setSelected(!selected)}
		/>
	);
};

export const GalleryButtonSize = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<Toggle />
			<Busy />
		</div>
		<div className="flex space-x-8">
			<Button
				target="_blank"
				href="https://moai.xyz"
				children="Link to moai.xyz"
			/>
		</div>
		<div>
			<Button fill children="Full-width Button" />
		</div>
		<div className="flex space-x-8">
			<Theme />
		</div>
	</div>
);
