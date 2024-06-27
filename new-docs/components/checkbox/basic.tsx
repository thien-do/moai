import { ReactElement, useState } from "react";
import { Checkbox } from "../../../core/src";

// [!region usage]
export function CheckboxBasicExample(): ReactElement {
	const [checked, setChecked] = useState(false);
	return (
		<Checkbox
			checked={checked}
			setChecked={setChecked}
			children="Subscribe to newsletter"
		/>
	);
}
// [!endregion usage]
