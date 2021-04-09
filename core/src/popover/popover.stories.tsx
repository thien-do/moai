import { Placement } from "@popperjs/core";
import React from "react";
import { Button } from "../button/button";
import { Radio } from "../radio/radio";
import { DivPx } from "../div/div";
import { Icon } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { _Story } from "../_story";
import { Popover } from "./popover";
import { useState } from "react";

export default {
	title: "Components/Popover",
	component: Popover,
};

export const Primary = (): JSX.Element => {
	return (
		<div style={{ width: "fit-content" }}>
			<Popover
				content={() => <div style={{ padding: 16 }}>Content</div>}
				target={(popover) => (
					<Button
						onClick={() => popover.toggle()}
						selected={popover.opened}
						children="Toggle"
					/>
				)}
			/>
		</div>
	);
};

_Story.fixPrimary(Primary);

export const Positioning = (): JSX.Element => {
	const [placement, setPlacement] = useState<Placement>("bottom");
	const placements: Placement[] = [
		"top",
		"top-start",
		"top-end",

		"right",
		"right-start",
		"right-end",

		"bottom",
		"bottom-start",
		"bottom-end",

		"left",
		"left-start",
		"left-end",

		"auto",
		"auto-start",
		"auto-end",
	];

	return (
		<div>
			<div
				style={{
					height: 120,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div style={{ width: "fit-content" }}>
					<Popover
						placement={placement}
						content={() => {
							return (
								<div style={{ padding: 16 }}>
									Position: {placement}
								</div>
							);
						}}
						target={(popover) => (
							<Button
								onClick={() => popover.toggle()}
								selected={popover.opened}
								children="Click me!"
							/>
						)}
					/>
				</div>
				<DivPx size={8} />
				<div children={"Current position: " + placement} />
			</div>
			Change Placement:
			<DivPx size={8} />
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{placements.map((item, index) => (
					<div style={{ padding: 4, width: "33%" }} key={index}>
						<Radio
							defaultChecked={item === placement}
							setValue={(value) =>
								setPlacement(value as Placement)
							}
							name="popover-placement"
							children={item}
							value={item}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

_Story.desc(Positioning)(`
A Popover is positioned in relation to its target. It can appear at the \`top\`, \`right\`, \`bottom\` or \`left\` of the trigger with an addtional two more positions avaiable for each location: \`start\` and \`end\`.

The \`auto\` placements places the Popover on the side with the most avaiable space.

[Reference](https://popper.js.org/docs/v2/constructors/#options) to the Popper's Placement type.

Default value: \`bottom\`
`);

export const Customization = (): JSX.Element => {
	const StatBlock = () => {
		return (
			<div style={{ padding: 16 }}>
				<Icon path={coreIcons.search} display="inline" />
				<strong style={{ marginLeft: 8 }} children="moai/moaijs" />
				<DivPx size={8} />
				<div
					style={{ opacity: 0.8 }}
					children="A React component library, where buttons look like buttons 🗿"
				/>
				<DivPx size={8} />
				<div style={{ display: "flex", alignItems: "center" }}>
					<div
						style={{
							marginRight: 8,
							width: 8,
							height: 8,
							backgroundColor: "#2b7489",
							borderRadius: 4,
						}}
					/>
					TypeScript
					<DivPx size={16} />
					moaijs.com
				</div>
			</div>
		);
	};

	return (
		<div style={{ width: "fit-content" }}>
			<Popover
				placement="top-start"
				content={() => <StatBlock />}
				target={(popover) => (
					<Button
						onClick={() => {
							popover.toggle();
						}}
						children="moaijs/moai"
					/>
				)}
			/>
		</div>
	);
};

_Story.desc(Customization)(`
You can customize how the content inside Popover rendering. The Menu component also customize from Popover.
`);
