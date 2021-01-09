import { storiesOf } from "@storybook/react";
import { DivPx } from "../div/div";
import { Tag } from "./tag";

storiesOf("Tag", module).add("Main", () => (
	<div style={{ display: "flex" }}>
		<Tag type={Tag.types.neutral}>Neutral</Tag>
		<DivPx size={8} />
		<Tag type={Tag.types.success}>Success</Tag>
		<DivPx size={8} />
		<Tag type={Tag.types.highlight}>Highlight</Tag>
		<DivPx size={8} />
		<Tag type={Tag.types.failure}>Failure</Tag>
	</div>
));
