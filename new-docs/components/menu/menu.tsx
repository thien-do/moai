import { ReactElement } from "react";
import { Menu } from "../../../core/src";

export function MenuExample(): ReactElement {
	return (
		<Menu
			items={[
				{ label: "Foo", fn: () => window.alert("foo") },
				{ label: "Bar", fn: () => window.alert("bar") },
				{ label: "Baz", disabled: true },
			]}
		/>
	);
}
