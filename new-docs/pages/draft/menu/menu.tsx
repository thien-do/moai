import { Menu } from "@moai/core/src";

export const MenuExample = (): JSX.Element => {
	return (
		<Menu
			items={[
				{ label: "Foo", fn: () => window.alert("foo") },
				{ label: "Bar", fn: () => window.alert("bar") },
				{ label: "Baz", disabled: true },
			]}
		/>
	);
};
