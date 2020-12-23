import { Icon, IconPath, Select, SelectOption } from "@moai/core";
import { bp } from "@moai/icon/bp";
import { hro } from "@moai/icon/hro";
import { hrs } from "@moai/icon/hrs";
import { useState } from "react";

const Sample = ({ path }: { path: IconPath }): JSX.Element => (
	<div className="p-8">
		<Icon display="block" path={path} />
	</div>
);

const options: SelectOption<object>[] = [
	{ id: "bp", label: "Blueprint", value: bp },
	{ id: "hro", label: "Hero Outline", value: hro },
	{ id: "hrs", label: "Hero Solid", value: hrs },
];

export const GalleryIcon = () => {
	const [group, setGroup] = useState<object>(bp);
	return (
		<div className="space-y-16">
			<div className="space-x-8 flex items-center">
				<Select value={group} setValue={setGroup} options={options} />
				<p>Moai works with any icon set!</p>
			</div>
			<div className="flex flex-wrap -m-8">
				{Object.keys(group).map((key) => (
					<Sample key={key} path={(group as any)[key]} />
				))}
			</div>
		</div>
	);
};
