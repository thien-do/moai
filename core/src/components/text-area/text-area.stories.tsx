import { _Story } from "../../_story";
import { DivPx } from "../div/div";
import { TextArea } from "./text-area";

export default {
	title: "Components/TextArea",
	component: TextArea,
};

export const Primary = () => {
	return (
		<div style={{ width: 300 }}>
			<TextArea />
			<DivPx size={8} />
			<TextArea placeholder="Placeholder" />
			<DivPx size={8} />
			<TextArea readOnly value="Read-only" />
			<DivPx size={8} />
			<TextArea disabled />
		</div>
	);
};
