import { Icon, Tooltip } from "../../../core/src";
import { icons } from "../../../icon/src";

const IconBox = ({ name }: { name: string }): JSX.Element => (
	<Tooltip content={name} placement="bottom">
		<div
			className="py-16 px-8 flex flex-col items-center space-y-8 text-center"
			style={{ width: 96 }}
		>
			<Icon display="block" path={icons[name]} />
			<div className="truncate w-full">{name}</div>
		</div>
	</Tooltip>
);

export const GalleryIcon = () => (
	<div className="flex flex-wrap">
		{Object.keys(icons).map((key) => (
			<IconBox key={key} name={key} />
		))}
	</div>
);
