import { storiesOf } from "@storybook/react";
import { Button } from "../button/button";
import { Popover } from "./popover";

storiesOf("Popover", module).add("Default", () => (
	<div style={{ width: "fit-content" }}>
		<Popover
			content={() => <div>Content</div>}
			target={(popover) => (
				<Button
					onClick={() => popover.toggle()}
					selected={popover.opened}
					children="Toggle"
				/>
			)}
		/>
	</div>
));
