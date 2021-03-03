import { useEffect, useState } from "react";
import { Switcher, background } from "..";

export const BackgroundSwitcher = (): JSX.Element => {
	const [strong, setStrong] = useState(true);

	useEffect(() => {
		const cls = strong ? background.strong : background.weak;
		const ls = window.document.body.classList;
		ls.add(cls);
		return () => ls.remove(cls);
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
