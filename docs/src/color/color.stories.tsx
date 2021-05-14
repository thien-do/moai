import { Meta } from "@storybook/react";
import { background } from "../../src/background/background";
import { text } from "../../src/text/text";
import { _Story } from "../../src/_story";
import { ColorSample } from "./sample";

export default {
	title: "Foundation/Color",
	parameters: {
		docs: {
			page: _Story.page.noPrimary,
			description: {
				component: `
yo
`,
			},
		},
	},
} as Meta;

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
