import { Meta } from "@storybook/react/types-6-0";
import { Gallery } from "./gallery";

export default {
	title: "Gallery",
	// component: DateInput,
} as Meta;

export const Primary = (): JSX.Element => <Gallery />;
