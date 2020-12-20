import { Icon, Tooltip } from "../../../core/src";
import { icons } from "../../../icon/src";

const IconBox = ({ name }: { name: string }): JSX.Element => (
	<div
		className="py-16 px-8 flex flex-col items-center space-y-8 text-center"
		style={{ width: 80 }}
	>
		<Icon display="block" path={icons[name]} />
		<Tooltip content={name} placement="bottom">
			<div className="truncate w-full">{name}</div>
		</Tooltip>
	</div>
);

export const GalleryIcon = () => (
	<div className="flex flex-wrap">
		{Object.keys(icons).map((key) => (
			<IconBox key={key} name={key} />
		))}
	</div>
);
