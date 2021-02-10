import { Tag } from "@moai/core/src";

export const TagGallery = (): JSX.Element => (
	<div className="space-y-8">
		<div>
			<span>Tag is </span>
			<Tag color={Tag.colors.gray}>inline</Tag>
		</div>
		<div className="flex flex-wrap">
			{Object.keys(Tag.colors).map((color) => (
				<div key={color} className="p-4">
					<Tag color={Tag.colors[color]} children={color} />
				</div>
			))}
		</div>
	</div>
);
