import { storiesOf } from "@storybook/react";
import { DivPx } from "../div/div";
import { Banner } from "./banner";

storiesOf("Banner", module).add("Main", () => (
	<div>
		<Banner type={Banner.colors.positive}>
			Post published successfully!
		</Banner>
        <DivPx size={16} />
		<Banner type={Banner.colors.negative}>
			There was an error publishing your post
		</Banner>
	</div>
));
