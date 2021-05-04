import { useState } from "react";
import { Radio } from "./radio";
import { DivPx } from ".."
import { _Story } from "../_story";

export default {
	title: "Components/Radio",
	component: Radio,
	argTypes: {
		value: _Story.arg("text"),
		children: _Story.arg(null),
		name: _Story.arg(null),
		disabled: _Story.arg("boolean"),
		checked: _Story.arg("boolean"),
		setValue: _Story.arg(null),
		defaultChecked: _Story.arg(null),
		forwardedRef: _Story.arg(null),
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

_Story.fixPrimary(Primary);

type Character = {
	id: string;
	name: string;
	class: string;
};

export const Group = (): JSX.Element => {
	const [selected, setSelected] = useState<Character>(null);
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

_Story.desc(Group)(
`Radio buttons allow users to select a single option from a list of options.
All possible options are exposed up front for users to compare.`
);
