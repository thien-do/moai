import { storiesOf } from "@storybook/react";
import { Tag } from "./tag";

storiesOf("Tag", module).add("Main", () => (
	<div className="space-x-4">
		<Tag type={Tag.types.neutral}>Neutral</Tag>
		<Tag type={Tag.types.success}>Success</Tag>
		<Tag type={Tag.types.highlight}>Highlight</Tag>
		<Tag type={Tag.types.failure}>Failure</Tag>
	</div>
));
