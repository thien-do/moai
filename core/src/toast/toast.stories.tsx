import { storiesOf } from "@storybook/react";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { ToastPane } from "./pane/pane";
import { toast } from "./toast";

storiesOf("Toast", module).add("Main", () => (
	<div>
		<Button onClick={() => toast(toast.types.success, "Hello")}>
			Hello
		</Button>
		<DivPx size={16} />
		<Button onClick={() => toast(toast.types.failure, "Hello")}>
			Hello
		</Button>
		<DivPx size={16} />
		<ToastPane type={ToastPane.types.success} close={() => {}}>
			Success Toast
		</ToastPane>
		<DivPx size={16} />
		<ToastPane type={ToastPane.types.failure} close={() => {}}>
			Failure Toast
		</ToastPane>
	</div>
));
