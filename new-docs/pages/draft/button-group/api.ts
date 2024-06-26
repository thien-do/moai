import { APIData } from "../../../utils/api/api";

export const ButtonGroupAPI: APIData[] = [
	{
		prop: "skipChildTypeCheck",
		description: {
			type: "boolean",
			description: "",
		},
	},
	{
		prop: "fill",
		description: {
			type: "boolean",
			description:
				"If set to true, the button's width is 100% of its container.",
		},
	},
];
