import { Description, Stories, Title } from "@storybook/addon-docs/blocks";
import { Meta } from "@storybook/react";

const PatternPage = (): JSX.Element => (
	<div>
		<Title />
		<Description />
		<Stories />
	</div>
);

interface Props {
	desc: string;
}

export const utilsPagePattern = (meta: Meta, props: Props): void => {
	meta.parameters ??= {};
	meta.parameters.docs ??= {};
	meta.parameters.docs.page = () => <PatternPage />;
	meta.parameters.docs.description ??= {};
	meta.parameters.docs.description.component = props.desc;
};
