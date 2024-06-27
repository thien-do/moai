import { ReactElement } from "react";
import { APIData, APIReference } from "../../utils/api/api";

export function MenuAPI(): ReactElement {
	return <APIReference data={api} />;
}

const api: APIData[] = [
	{
		prop: "items",
		description: {
			type: "MenuItemProps[]",
			description: "",
		},
		required: true,
	},
	{
		prop: "onEsc",
		description: {
			type: "(() => void)",
			description: "",
		},
	},
];
