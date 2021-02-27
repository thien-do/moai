import { Button, toast, ToastPane } from "@moai/core";

const noop = () => {};

export const ToastGallery = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<div className="flex-1 space-y-8">
				<Button
					onClick={() => toast(toast.types.success, "Post published")}
					children="Toast Success"
				/>
				<ToastPane
					close={noop}
					type={ToastPane.types.success}
					children="Toast"
				/>
			</div>
			<div className="flex-1 space-y-8">
				<Button
					onClick={() => toast(toast.types.failure, "Cannot publish")}
					children="Toast Failure"
				/>
				<ToastPane
					close={noop}
					type={ToastPane.types.failure}
					children="Toast"
				/>
			</div>
		</div>
		<div>
			<ToastPane
				close={noop}
				type={ToastPane.types.success}
				children="Multi-line Toast. Lorem ipsum dolor sit amet"
			/>
		</div>
	</div>
);
