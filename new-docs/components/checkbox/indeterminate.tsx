import { ReactElement, useRef } from "react";
import { Button, Checkbox } from "../../../core/src";

// [!region imperative]
export function CheckboxIndeterminateImperativeExample(): ReactElement {
	const ref = useRef<HTMLInputElement>(null);

	const toggle = () => {
		const input = ref.current;
		if (input === null) throw Error("Input is null");
		input.indeterminate = !input.indeterminate;
	};

	return (
		<div>
			<Button onClick={toggle} children="Toggle indeterminate" />
			<div style={{ height: 8 }} />
			<Checkbox forwardedRef={ref} children="Select all" />
		</div>
	);
}
// [!endregion imperative]

// [!region declarative]
export function CheckboxIndeterminateDeclarativeExample(): ReactElement {
	return <Checkbox indeterminate={true} children="Select all" />;
}
// [!endregion declarative]
