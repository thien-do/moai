import { DivPx, background, ProgressCircle } from "..";
import s from "../styles.module.css";

const HighlightIndeterminate = (): JSX.Element => (
	<div
		className={[background.highlight, s.p4].join(" ")}
		style={{ margin: "-4px" }}
	>
		<ProgressCircle
			size={16}
			value="indeterminate"
			color={ProgressCircle.colors.inverse}
		/>
	</div>
);

export const GalleryFeedbackProgress = (): JSX.Element => (
	<div className={s.flex}>
		<div>
			<div className={s.flex}>
				<ProgressCircle
					size={16}
					value="indeterminate"
					color={ProgressCircle.colors.highlight}
				/>
				<DivPx size={8} />
				<ProgressCircle size={16} value="indeterminate" />
				<DivPx size={8} />
				<HighlightIndeterminate />
			</div>
			<DivPx size={8} />
			<div className={s.flex}>
				<ProgressCircle size={16} value={0} />
				<DivPx size={8} />
				<ProgressCircle size={16} value={0.25} />
				<DivPx size={8} />
				<ProgressCircle size={16} value={0.5} />
				<DivPx size={8} />
				<ProgressCircle size={16} value={0.75} />
				<DivPx size={8} />
				<ProgressCircle size={16} value={1} />
			</div>
		</div>
		<DivPx size={8} />
		<div className={s.flex}>
			<ProgressCircle size={32} value={0.6} />
			<DivPx size={8} />
			<ProgressCircle size={24} value={0.6} />
			<DivPx size={8} />
			<ProgressCircle size={16} value={0.6} />
			<DivPx size={8} />
			<ProgressCircle size={12} value={0.6} />
		</div>
	</div>
);
