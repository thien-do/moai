import * as M from "@moai/core";
import { icons } from "@moai/icon";
import { SampleColors } from "./samples";

const base: Partial<M.InputProps> = {
	defaultValue: "",
	placeholder: "Search",
};

interface SizeProps {
	size: [M.InputSize, M.ButtonSize];
}

const WithButton = ({ size }: SizeProps): JSX.Element => {
	const input = <M.Input {...base} size={size[0]} />;
	const button = (
		<M.Button icon={icons.search} iconLabel="Search" size={size[1]} />
	);
	const children: M.ButtonGroupItemProps[] = [
		{ fill: true, element: input },
		{ fill: false, element: button },
	];
	return <M.ButtonGroup fill children={children} />;
};

const Column = ({ size }: SizeProps): JSX.Element => {
	const base2: Partial<M.InputProps> = { ...base, size: size[0] };
	return (
		<div className="space-y-8 flex-1">
			<div style={{ minHeight: 32 }}>
				<M.Input {...base2} type="password" defaultValue="password" />
			</div>
			<div style={{ minHeight: 32 }}>
				<M.Input {...base2} icon={icons.search} />
			</div>
			<div style={{ minHeight: 32 }}>
				<WithButton size={size} />
			</div>
			<div style={{ minHeight: 32 }}>
				<M.Input
					{...base2}
					placeholder="Suggest"
					list={{ id: "sample-colors", values: SampleColors }}
				/>
			</div>
		</div>
	);
};
export const GalleryInput2 = (): JSX.Element => (
	<div className="flex space-x-8">
		<Column size={[M.Input.size.medium, M.Button.size.medium]} />
		<Column size={[M.Input.size.small, M.Button.size.small]} />
	</div>
);
