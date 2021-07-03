import { ProgressCircle } from "../../core/src";
import { Shot } from "./shot/shot";
import s from "./styles.module.css";

export const Values = (): JSX.Element => (
	<div className={s.cols}>
		<ProgressCircle size={16} value={0} />
		<ProgressCircle size={16} value={0.25} />
		<ProgressCircle size={16} value={0.5} />
		<ProgressCircle size={16} value={0.75} />
		<ProgressCircle size={16} value={1} />
	</div>
);

export const Sizes = (): JSX.Element => (
	<div className={s.cols}>
		<ProgressCircle size={32} value={0.6} />
		<ProgressCircle size={24} value={0.6} />
		<ProgressCircle size={16} value={0.6} />
		<ProgressCircle size={12} value={0.6} />
	</div>
);

export const Colors = (): JSX.Element => (
	<div className={s.cols}>
		<ProgressCircle
			size={16}
			value="indeterminate"
			color={ProgressCircle.colors.highlight}
		/>
		<ProgressCircle size={16} value="indeterminate" />
		<div
			style={{ background: "var(--highlight-5)", padding: 4, margin: -4 }}
		>
			<ProgressCircle
				size={16}
				value="indeterminate"
				color={ProgressCircle.colors.inverse}
			/>
		</div>
	</div>
);

export const GalleryProgress = (): JSX.Element => (
	<Shot>
		<div className={s.cols}>
			<div className={s.rows}>
				<Colors />
				<Values />
			</div>
			<Sizes />
		</div>
	</Shot>
);
