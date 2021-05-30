import { Meta } from "@storybook/react";
import { background, text } from "../../../core/src";
import { Utils } from "../utils/utils";
import { ColorSample } from "./sample";

const meta: Meta = {
	title: "Patterns/Color",
};

Utils.page.pattern(meta, {
	desc: `
yo
`,
});

export default meta;

export const Primary = (): JSX.Element => <div>Skipped</div>;

export const Color = (): JSX.Element => (
	<div>
		<div>
			{[
				[text.normal, "Normal"],
				[text.muted, "Muted"],
				[text.highlightStrong, "Highlight Strong"],
				[text.highlightWeak, "Highlight Weak"],
				[text.successStrong, "Success Strong"],
				[text.successWeak, "Success Weak"],
				[text.failureStrong, "Failure Strong"],
				[text.failureWeak, "Failure Weak"],
			].map((option) => (
				<div
					key={option[0]}
					style={{ display: "flex", alignItems: "center" }}
				>
					<div style={{ width: 160 }}>{option[1]}</div>
					<ColorSample
						fore={option[0]}
						back={background.strong}
						text="Aa"
					/>
					<ColorSample
						fore={option[0]}
						back={background.weak}
						text="Aa"
					/>
					<div className="dark">
						<ColorSample
							fore={option[0]}
							back={background.strong}
							text="Aa"
						/>
					</div>
					<div className="dark">
						<ColorSample
							fore={option[0]}
							back={background.weak}
							text="Aa"
						/>
					</div>
				</div>
			))}
		</div>
	</div>
);
