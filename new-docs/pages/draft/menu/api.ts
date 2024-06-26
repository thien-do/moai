import { APIData } from "../../../utils/api/api";

export const MenuAPI: APIData[] = [
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
