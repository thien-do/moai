import * as M from "@moai/core";
import { Search } from "@moai/icon/bp";
import COLORS from "./samples/colors.json";

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
		<M.Button icon={Search} iconLabel="Search" size={size[1]} />
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
				<M.Input {...base2} icon={Search} />
			</div>
			<div style={{ minHeight: 32 }}>
				<WithButton size={size} />
			</div>
			<div style={{ minHeight: 32 }}>
				<M.Input
					{...base2}
					placeholder="Suggest"
					list={{ id: "sample-colors", values: COLORS }}
				/>
			</div>
		</div>
	);
};
export const Input2Gallery = (): JSX.Element => (
	<div className="flex space-x-8">
		<Column size={[M.Input.sizes.medium, M.Button.sizes.medium]} />
		<Column size={[M.Input.sizes.small, M.Button.sizes.small]} />
	</div>
);
