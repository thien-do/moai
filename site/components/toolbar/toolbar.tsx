import { border, background, DivPx, Switcher } from "@moai/core";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import s from "./toolbar.module.css";

export const Toolbar = (): JSX.Element => {
	const { theme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);
	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	return (
		<div
			className={[s.container, border.weak, background.strong].join(" ")}
		>
			<span>Theme:</span>
			<DivPx size={16} />
			{mounted ? (
				<Switcher<string>
					value={theme ?? "system"}
					setValue={setTheme}
					options={[
						{ value: "light", label: "Light" },
						{ value: "system", label: "System" },
						{ value: "dark", label: "Dark" },
					]}
				/>
			) : (
				// A dummy Switcher to avoid layout shift
				<Switcher<string>
					value={""}
					setValue={() => void 0}
					options={[
						{ value: "light", label: "Light" },
						{ value: "system", label: "System" },
						{ value: "dark", label: "Dark" },
					]}
				/>
			)}
		</div>
	);
};
