import { APIData } from "../../../utils/api/api";

export const StepsAPI: APIData[] = [
	{
		prop: "steps",
		description: {
			type: "Step[]",
			description: "",
		},
		required: true,
	},
	{
		prop: "current",
		description: {
			type: "number",
			description: "",
		},
		required: true,
	},
];
