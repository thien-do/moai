import { ReactElement } from "react";
import { APIData, APIReference } from "../../utils/api/api";

export function StepsAPI(): ReactElement {
	return <APIReference data={api} />;
}

const api: APIData[] = [
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
