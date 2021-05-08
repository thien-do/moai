import { Meta } from "@storybook/react";
import React from "react";
import { Button } from "../button/button";
import { Dialog } from "../dialog/dialog";
import { EmptyState } from "../empty/empty";

export default {
	title: "Draft/Empty",
	component: EmptyState,
} as Meta;

export const Primary = (): JSX.Element => (
	<div>
		<EmptyState message="Error connection, please wait." />
		<br />
		<EmptyState
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
);
