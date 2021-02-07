import { background, Switcher } from "@moai/core";
import { useEffect, useState } from "react";

export const ToolbarBackground = (): JSX.Element => {
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
