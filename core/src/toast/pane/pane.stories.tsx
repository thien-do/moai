import { storiesOf } from "@storybook/react";
import { DivPx } from "../../div/div";
import { ToastPane } from "./pane";

storiesOf("ToastPane", module).add("Main", () => (
	<div>
		<ToastPane type={ToastPane.type.success}>
			Post published successfully!
		</ToastPane>
        <DivPx size={16} />
		<ToastPane type={ToastPane.type.error}>
			There was an error publishing your post
		</ToastPane>
	</div>
));
