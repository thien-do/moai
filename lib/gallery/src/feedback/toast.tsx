import { Button, Dialog, DivPx, toast, ToastPane } from "../../../core/src";
import s from "../styles.module.css";

const noop = () => Dialog.alert("Noop");

export const GalleryFeedbackToast = (): JSX.Element => (
	<div>
		<div className={s.flex}>
			<div className={s.flex1}>
				<Button
					onClick={() => toast(toast.types.success, "Post published")}
					children="Toast Success"
				/>
				<DivPx size={8} />
				<ToastPane
					close={noop}
					type={ToastPane.types.success}
					children="Toast"
				/>
			</div>
			<DivPx size={8} />
			<div className={s.flex1}>
				<Button
					onClick={() => toast(toast.types.failure, "Cannot publish")}
					children="Toast Failure"
				/>
				<DivPx size={8} />
				<ToastPane
					close={noop}
					type={ToastPane.types.failure}
					children="Toast"
				/>
			</div>
		</div>
		<DivPx size={8} />
		<div>
			<ToastPane
				close={noop}
				type={ToastPane.types.success}
				children="Multi-line Toast. Lorem ipsum dolor sit amet"
			/>
		</div>
	</div>
);
