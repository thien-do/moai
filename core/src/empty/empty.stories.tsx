import { storiesOf } from "@storybook/react";
import { Empty } from "../empty/empty";
import { Button } from "../button/button";
import { Dialog } from "../dialog/dialog";

storiesOf("Empty", module).add("Main", () => (
	<div>
		<Empty message="Error connection, please wait." />
		<br />
		<Empty
			message="Error connection, please try again later"
			action={
				<Button
					onClick={() => {
						Dialog.alert("Retry the connection !!!");
					}}
					highlight
				>
					Retry
				</Button>
			}
		/>
	</div>
));
