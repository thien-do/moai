import { DivPx } from "@moai/core/src";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	title: string;
}

export const GallerySection = (props: Props): JSX.Element => (
	<div className="sm:flex">
		<div className="flex-initial" style={{ width: 200 }}>
			<h2
				className="text-xl font-semibold py-4 leading-24"
				children={props.title}
			/>
		</div>
		<DivPx size={16} />
		<div
			className="flex-1 overflow-hidden grid gap-16 p-8 -m-8"
			style={{
				gridTemplateColumns: "repeat(auto-fill, min(320px, 100%))",
				maxWidth: "calc(320px * 3 + 16px * 2 + 8px * 2)"
			}}
			children={props.children}
		/>
	</div>
);
