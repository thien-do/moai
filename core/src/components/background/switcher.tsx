import { useEffect, useState } from "react";
import { Switcher } from "../switcher/switcher";
import { background } from "./background";

export const BackgroundSwitcher = (): JSX.Element => {
	const [strong, setStrong] = useState(true);

	useEffect(() => {
		const cls = strong ? background.strong : background.weak;
		document.body.classList.add(cls);
		return () => document.body.classList.remove(cls);
	}, [strong]);

	return (
		<Switcher<boolean>
			setValue={setStrong}
			value={strong}
			options={[
				{ value: true, label: "Strong" },
				{ value: false, label: "Weak" },
			]}
		/>
	);
};
