import { ProgressCircle } from "@moai/core";

export const GalleryProgress = (): JSX.Element => (
	<div className="flex space-x-8">
		<div className="space-y-8">
			<div className="flex space-x-8">
				<ProgressCircle size={16} value={null} color="highlight" />
				<ProgressCircle size={16} value={null} />
			</div>
			<div className="flex space-x-8">
				<ProgressCircle size={16} value={0} />
				<ProgressCircle size={16} value={0.25} />
				<ProgressCircle size={16} value={0.5} />
				<ProgressCircle size={16} value={0.75} />
				<ProgressCircle size={16} value={1} />
			</div>
			<div className=""></div>
		</div>
		<div className="flex space-x-8 space-x-reverse flex-row-reverse">
			<ProgressCircle size={32} value={0.6} />
			<ProgressCircle size={24} value={0.6} />
			<ProgressCircle size={16} value={0.6} />
			<ProgressCircle size={12} value={0.6} />
		</div>
	</div>
);
