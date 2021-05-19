import { useState } from "react";
import { DivPx, Radio } from "../core/src";
import { Utils } from "./utils";

export default {
	title: "Components/Radio",
	component: Radio,
	argTypes: {
		value: Utils.arg("text"),
		children: Utils.arg(null),
		name: Utils.arg(null),
		disabled: Utils.arg("boolean"),
		checked: Utils.arg("boolean"),
		setValue: Utils.arg(null),
		defaultChecked: Utils.arg(null),
		forwardedRef: Utils.arg(null),
	},
};

interface Props {
	value: string;
	disabled: boolean;
	checked: boolean;
}

export const Primary = (props: Props): JSX.Element => {
	if (props.value === undefined) {
		props.value = "1";
	}

	return (
		<>
			<Radio
				defaultChecked
				checked={props.checked}
				disabled={props.disabled}
				name="radio"
				value={props.value}
			>
				Radio Button
			</Radio>
			<DivPx size={8} />
			Current value: {props.value}
		</>
	);
};

Utils.fixPrimary(Primary);

type Character = {
	id: string;
	name: string;
	class: string;
};

export const Group = (): JSX.Element => {
	const chars: Character[] = [
		{
			id: "kiljaeden",
			name: "Kil'jaeden",
			class: "Warlock",
		},
		{
			id: "nerzhul",
			name: "Ner'zhul",
			class: "Shaman",
		},
		{
			id: "arthas",
			name: "Arthas",
			class: "Paladin",
		},
	];
	const [selected, setSelected] = useState<Character>(chars[0]);

	return (
		<>
			<span>Favorite character</span>
			{chars.map((char) => (
				<div key={char.id} style={{ margin: "4px 0" }}>
					<Radio
						setValue={(value) =>
							setSelected(
								chars.filter((char) => char.id === value)[0]
							)
						}
						checked={char.id === selected?.id}
						name="character"
						children={char.name}
						value={char.id}
					/>
				</div>
			))}
			<br />
			Your select:{" "}
			{selected ? `${selected.name} - ${selected.class}` : "null"}
		</>
	);
};

Utils.desc(Group)(
	`Radio buttons allow users to select a single option from a list of options.
All possible options are exposed up front for users to compare.`
);
