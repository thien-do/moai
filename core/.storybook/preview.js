import "../src";

export const decorators = [
	(Story) => (
		<div style={{ margin: "3em" }}>
			<Story />
		</div>
	),
];

export const parameters = {};
