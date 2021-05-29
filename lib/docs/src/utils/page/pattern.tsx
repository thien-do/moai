import { Description, Stories, Title } from "@storybook/addon-docs/blocks";
import { Meta } from "@storybook/react";

const PatternPage = (): JSX.Element => (
	<div>
		<Title />
		<Description />
		<Stories />
	</div>
);

export const utilsPagePattern = (meta: Meta): void => {
	meta.parameters ??= {};
	meta.parameters.docs ??= {};
	meta.parameters.docs.page = () => <PatternPage />;
};
